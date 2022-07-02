<?php
namespace Server\Src\Controllers;

use Server\Src\Providers\IncubateesProvider;
use Server\Src\Utils\Constants;

class IncubateesController {
  private $db;
  private $handler;
  private $args;

  public function __construct($database, $handler, $args) {
    $this->db = $database;
    $this->handler = $handler;
    $this->args = $args;
  }

  public function processRequest() {
        $incubateesProvider = new IncubateesProvider($this->db);
        switch ($this->handler) {
            case Constants::CREATE_INCUBATEE:
            $response = $incubateesProvider->createIncubatee();
            break;
            case Constants::GET_ALL_INCUBATEES:
            $response = $incubateesProvider->getAllIncubatees();
            break;
            default:
            $response = $incubateesProvider->notFoundResponse();
            break;
        }
        
        header($response['status_code_header']);
        if($response['body']) {
            echo $response['body'];
        }
    }
}    