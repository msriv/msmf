<?php

namespace Server\Src\Utils;



class Helpers {

    public static function getMethod() {
        return $_SERVER['REQUEST_METHOD'];
    }

    public static function getUri() {
        $uri = $_SERVER['REQUEST_URI'];

        if (false !== $pos = strpos($uri, '?')) {
            $uri = substr($uri, 0, $pos);
        }
        $uri = rawurldecode($uri);

        return $uri;
    }

    public static function getBearerTokenFromHeader() {
        $headers = apache_request_headers();
        return explode(" ", $headers['Authorization'])[1];
    }

    public static function createSuccessResponse($statusCode, $body) {
        switch ($statusCode) {
            case 200: {
                $response['status_code_header'] = Headers::OK;
            } break;
            case 201: {
                $response['status_code_header'] = Headers::CREATED;
            } break;
        }
        if ($body != null) {
            $response['body'] = json_encode($body);
        } else {
            $response['body'] = $body;
        }
        
        return $response;
    }

    public static function createFailureResponse($statusCode, $body) {
        switch ($statusCode) {
            case 400: {
                $response['status_code_header'] = Headers::BAD_REQUEST;
            } break;
            case 401: {
                $response['status_code_header'] = Headers::UNAUTHORIZED;
            } break;
            case 404: {
                $response['status_code_header'] = Headers::NOT_FOUND;
            } break;
            case 405: {
                $response['status_code_header'] = Headers::METHOD_NOT_ALLOWED;
            } break;
        }
        if ($body != null) {
            $response['body'] = json_encode($body);
        } else {
            $response['body'] = $body;
        }
        return $response;
    }

    public static function convertToBytes(string $from): ?int {
        $units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB'];
        $number = substr($from, 0, -2);
        $suffix = strtoupper(substr($from,-2));

        //B or no suffix
        if(is_numeric(substr($suffix, 0, 1))) {
            return preg_replace('/[^\d]/', '', $from);
        }

        $exponent = array_flip($units)[$suffix] ?? null;
        if($exponent === null) {
            return null;
        }

        return $number * (1024 ** $exponent);
    }

    public static function sendPost(string $url, array $body, ?array $options = null) {
        $curl = curl_init($url);

        // default options
        curl_setopt($curl, CURLOPT_POST, true);
        curl_setopt($curl, CURLOPT_POSTFIELDS, http_build_query($body));
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

        if ($options) {
            foreach($options as $opt) {
                curl_setopt($curl, $opt->type, $opt->val);
            }
        } 

        $response = curl_exec($curl);
        return Helpers::createSuccessResponse(201, $response);
    }
}