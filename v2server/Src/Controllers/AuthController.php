<?php
    namespace Server\Src\Controllers;

    use Server\Src\Providers\AuthProvider;
    use Server\Src\Utils\Helpers;

    class AuthController {
        private $handler;
        private $args;

        public function __construct($handler, $args)
        {
            $this->handler = $handler;
            $this->args = $args;
            $this->secret = $_ENV["SECRET"];
        }

        public function processRequest() {
            $authProvider = new AuthProvider($this->db);
            switch ($this->handler) {
                case 'generate_token': {
                    $response = $authProvider->generate_token($_POST["user_id"]);
                } break;
                case 'validate_token': {
                    $response = $authProvider->validate_token(Helpers::getBearerTokenFromHeader());
                } break;
                default:
                    $response = $authProvider->notFoundResponse();
                    break;
            }
            header($response['status_code_header']);
            if ($response['body']) {
                echo $response['body'];
            }
        }

        
    }
?>