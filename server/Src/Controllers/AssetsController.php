<?php
namespace Server\Src\Controllers;

use Server\Src\Providers\AssetsProvider;
use Server\Src\Utils\Constants;

class AssetsController {
  private $db;
  private $handler;
  private $args;

  public function __construct($database, $handler, $args) {
    $this->db = $database;
    $this->handler = $handler;
    $this->args = $args;
  }

  public function processRequest() {
        $assetsProvider = new AssetsProvider($this->db);
        switch ($this->handler) {
            case Constants::CREATE_ASSETS:
            $response = $assetsProvider->createAssets();
            break;
            case Constants::GET_ALL_ASSETS:
            $response = $assetsProvider->getAllAssets();
            break;
            default:
            $response = $assetsProvider->notFoundResponse();
            break;
        }
        
        header($response['status_code_header']);
        if($response['body']) {
            echo $response['body'];
        }
    }

   
    private function getAllAssets() {
         $query = "
            SELECT
                uid, name, alt, width, height, uri, path, mime
            FROM
                assets;
            ";

        try {
        $statement = $this->db->query($query);
        $result = $statement->fetchAll(\PDO::FETCH_ASSOC);
        } catch (\PDOException $e) {
        exit($e->getMessage());
        }

        $response['status_code_header'] = 'HTTP/1.1 200 OK';
        $response['body'] = json_encode($result);
        return $response;
    }
}    