<?php

$appConfig = require __DIR__ . '/../config/app.php';
$routes = require __DIR__ . '/../routes/web.php';

header('Content-Type: application/json');

echo json_encode([
    'app' => $appConfig['name'],
    'status' => 'setup_only',
    'message' => 'Repair Service Zone backend skeleton is ready for API development.',
    'available_routes' => array_keys($routes),
]);
