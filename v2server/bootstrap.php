<?php


namespace Server;
require 'vendor/autoload.php';

use Dotenv\Dotenv;
use Server\Src\Services\DatabaseService;

$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->safeLoad();

$database = new DatabaseService($_ENV['HOST'], $_ENV['DATABASE'], $_ENV['USERNAME'], $_ENV['PASSWORD']);
$configuration = $database->createConfig(false, null, null, false);
$connection = $database->createConnection();
$entityManager = $database->createEntityManager($connection, $configuration);

