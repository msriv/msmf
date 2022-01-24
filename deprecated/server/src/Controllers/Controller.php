<?php
namespace Src\Controllers;

use Src\Controllers\Facility;
use Src\Controllers\AssetsManager;
use Src\Controllers\Auth;

class Controller {
    private $db;
    private $handler;
    private $vars;

  public function __construct($db, $handler, $vars, $level, $role) {
    $this->db = $db;
    $this->handler = explode(":", $handler);
    $this->vars = $vars;
  }

  public function processRequest() {
    $controllerType = $this->handler[0];
    $controllerFunction = $this->handler[1];
    $headers = apache_request_headers();
    $token = explode(" ", $headers['Authorization'])[1];
    switch ($controllerType) {
        case "controller" : {
          header("Access-Control-Allow-Origin: *");
          header("Content-Type: application/json; charset=UTF-8");
          header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
          header("Access-Control-Max-Age: 3600");
          header("Access-Control-Allow-Headers: *");
          $response['status_code_header'] = 'HTTP/1.1 200 OK';
          header($response['status_code_header']);
          echo $response;
        } break;
        case "auth" : {
          $authController = new Auth($_POST["user_id"], $controllerFunction, $token);
          $authController->processRequest();
        } break;
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