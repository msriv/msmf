<?php 

namespace Server\Src\Services;

use Doctrine\DBAL\Connection as DBALConnection;
use Doctrine\DBAL\DriverManager;
use Doctrine\ORM\Configuration;
use Doctrine\ORM\Tools\Setup;
use Doctrine\ORM\EntityManager;
use Server\Src\Utils\Constants;

class DatabaseService {

    private string $database;
    private string $user;
    private string $password;
    private string $host;

    public function __construct(string $host, string $database, string $user, string $password)
    {
        $this->host = $host;
        $this->database = $database;
        $this->user = $user;
        $this->password = $password;
    }

    public function createConfig(bool $isDevMode, ?string $proxyDir, ?string $cache, bool $useSimpleAnnotationReader): Configuration 
    {
        return Setup::createAnnotationMetadataConfiguration(array("/server/Src/Models"), $isDevMode, $proxyDir, $cache, $useSimpleAnnotationReader);
    }

    public function createConnection(): DBALConnection
    {
        $connectionParameters = array(
            'host' => $this->host,
            'dbname' => $this->database,
            'user' => $this->user,
            'password' => $this->password,
            'driver' => Constants::DATABASE_DRIVER
        );

        return DriverManager::getConnection($connectionParameters);
    }

    public function createEntityManager(DBALConnection $connection, Configuration $configuration): EntityManager {
       return EntityManager::create($connection, $configuration);
    }


}