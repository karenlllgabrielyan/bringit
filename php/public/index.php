<?php
require_once __DIR__ . '/../vendor/autoload.php';

use App\UserController;
use App\PostController;

header("Content-Type: application/json");

$method = $_SERVER['REQUEST_METHOD'];
$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

$input = json_decode(file_get_contents('php://input'), true);

try {
    if ($method === 'POST' && $path === '/users') {
        UserController::create($input);
    } elseif ($method === 'GET' && $path === '/users') {
        UserController::getAll();
    } elseif ($method === 'POST' && $path === '/posts') {
        PostController::create($input);
    } elseif ($method === 'GET' && $path === '/posts') {
        PostController::getAll();
    } else {
        http_response_code(404);
        echo json_encode(['error' => 'Not Found']);
    }
} catch (Exception $e) {
    http_response_code(400);
    echo json_encode(['error' => $e->getMessage()]);
}
