<?php 
namespace Server;
use Doctrine\ORM\Tools\Console\ConsoleRunner;
require "bootstrap.php";

return ConsoleRunner::createHelperSet($entityManager);
