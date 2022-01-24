<?php
namespace Src\Controllers;

class Blog {
  private $db;
  private $requestMethod;
  private $blogId;

  public function __construct($db, $requestMethod, $blogId) {
    $this->db = $db;
    $this->requestMethod = $requestMethod;
    $this->blogId = $blogId;
  }

  public function processRequest() {
    switch ($this->requestMethod) {
      case 'GET':
        if ($this->blogId) {
          $response = $this->getBlog($this->blogId);
        } else {
          $response = $this->getAllBlogs();
        };
        break;
      case 'POST':
        $response = $this->createBlog();
        break;
      // case 'PUT':
      //   $response = $this->updateBlog($this->blogId);
      //   break;
      // case 'DELETE':
      //   $response = $this->deleteBlog($this->blogId);
      //   break;
      default:
        $response = $this->notFoundResponse();
        break;
    }
    header($response['status_code_header']);
    if ($response['body']) {
        echo $response['body'];
    }
  }

  private function getBlog($id) {
    $result = $this->find($id);
    if (! $result) {
        return $this->notFoundResponse();
    }
    $response['status_code_header'] = 'HTTP/1.1 200 OK';
    $response['body'] = json_encode($result);
    return $response;
  }
  
  private function getAllBlogs() {
    $query = "
      SELECT
          uid, title, timestamp, charges, duration, remarks, image
      FROM
          blogs;
    ";

    try {
      $statement = $this->db->query($query);
      $result = $statement->fetchAll(\PDO::FETCH_ASSOC);
    } catch (\PDOException $e) {
      exit($e->getMessage());
    }

    $response['status_code_header'] = 'HTTP/1.1 200 OK';
    $response['body'] = json_encode($result);
    return $response;
  }
  
  private function createBlog() {
    $target_dir = SITE_ROOT . "/uploads/blogImages/";
    $target_file = $target_dir . basename($_FILES["image"]["name"]);
    $uploadOk = 1;
    $imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
    // Check if image file is a actual image or fake image
    if(isset($_FILES["image"])) {
      $check = getimagesize($_FILES["image"]["tmp_name"]);
      if($check !== false) {
        echo "File is an image - " . $check["mime"] . ".";
        $uploadOk = 1;
      } else {
        echo "File is not an image.";
        $uploadOk = 0;
      }
    }

    $query = "
      INSERT INTO blogs
          (uid, particulars, category, charges, duration, remarks, image)
      VALUES
          (:uid, :particulars, :category, :charges, :duration, :remarks, :image);
    ";

    // Check if $uploadOk is set to 0 by an error
    if ($uploadOk == 0) {
      echo "Sorry, your file was not uploaded.";
    // if everything is ok, try to upload file
    } else {
      if (move_uploaded_file($_FILES["image"]["tmp_name"], $target_file)) {
        echo "The file ". htmlspecialchars( basename( $_FILES["image"]["name"])). " has been uploaded.";
        try {
          $statement = $this->db->prepare($query);
          $statement->execute(array(
            'uid' => MD5($_POST['particulars']),
            'particulars' => $_POST['particulars'],
            'charges' => $_POST['charges'],
            'category' => $_POST['category'],
            'duration'  => $_POST['duration'],
            'remarks' => $_POST['remarks'],
            'image' => $target_file
          ));
          $statement->rowCount();
        } catch (\PDOException $e) {
          exit($e->getMessage());
        }
    
        $response['status_code_header'] = 'HTTP/1.1 201 Created';
        $response['body'] = json_encode(array('message' => 'Post Created'));
        return $response;
      } else {
        echo "Sorry, there was an error uploading your file.";
      }
    }

    // if (! $this->validatePost($_POST)) {
    //   return $this->unprocessableEntityResponse();
    // }

    

    
  }
  // private function updateBlog($id) {}
  // private function deleteBlog($id) {}
  
  public function find($id)
  {
    $query = "
      SELECT
        uid, particulars, category, charges, duration, remarks, image
      FROM
        blogs
      WHERE uid = :id;
    ";

    try {
      $statement = $this->db->prepare($query);
      $statement->execute(array('id' => $id));
      $result = $statement->fetch(\PDO::FETCH_ASSOC);
      return $result;
    } catch (\PDOException $e) {
      exit($e->getMessage());
    }
  }

  private function validatePost($input) {
    if (! isset($input['title'])) {
      return false;
    }
    if (! isset($input['body'])) {
      return false;
    }
    return true;
  }

  private function unprocessableEntityResponse() {
    $response['status_code_header'] = 'HTTP/1.1 422 Unprocessable Entity';
    $response['body'] = json_encode([
      'error' => 'Invalid input'
    ]);
    return $response;
  }

  private function notFoundResponse() {
    $response['status_code_header'] = 'HTTP/1.1 404 Not Found';
    $response['body'] = null;
    return $response;
  }
  
}