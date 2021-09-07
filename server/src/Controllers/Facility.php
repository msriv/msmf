<?php
namespace Src\Controllers;

class Facility {
  private $db;
  private $requestMethod;
  private $facilityId;

  public function __construct($db, $requestMethod, $facilityId) {
    $this->db = $db;
    $this->requestMethod = $requestMethod;
    $this->facilityId = $facilityId;
  }

  public function processRequest() {
    switch ($this->requestMethod) {
      case 'GET':
        if ($this->facilityId) {
          $response = $this->getFacility($this->facilityId);
        } else {
          $response = $this->getAllFacilities();
        };
        break;
      case 'POST':
        $response = $this->createFacility();
        break;
      case 'PUT':
        $response = $this->updateFacility($this->facilityId);
        break;
      case 'DELETE':
        $response = $this->deleteFacility($this->facilityId);
        break;
      default:
        $response = $this->notFoundResponse();
        break;
    }
    header($response['status_code_header']);
    if ($response['body']) {
        echo $response['body'];
    }
  }

  private function getFacility($id) {
    $result = $this->find($id);
    if (! $result) {
        return $this->notFoundResponse();
    }
    $response['status_code_header'] = 'HTTP/1.1 200 OK';
    $response['body'] = json_encode($result);
    return $response;
  }
  
  private function getAllFacilities() {
    $query = "
      SELECT
          uid, particulars, category, charges, duration, remarks, image
      FROM
          facilities;
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
  
  private function createFacility() {
    $target_dir = SITE_ROOT . "/uploads/facilityImages/";
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
      INSERT INTO facilities
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
  // private function updateFacility($id) {}
  // private function deleteFacility($id) {}
  
  public function find($id)
  {
    $query = "
      SELECT
        uid, particulars, category, charges, duration, remarks, image
      FROM
        facilities
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