<?php
    namespace Src\Controllers;
    use ReallySimpleJWT\Token;

    class Auth {
        private $user_token;
        private $secret;
        private $handler;
        private $user_id;

        public function __construct($user_id, $handler, $user_token)
        {
            $this->user_id = $user_id;
            $this->handler = $handler;
            $this->user_token = $user_token;
            $this->secret = $_ENV["SECRET"];
        }

        public function processRequest() {
            switch ($this->handler) {
                case 'generate_token': {
                    $response = $this->generate_token();
                } break;
                case 'validate_token': {
                    $response = $this->validate_token($this->user_token);
                } break;
            }
            header($response['status_code_header']);
            if ($response['body']) {
                echo $response['body'];
            }
        }

        private function generate_token() {
            $payload = [
                'iat' => time(),
                'uid' => $this->user_id,
                'exp' => time() + 100 * 60 * 10,
                'iss' => $_ENV["HOST"]
            ];

            $token = Token::customPayload($payload, $this->secret);
            $result["token"] = $token;
            $response['status_code_header'] = 'HTTP/1.1 200 OK';
            $response['body'] = json_encode($result);
            return $response;
        }

        private function validate_token($token) {
            $result["ok"] = false;
            $response['status_code_header'] = 'HTTP/1.1 401 Unauthorized';

            if (Token::validate($token, $this->secret) && Token::validateExpiration($token, $this->secret)) {
                $result["ok"] = true;
                $response['status_code_header'] = 'HTTP/1.1 200 OK';
            }
            
            $response['body'] = json_encode($result);
            return $response;
        }
    }
?>