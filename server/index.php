<?php

require "./start.php";
use Src\Controllers\Controller;

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: *");

define ('SITE_ROOT', realpath(dirname(__FILE__)));

$dispatcher = FastRoute\simpleDispatcher(function(FastRoute\RouteCollector $r) {
    // Auth endpoint 
    $r->addRoute('GET', '/v1/auth/token', ['auth:generate_token', 'visitor:open']);

    // Facilities Endpoints Suite
    $r->addGroup("/v1/facilities", function (FastRoute\RouteCollector $rFacilities) {
        $rFacilities->get("", ['facility:get_all_facilities', "visitor:protected"]);
        $rFacilities->get("/{id}", ['facility:get_facility', "visitor:protected"]);
        $rFacilities->post("", ['facility:create_facility', "visitor:protected"]);
    });
    // Asset Manager Suite
    $r->addGroup("/v1/assets", function (FastRoute\RouteCollector $rAssets) {
        $rAssets->get("", ["assets:get_all_assets", "admin:protected"]);
        $rAssets->get("/upload", ["assets:create_assets", "admin:protected"]);
    });
});

// Fetch method and URI from somewhere
$httpMethod = $_SERVER['REQUEST_METHOD'];
$uri = $_SERVER['REQUEST_URI'];

// Strip query string (?foo=bar) and decode URI
if (false !== $pos = strpos($uri, '?')) {
    $uri = substr($uri, 0, $pos);
}
$uri = rawurldecode($uri);

$routeInfo = $dispatcher->dispatch($httpMethod, $uri);
switch ($routeInfo[0]) {
    case FastRoute\Dispatcher::NOT_FOUND:
        // ... 404 Not Found
        header("HTTP/1.1 404 Not Found");
        break;
    case FastRoute\Dispatcher::METHOD_NOT_ALLOWED:
        $allowedMethods = $routeInfo[1];
        // ... 405 Method Not Allowed
        header("HTTP/1.1 405 Method Not Allowed");
        break;
    case FastRoute\Dispatcher::FOUND:
        $handler = $routeInfo[1][0];
        $level_role = explode(":", $routeInfo[1][1]);
        $role = $level_role[0];
        $level = $level_role[1];
        // ... call $handler with $vars
        $controller = new Controller($dbConnection, $handler, $level, $role);
        $controller->processRequest();
        break;
}
