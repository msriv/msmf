<?php

namespace Server\Src\Providers;

use Server\Src\Services\AuthService;
use Server\Src\Utils\Helpers;

class AuthProvider extends Provider  {
    private $authService;
    public function __construct() {}
    public function generate_token($userId) {
        $this->authService = new AuthService();
        return Helpers::createSuccessResponse(201, array("token" => $this->authService->generateToken($userId, null)));
    }

        public function validate_token($token) {

            if ($this->authService->validateToken($token)) {
                $result["ok"] = true;
                $response['status_code_header'] = 'HTTP/1.1 200 OK';
            }
            
            $response['body'] = json_encode($result);
            return $response;
        }
}
