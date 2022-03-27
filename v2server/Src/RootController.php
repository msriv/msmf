<?php

namespace Server\Src;
use Server\Src\Controllers\AuthController;
use Server\Src\Controllers\FacilityController;
use Server\Src\Controllers\AssetsController;
use Server\Src\Utils\Constants;

class RootController {
    private $database;
    private $controller;
    private $handler;
    private $args;

    public function __construct($database, $controller, $handler, $args)
    {  
       $this->database = $database;
       $this->controller = $controller;
       $this->handler = $handler;
       $this->args = $args;
    }

    public function processRequest() {
        // Get the controller type and redirect handler request to the respective handler with args.
        $controllerType = $this->controller;
        $controllerFunction = $this->handler;
        switch ($controllerType) {
            case Constants::AUTH_CONTROLLER : {
                $authController = new AuthController($this->database, $controllerFunction, $this->args);
                $authController->processRequest();
            } break;

            case Constants::FACILITY_CONTROLLER : {
                $facilityController = new FacilityController($this->database, $controllerFunction, $this->args);
                $facilityController->processRequest();
            } break;
        
            case Constants::ASSETS_CONTROLLER : {
                $assetsController = new AssetsController($this->database, $controllerFunction, $this->args);
                $assetsController->processRequest();
            } break;

        }
    }
}