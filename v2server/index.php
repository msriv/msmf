<?php

namespace Server;

use Server\Src\Utils\Headers;
use Server\Src\Utils\Helpers;
use Server\Src\Server;

require_once("bootstrap.php");

error_reporting(0);
// $_POST = json_decode(file_get_contents("php://input"), true);

Headers::setResponseHeaders();

define ('SITE_ROOT', realpath(dirname(__FILE__)));

$server = new Server();
$server->setEntityManager($entityManager);
$requestInfo = $server->createRoutesDispatcher()->dispatch(Helpers::getMethod(), Helpers::getUri());
$server->createRequestHandler($requestInfo);

