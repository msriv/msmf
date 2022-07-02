<?php

namespace Server\Src;
use FastRoute;
use Server\Src\RootController;
use Server\Src\Utils\Constants;
use Server\Src\Utils\Headers;
use Server\Src\Utils\Helpers;

class Server {
    private $routesDispatcher;
    private $entityManager;

    public function __construct() {}

    // Validates whether the request has Authorization Header for protected routes
    private function validateRequest($scope): bool {
        $headers = apache_request_headers();
        if ($scope == "protected" && !isset($headers['Authorization'])) {
            return false;
        } else {
            return true;
        }
    }

    // Creates a request handler for incoming requests
    public function createRequestHandler(array $requestInfo) {
        $routeState = $requestInfo[0];
        $controller = $requestInfo[1][0];
        $handler = $requestInfo[1][1];
        $scope = $requestInfo[1][2];
        $args = $requestInfo[2];

        switch ($routeState) {
            case FastRoute\Dispatcher::NOT_FOUND:
                // ... 404 Not Found
                header(Headers::NOT_FOUND);
                break;
            case FastRoute\Dispatcher::METHOD_NOT_ALLOWED:
                // ... 405 Method Not Allowed
                header(Headers::METHOD_NOT_ALLOWED);
                break;
            case FastRoute\Dispatcher::FOUND:
                if(!$this->validateRequest($scope)) {
                    header(Headers::UNAUTHORIZED);
                    Helpers::createFailureResponse(401, array("message" => "Unauthorized Request"));
                    break;
                } else {
                    if ( $handler == Constants::API_STATUS )  {
                        $response = Helpers::createSuccessResponse(200, array("message" => "MSMF API Alive", "status" => 200, "ok" => true));
                        header($response['status_code_header']);
                        echo $response['body'];
                        break;
                    }
                    $rootController = new RootController($this->entityManager, $controller, $handler, $args);
                    $rootController->processRequest();
                    break;
                }
        }
    }

    // Creates a Routes Dispatcher object for API routes
    public function createRoutesDispatcher(): FastRoute\Dispatcher {
        $this->routesDispatcher = FastRoute\simpleDispatcher(function(FastRoute\RouteCollector $r) {
            // Liveness Route
            $r->addRoute('GET', '/v1/status', ["", Constants::API_STATUS]);

            // Auth routes 
            $r->addGroup('/v1/auth', function (FastRoute\RouteCollector $rAuth) {
                $rAuth->post('/token', [Constants::AUTH_CONTROLLER,Constants::GENERATE_TOKEN, Constants::OPEN]);
                $rAuth->get('/validate', [Constants::AUTH_CONTROLLER,Constants::VALIDATE_TOKEN, Constants::PROTECTED]);
            });

            // Facilities routes
            $r->addGroup("/v1/facilities", function (FastRoute\RouteCollector $rFacilities) {
                $rFacilities->get("", [Constants::FACILITY_CONTROLLER, Constants::GET_ALL_FACILITY, Constants::PROTECTED]);
                $rFacilities->get("/{id}", [Constants::FACILITY_CONTROLLER, Constants::GET_FACILITY, Constants::PROTECTED]);
                $rFacilities->post("", [Constants::FACILITY_CONTROLLER, Constants::CREATE_FACILITY, Constants::PROTECTED]);
            });

            // Asset routes
            $r->addGroup("/v1/assets", function (FastRoute\RouteCollector $rAssets) {
                $rAssets->get("", [Constants::ASSETS_CONTROLLER, Constants::GET_ALL_ASSETS, Constants::PROTECTED]);
                $rAssets->post("/upload", [Constants::ASSETS_CONTROLLER, Constants::CREATE_ASSETS, Constants::PROTECTED]);
            });

            // Blogs routes
            $r->addGroup("/v1/blogs", function (FastRoute\RouteCollector $rBlogs) {
                $rBlogs->get("", [Constants::BLOGS_CONTROLLER, Constants::GET_ALL_BLOGS, Constants::OPEN]);
                $rBlogs->get("/{id}", [Constants::BLOGS_CONTROLLER, Constants::GET_BLOG_BY_ID, Constants::OPEN]);
                $rBlogs->post("", [Constants::BLOGS_CONTROLLER, Constants::CREATE_BLOG, Constants::OPEN]);
            });

            // People routes
            $r->addGroup("/v1/people", function (FastRoute\RouteCollector $rPeople) {
                $rPeople->get("/{vertical}/{team}/{subteam}", [Constants::PEOPLE_CONTROLLER, Constants::GET_PEOPLE_BY_TEAM, Constants::OPEN]);
                $rPeople->post("", [Constants::PEOPLE_CONTROLLER, Constants::CREATE_PERSON, Constants::OPEN]);
            });

            // Incubatees routes
            $r->addGroup("/v1/incubatees", function (FastRoute\RouteCollector $rIncubatees) {
                $rIncubatees->get("", [Constants::INCUBATEES_CONTROLLER, Constants::GET_ALL_INCUBATEES, Constants::OPEN]);
                $rIncubatees->get("/{id}", [Constants::INCUBATEES_CONTROLLER, Constants::GET_INCUBATEE_BY_ID, Constants::OPEN]);
                $rIncubatees->post("", [Constants::INCUBATEES_CONTROLLER, Constants::CREATE_INCUBATEE, Constants::OPEN]);
                $rIncubatees->put("", [Constants::INCUBATEES_CONTROLLER, Constants::UPDATE_INCUBATEE, Constants::OPEN]);
            });
        });

        return $this->routesDispatcher;
    }

    public function setEntityManager($em) {
        $this->entityManager = $em;
    }

}