<?php
namespace Src\Controllers;

use Src\Controllers\Facility;
use Src\Controllers\AssetsManager;

class Controller {
    private $db;
    private $handler;
    private $vars;

  public function __construct($db, $handler, $vars) {
    $this->db = $db;
    $this->handler = explode(":", $handler);
    $this->vars = $vars;
  }

  public function processRequest() {
    $controllerType = $this->handler[0];
    $controllerFunction = $this->handler[1];

    switch ($controllerType) {
        case "facility" : {
            $facilityController = new Facility($this->db, $controllerFunction, $this->vars);
            $facilityController->processRequest();
        } break;
        case "assets" : {
            $assetsController = new AssetsManager($this->db, $controllerFunction, $this->vars);
            $assetsController->processRequest();
        } break;
    }
  }
}