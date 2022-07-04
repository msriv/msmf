<?php
namespace Server\Src\Controllers;
use Server\Src\Providers\FacilityProvider;
use Server\Src\Utils\Constants;

class FacilityController {
  private $db;
  private $handler;
  private $args;

  public function __construct($database, $handler, $args) {
    $this->db = $database;
    $this->handler = $handler;
    $this->args = $args;
  }

  public function processRequest() {
    $facilityProvider = new FacilityProvider($this->db);
    switch ($this->handler) {
      case Constants::GET_FACILITY :
        $response = $facilityProvider->getFacility($this->args["id"]);
        break;
      case Constants::GET_ALL_FACILITY :
        $response = $facilityProvider->getAllFacilities();
        break;
      case Constants::CREATE_FACILITY:
        $response = $facilityProvider->createFacility();
        break;
      default:
        $response = $facilityProvider->notFoundResponse();
        break;
    }
    header($response['status_code_header']);
    if ($response['body']) {
        echo $response['body'];
    }
  }
}