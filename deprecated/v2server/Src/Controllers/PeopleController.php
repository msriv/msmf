<?php
namespace Server\Src\Controllers;
use Server\Src\Providers\PeopleProvider;
use Server\Src\Utils\Constants;

class PeopleController {
  private $db;
  private $handler;
  private $args;

  public function __construct($database, $handler, $args) {
    $this->db = $database;
    $this->handler = $handler;
    $this->args = $args;
  }

  public function processRequest() {
    $peopleProvider = new PeopleProvider($this->db);
    switch ($this->handler) {
      case Constants::GET_PEOPLE_BY_TEAM :
        $response = $peopleProvider->getPeopleByTeam($this->args["vertical"], $this->args["team"], $this->args["subteam"]);
        break;
      case Constants::CREATE_PERSON :
        $response = $peopleProvider->createPerson();
      default:
        $response = $peopleProvider->notFoundResponse();
        break;
    }
    header($response['status_code_header']);
    if ($response['body']) {
        echo $response['body'];
    }
  }
}