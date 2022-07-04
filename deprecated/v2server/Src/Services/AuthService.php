<?php 

namespace Server\Src\Services;
use ReallySimpleJWT\Token;

class AuthService {

    private $secret;

    public function __construct()
    {
        $this->secret = $_ENV["SECRET"];
    }

    public function generateToken($issuer, ?array $payload) {
        $config = array(
            'iat' => time(),
            'uid' => $issuer,
            'exp' => time() + 100 * 60 * 10,
            'iss' => $_ENV["HOST"]
        );

        if ($payload) {
            array_merge($config, $payload);
        }

        return Token::customPayload($payload, $this->secret);
    }

    public function validateToken($token) {
        return Token::validate($token, $this->secret) && Token::validateExpiration($token, $this->secret);
    }
}