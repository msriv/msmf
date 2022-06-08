<?php
namespace Server\Src\Controllers;
use Server\Src\Providers\BlogsProvider;
use Server\Src\Utils\Constants;

class BlogsController {
  private $db;
  private $handler;
  private $args;

  public function __construct($database, $handler, $args) {
    $this->db = $database;
    $this->handler = $handler;
    $this->args = $args;
  }

  public function processRequest() {
    $blogsProvider = new BlogsProvider($this->db);
    switch ($this->handler) {
      case Constants::GET_ALL_BLOGS :
        $response = $blogsProvider->getAllBlogs();
        break;
      case Constants::GET_BLOG_BY_ID :
        $response = $blogsProvider->getBlogById($this->args["id"]);
        break;
      case Constants::CREATE_BLOG:
        $response = $blogsProvider->createBlog();
        break;
      default:
        $response = $blogsProvider->notFoundResponse();
        break;
    }
    header($response['status_code_header']);
    if ($response['body']) {
        echo $response['body'];
    }
  }
}