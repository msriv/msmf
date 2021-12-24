<?php
    namespace Src\Controllers;
    use ReallySimpleJWT\Token;

    class Auth {
        private $token;
        private $secret;
        private $handler;
        private $user_id;

        public function __construct($user_id, $handler)
        {
            $this->user_id = $user_id;
            $this->handler = $handler;
            $this->secret = $_ENV["SECRET"];
        }

        public function processRequest() {
            switch ($this->handler) {
                case 'generate_token': {
                    $response = $this->generate_token();
                } break;
                case 'validate_expiration': {

                } break;
            }
            header($response['status_code_header']);
            var_dump($response);
        }

        private function generate_token() {
            $payload = [
                'iat' => time(),
                'uid' => 1,
                'exp' => time() + 100 * 60 * 10,
                'iss' => $_ENV["HOST"]
            ];

            $token = Token::customPayload($payload, $this->secret);
            $response['status_code_header'] = 'HTTP/1.1 200 OK';
            $response['body'] = json_encode($token);
            return $response;
        }
    }
?>