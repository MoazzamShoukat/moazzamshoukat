<?php
/**
 * NAATI CCL Urdu Vocabulary Search API
 * Bilingual English & Urdu search, minimum edit distance (Levenshtein),
 * and strict IP-based rate limiting (20 searches per 24 hours).
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
$timeWindow = 86400; // 24 hours in seconds
$now = time();

// Optional test reset parameter: ?reset=secret_reset_test
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

// Clean old timestamps for this IP
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
// 3. Search Query Handling
// -----------------------------------------------------------------------------
$rawQuery = $_GET['q'] ?? $_POST['q'] ?? '';
$query = trim($rawQuery);

if ($query === '') {
    if (!headers_sent()) http_response_code(400);
    echo json_encode([
        'success' => false,
        'error' => 'empty_query',
        'message' => 'Please enter an English word or Urdu translation to search.',
        'searchesUsed' => $searchesUsed,
        'searchesRemaining' => $maxDailySearches - $searchesUsed
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

// -----------------------------------------------------------------------------
// 4. Load Vocabulary Database
// -----------------------------------------------------------------------------
$vocabFile = __DIR__ . '/data/naati-vocabulary.json';
if (!file_exists($vocabFile)) {
    if (!headers_sent()) http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => 'data_missing',
        'message' => 'Vocabulary data file not found on server.'
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
// 5. Bilingual Normalization & Search Logic
// -----------------------------------------------------------------------------
if (!function_exists('normalize_urdu')) {
    function normalize_urdu(string $text): string {
        $text = trim($text);
        // Strip Arabic diacritics / Tashkeel
        $text = preg_replace('/[\x{064B}-\x{065F}\x{0670}]/u', '', $text);
        // Strip Tatweel
        $text = str_replace("\xE2\x80\x8C", '', $text); // zero-width non-joiner
        $text = str_replace("\xD9\x80", '', $text); // tatweel
        // Normalize Alef variations
        $text = preg_replace('/[\x{0622}\x{0623}\x{0625}]/u', "\x{0627}", $text);
        // Normalize Yeh variations
        $text = preg_replace('/[\x{064A}\x{0649}\x{0626}]/u', "\x{06CC}", $text);
        // Normalize Kaf
        $text = str_replace("\x{0643}", "\x{06A9}", $text);
        // Normalize Teh Marbuta & Arabic Heh to Urdu Choti Heh
        $text = preg_replace('/[\x{0629}\x{0647}]/u', "\x{06C1}", $text);
        // Collapse spaces
        $text = preg_replace('/\s+/u', ' ', $text);
        return mb_strtolower($text, 'UTF-8');
    }
}

$isUrdu = (bool)preg_match('/[\x{0600}-\x{06FF}]/u', $query);
$exactMatch = null;
$bestFuzzy = null;
$minDistance = 9999;

if ($isUrdu) {
    // -------------------------------------------------------------------------
    // Urdu Query Search
    // -------------------------------------------------------------------------
    $normQ = normalize_urdu($query);

    foreach ($vocabItems as $item) {
        $normMeaning = normalize_urdu($item['meaning']);
        
        // Split meaning by common delimiters: /, comma, semicolon, dash
        $tokens = preg_split('/[\/\,\;\-،]/u', $normMeaning);
        $cleanTokens = array_map('trim', $tokens);

        // 1. Exact match against any translation token
        foreach ($cleanTokens as $token) {
            if ($token === $normQ) {
                $exactMatch = $item;
                break 2;
            }
        }

        // 2. Substring match inside full meaning
        if (mb_strpos($normMeaning, $normQ, 0, 'UTF-8') !== false) {
            if ($exactMatch === null) {
                $exactMatch = $item;
                break;
            }
        }

        // 3. Substring match inside Urdu dialogue examples
        foreach ($item['examples'] as $ex) {
            $normExUr = normalize_urdu($ex['ur'] ?? '');
            if (mb_strpos($normExUr, $normQ, 0, 'UTF-8') !== false) {
                if ($exactMatch === null) {
                    $exactMatch = $item;
                    break 2;
                }
            }
        }

        // 4. Fuzzy distance across tokens
        foreach ($cleanTokens as $token) {
            if (!empty($token)) {
                $dist = levenshtein($normQ, $token);
                if ($dist < $minDistance) {
                    $minDistance = $dist;
                    $bestFuzzy = $item;
                }
            }
        }
    }

} else {
    // -------------------------------------------------------------------------
    // English Query Search
    // -------------------------------------------------------------------------
    $qLower = strtolower($query);

    foreach ($vocabItems as $item) {
        $word = $item['word'];
        $wLower = strtolower($word);

        // Phase 1: Exact match (case-insensitive)
        if ($wLower === $qLower) {
            $exactMatch = $item;
            break;
        }

        // Phase 2: Compute Levenshtein distance
        $dist = levenshtein($qLower, $wLower);

        // Prioritize if one contains the other as substring
        if (strpos($wLower, $qLower) !== false || strpos($qLower, $wLower) !== false) {
            $dist = max(1, $dist - 2);
        }

        if ($dist < $minDistance) {
            $minDistance = $dist;
            $bestFuzzy = $item;
        }
    }
}

// -----------------------------------------------------------------------------
// 6. Record Search in Rate Limiting
// -----------------------------------------------------------------------------
$validTimestamps[] = $now;
$rateData[$ipKey] = $validTimestamps;

// Save with file lock
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
// 7. Output Response
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
} else if ($bestFuzzy !== null && $minDistance <= 4) {
    echo json_encode([
        'success' => true,
        'match' => 'closest',
        'query' => $query,
        'searchLanguage' => $isUrdu ? 'ur' : 'en',
        'closestWord' => $bestFuzzy['word'],
        'distance' => $minDistance,
        'message' => "Exact match not found. Closest match: " . $bestFuzzy['word'],
        'searchesUsed' => $searchesUsed,
        'searchesRemaining' => $searchesRemaining,
        'data' => $bestFuzzy
    ], JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
} else {
    echo json_encode([
        'success' => false,
        'error' => 'not_found',
        'query' => $query,
        'searchLanguage' => $isUrdu ? 'ur' : 'en',
        'message' => "Word not found",
        'searchesUsed' => $searchesUsed,
        'searchesRemaining' => $searchesRemaining
    ], JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
}