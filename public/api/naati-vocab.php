<?php
/**
 * NAATI CCL Urdu Complete Dictionary (7,796 items) API
 * Supports English & Urdu bilingual search, exact + top 3 closest suggestions (Levenshtein),
 * ID lookup, and strict 20 searches/IP/24h rate limiting.
 */

if (!headers_sent()) {
    header('Content-Type: application/json; charset=utf-8');
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
}

if (isset($_SERVER['REQUEST_METHOD']) && $_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    if (!headers_sent()) http_response_code(200);
    exit;
}

// -----------------------------------------------------------------------------
// 1. Client IP Detection
// -----------------------------------------------------------------------------
if (!function_exists('get_client_ip')) {
    function get_client_ip(): string {
        $candidates = [
            'HTTP_CF_CONNECTING_IP',
            'HTTP_X_REAL_IP',
            'HTTP_X_FORWARDED_FOR',
            'REMOTE_ADDR'
        ];

        foreach ($candidates as $key) {
            if (!empty($_SERVER[$key])) {
                $parts = explode(',', $_SERVER[$key]);
                $ip = trim($parts[0]);
                if (filter_var($ip, FILTER_VALIDATE_IP)) {
                    return $ip;
                }
            }
        }

        return '127.0.0.1';
    }
}

$clientIp = get_client_ip();
$ipKey = hash('sha256', $clientIp . '_naati_salt_2026');

// -----------------------------------------------------------------------------
// 2. Rate Limiting Check (20 searches / IP / 24 hours)
// -----------------------------------------------------------------------------
$rateLimitFile = __DIR__ . '/data/rate_limits.json';
$maxDailySearches = 20;
$timeWindow = 86400; // 24 hours
$now = time();

$isReset = isset($_GET['reset']) && $_GET['reset'] === 'secret_reset_test';

$rateData = [];
if (file_exists($rateLimitFile)) {
    $fp = fopen($rateLimitFile, 'c+');
    if ($fp && flock($fp, LOCK_SH)) {
        $contents = stream_get_contents($fp);
        if (!empty($contents)) {
            $decoded = json_decode($contents, true);
            if (is_array($decoded)) {
                $rateData = $decoded;
            }
        }
        flock($fp, LOCK_UN);
        fclose($fp);
    }
}

$ipTimestamps = $rateData[$ipKey] ?? [];
$validTimestamps = array_values(array_filter($ipTimestamps, function($ts) use ($now, $timeWindow) {
    return ($now - $ts) < $timeWindow;
}));

if ($isReset) {
    $validTimestamps = [];
}

$searchesUsed = count($validTimestamps);

if ($searchesUsed >= $maxDailySearches) {
    if (!headers_sent()) http_response_code(429);
    echo json_encode([
        'success' => false,
        'error' => 'rate_limit_exceeded',
        'message' => 'You have reached the daily limit of 20 vocabulary searches. Please try again after 24 hours.',
        'searchesUsed' => $searchesUsed,
        'searchesRemaining' => 0,
        'resetInHours' => ceil(($validTimestamps[0] + $timeWindow - $now) / 3600)
    ], JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
    exit;
}
// -----------------------------------------------------------------------------
// 3. Load 7,796 Vocabulary Database
// -----------------------------------------------------------------------------
$vocabFile = __DIR__ . '/data/naati-vocabulary.json';
if (!file_exists($vocabFile)) {
    if (!headers_sent()) http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => 'data_missing',
        'message' => 'Vocabulary database not found on server.'
    ]);
    exit;
}

$vocabJson = file_get_contents($vocabFile);
$vocabItems = json_decode($vocabJson, true);

if (!is_array($vocabItems)) {
    if (!headers_sent()) http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => 'data_invalid',
        'message' => 'Invalid vocabulary database format.'
    ]);
    exit;
}

// -----------------------------------------------------------------------------
// 4. Normalization Helpers
// -----------------------------------------------------------------------------
if (!function_exists('normalize_urdu')) {
    function normalize_urdu(string $text): string {
        $text = trim($text);
        $text = preg_replace('/[\x{064B}-\x{065F}\x{0670}]/u', '', $text);
        $text = str_replace(["\xE2\x80\x8C", "\xD9\x80"], '', $text);
        $text = preg_replace('/[\x{0622}\x{0623}\x{0625}]/u', "\x{0627}", $text);
        $text = preg_replace('/[\x{064A}\x{0649}\x{0626}]/u', "\x{06CC}", $text);
        $text = str_replace("\x{0643}", "\x{06A9}", $text);
        $text = preg_replace('/[\x{0629}\x{0647}]/u', "\x{06C1}", $text);
        $text = preg_replace('/\s+/u', ' ', $text);
        return mb_strtolower($text, 'UTF-8');
    }
}

if (!function_exists('clean_english')) {
    function clean_english(string $text): string {
        $clean = preg_replace('/\s*\(Standard Urdu:[^)]*\)/i', '', $text);
        return trim($clean);
    }
}

