<?php
  namespace Server\Src\Controllers;

  use Server\Src\Providers\IncubateeProvider;
  use Server\Src\Utils\Helpers;
  use Server\Src\Utils\Constants;

  class IncubateeController {
      private $handler;
      private $args;

      public function __construct($handler, $args)
      {
          $this->handler = $handler;
          $this->args = $args;
          $this->secret = $_ENV["SECRET"];
      }

      public function processRequest() {
          $incubateeProvider = new IncubateeProvider($this->db);
          switch ($this->handler) {
              case Constants::CREATE_INCUBATEE: {
                $response = $incubateeProvider->createIncubatee();
              } break;
          }
          header($response['status_code_header']);
          if ($response['body']) {
              echo $response['body'];
          }
      }

      
  }
?>