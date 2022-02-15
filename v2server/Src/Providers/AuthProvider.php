<?php

namespace Server\Src\Providers;
use ReallySimpleJWT\Token;


class AuthProvider extends Provider  {
    public function __construct($db)
    {
        $this->db = $db;
    }
        public function generate_token() {
            $payload = [
                'iat' => time(),
                'uid' => $this->user_id,
                'exp' => time() + 100 * 60 * 10,
                'iss' => $_ENV["HOST"]
            ];
            $this->user_token = Token::customPayload($payload, $this->secret);
            $result["token"] = $this->user_token;
            $response['status_code_header'] = 'HTTP/1.1 200 OK';
            $response['body'] = json_encode($result);
            return $response;
        }

        public function validate_token($token) {
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
