<?php
namespace Server\Src\Controllers;

use Server\Src\Providers\IncubateeProvider;
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
        $incubateesProvider = new IncubateeProvider($this->db);
        switch ($this->handler) {
            case Constants::CREATE_INCUBATEE:
            $response = $incubateesProvider->createIncubatee();
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