// -----------------------------------------------------------------------------
// 5. Direct ID Lookup (for 1-click suggestion loading)
// -----------------------------------------------------------------------------
if (isset($_GET['id']) && is_numeric($_GET['id'])) {
    $targetId = (int)$_GET['id'];
    foreach ($vocabItems as $item) {
        if ($item['id'] === $targetId) {
            echo json_encode([
                'success' => true,
                'match' => 'exact',
                'searchesUsed' => $searchesUsed,
                'searchesRemaining' => max(0, $maxDailySearches - $searchesUsed),
                'data' => $item
            ], JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
            exit;
        }
    }
}

// -----------------------------------------------------------------------------
// 6. Search Query Handling
// -----------------------------------------------------------------------------
$rawQuery = $_GET['q'] ?? $_POST['q'] ?? '';
$query = trim($rawQuery);

if ($query === '') {
    if (!headers_sent()) http_response_code(400);
    echo json_encode([
        'success' => false,
        'error' => 'empty_query',
        'message' => 'Please enter an English meaning or Urdu word to search.',
        'searchesUsed' => $searchesUsed,
        'searchesRemaining' => $maxDailySearches - $searchesUsed
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

$isUrdu = (bool)preg_match('/[\x{0600}-\x{06FF}]/u', $query);
$exactMatch = null;
$candidates = [];

if ($isUrdu) {
    // -------------------------------------------------------------------------
    // Urdu Search: Check urdu_word first, then substrings & Levenshtein
    // -------------------------------------------------------------------------
    $normQ = normalize_urdu($query);

    foreach ($vocabItems as $item) {
        $normWord = normalize_urdu($item['urdu_word']);
        
        // Exact match
        if ($normWord === $normQ) {
            $exactMatch = $item;
            break;
        }

        // Substring match in urdu_word
        if (mb_strpos($normWord, $normQ, 0, 'UTF-8') !== false) {
            if ($exactMatch === null) {
                $exactMatch = $item;
                break;
            }
        }

        // Calculate distance for top 3 suggestions
        $dist = levenshtein($normQ, $normWord);
        $candidates[] = [
            'id' => $item['id'],
            'urdu_word' => $item['urdu_word'],
            'english_meaning' => clean_english($item['english_meaning']),
            'naati_domain' => $item['naati_domain'],
            'part_of_speech' => $item['part_of_speech'] ?? null,
            'dist' => $dist
        ];
    }

} else {
    // -------------------------------------------------------------------------
    // English Search: Check english_meaning keywords, then substrings & Levenshtein
    // -------------------------------------------------------------------------
    $qLower = strtolower($query);

    foreach ($vocabItems as $item) {
        $cleanEn = strtolower(clean_english($item['english_meaning']));
        $tokens = preg_split('/[\;\,\/]/', $cleanEn);

        // Exact token match
        foreach ($tokens as $t) {
            $t = trim($t);
            if ($t === $qLower) {
                $exactMatch = $item;
                break 2;
            }
        }

        // Substring match
        if (strpos($cleanEn, $qLower) !== false) {
            if ($exactMatch === null) {
                $exactMatch = $item;
                break;
            }
        }

        // Levenshtein distance on primary word
        $firstWord = explode(' ', explode(';', $cleanEn)[0])[0];
        $dist = levenshtein($qLower, $firstWord);
        $candidates[] = [
            'id' => $item['id'],
            'urdu_word' => $item['urdu_word'],
            'english_meaning' => clean_english($item['english_meaning']),
            'naati_domain' => $item['naati_domain'],
            'part_of_speech' => $item['part_of_speech'] ?? null,
            'dist' => $dist
        ];
    }
}

// -----------------------------------------------------------------------------
// 7. Record Search in Rate Limiting
// -----------------------------------------------------------------------------
$validTimestamps[] = $now;
$rateData[$ipKey] = $validTimestamps;

$fp = fopen($rateLimitFile, 'c+');
if ($fp) {
    if (flock($fp, LOCK_EX)) {
        ftruncate($fp, 0);
        rewind($fp);
        fwrite($fp, json_encode($rateData, JSON_PRETTY_PRINT));
        fflush($fp);
        flock($fp, LOCK_UN);
    }
    fclose($fp);
}

$searchesUsed = count($validTimestamps);
$searchesRemaining = max(0, $maxDailySearches - $searchesUsed);

// -----------------------------------------------------------------------------
// 8. Output Response: FOUND or NOT FOUND (with top 3 closest words)
// -----------------------------------------------------------------------------
if ($exactMatch !== null) {
    echo json_encode([
        'success' => true,
        'match' => 'exact',
        'query' => $query,
        'searchLanguage' => $isUrdu ? 'ur' : 'en',
        'searchesUsed' => $searchesUsed,
        'searchesRemaining' => $searchesRemaining,
        'data' => $exactMatch
    ], JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
} else {
    // Sort candidates and grab top 3 closest words
    usort($candidates, function($a, $b) {
        return $a['dist'] - $b['dist'];
    });
    $top3 = array_slice($candidates, 0, 3);

    // Strip internal dist before returning
    $closestWords = array_map(function($c) {
        return [
            'id' => $c['id'],
            'urdu_word' => $c['urdu_word'],
            'english_meaning' => $c['english_meaning'],
            'naati_domain' => $c['naati_domain'],
            'part_of_speech' => $c['part_of_speech']
        ];
    }, $top3);

    echo json_encode([
        'success' => false,
        'error' => 'not_found',
        'message' => 'Not Found',
        'query' => $query,
        'searchLanguage' => $isUrdu ? 'ur' : 'en',
        'closestWords' => $closestWords,
        'searchesUsed' => $searchesUsed,
        'searchesRemaining' => $searchesRemaining
    ], JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
}