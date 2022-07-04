<?php

namespace Server\Src\Utils;

class Headers {
    const OK = "HTTP/1.1 200 OK";
    const CREATED = "HTTP/1.1 201 Created";
    const BAD_REQUEST = "HTTP/1.1 400 Bad Request";
    const UNAUTHORIZED = "HTTP/1.1 401 Unauthorized";
    const NOT_FOUND = "HTTP/1.1 404 Not Found";
    const METHOD_NOT_ALLOWED = "HTTP/1.1 405 Method Not Allowed";

    // DELETE
    // PATCH
    // PUT

    public function __construct() {}

    public static function setResponseHeaders() {
        header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/json; charset=UTF-8");
        header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
        header("Access-Control-Max-Age: 3600");
        header("Access-Control-Allow-Headers: *");
    }
}