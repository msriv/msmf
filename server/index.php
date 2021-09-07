<?php
require "./start.php";
use Src\Controllers\Facility;

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$uri = explode( '/', $uri );
define ('SITE_ROOT', realpath(dirname(__FILE__)));
echo(SITE_ROOT);
// endpoints starting with `/post` or `/posts` for GET shows all posts
// everything else results in a 404 Not Found
if ($uri[1] !== 'facility') {
  if($uri[1] !== 'facilities'){
    header("HTTP/1.1 404 Not Found");
    exit();
  }
}

// endpoints starting with `/posts` for POST/PUT/DELETE results in a 404 Not Found
if ($uri[1] == 'facilities' and isset($uri[2])) {
    header("HTTP/1.1 404 Not Found");
    exit();
}

if ($uri[1] == 'facility' and !isset($uri[2])) {
  header("HTTP/1.1 404 Not Found");
  exit();
}
// the post id is, of course, optional and must be a number
$facilityId = null;
if (isset($uri[2])) {
    $facilityId = $uri[2];
}

$requestMethod = $_SERVER["REQUEST_METHOD"];

// pass the request method and post ID to the Post and process the HTTP request:
$controller = new Facility($dbConnection, $requestMethod, $facilityId);
$controller->processRequest();