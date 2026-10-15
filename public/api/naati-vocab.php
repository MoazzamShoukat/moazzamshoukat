<?php
/**
 * NAATI CCL Urdu Vocabulary Search API
 * Handles exact matching, minimum edit distance (Levenshtein) fuzzy matching,
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

// Optional test reset parameter: ?reset=1 (for manual testing/owner verification)
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
        'message' => 'Please enter an English word or term to search.',
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
// 5. Search Logic: Exact Match & Minimum Edit Distance (Levenshtein)
// -----------------------------------------------------------------------------
$qLower = strtolower($query);
$exactMatch = null;
$bestFuzzy = null;
$minDistance = 9999;

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
        'searchesUsed' => $searchesUsed,
        'searchesRemaining' => $searchesRemaining,
        'data' => $exactMatch
    ], JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
} else if ($bestFuzzy !== null) {
    echo json_encode([
        'success' => true,
        'match' => 'closest',
        'query' => $query,
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
        'message' => 'No vocabulary matches found.',
        'searchesUsed' => $searchesUsed,
        'searchesRemaining' => $searchesRemaining
    ], JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
}