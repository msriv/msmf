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
}    