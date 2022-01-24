<?php
namespace Src\Controllers;

class Facility {
  private $db;
  private $handler;
  private $vars;

  public function __construct($db, $handler, $vars) {
    $this->db = $db;
    $this->handler = $handler;
    $this->vars = $vars;
  }

  public function processRequest() {
    switch ($this->handler) {
      case 'get_facility':
        $response = $this->getFacility($this->vars["id"]);
        break;
      case 'get_all_facilities':
        $response = $this->getAllFacilities();
        break;
      case 'create_facility':
        $response = $this->createFacility();
        break;
      // case 'PUT':
      //   $response = $this->updateFacility($this->facilityId);
      //   break;
      // case 'DELETE':
      //   $response = $this->deleteFacility($this->facilityId);
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
    $query = "
      INSERT INTO facilities
          (uid, particulars, category, charges, duration, remarks, image)
      VALUES
          (:uid, :particulars, :category, :charges, :duration, :remarks, :image);
    ";
    try{
          $statement = $this->db->prepare($query);
          $statement->execute(array(
            'uid' => MD5($_POST['particulars']),
            'particulars' => $_POST['particulars'],
            'charges' => $_POST['charges'],
            'category' => $_POST['category'],
            'duration'  => $_POST['duration'],
            'remarks' => $_POST['remarks'],
            'image' => $_POST['image']
          ));
          $statement->rowCount();
        } catch (\PDOException $e) {
          exit($e->getMessage());
        }
    
        $response['status_code_header'] = 'HTTP/1.1 201 Created';
        $response['body'] = json_encode(array('message' => 'Post Created'));
        return $response;
    }

    // if (! $this->validatePost($_POST)) {
    //   return $this->unprocessableEntityResponse();
    // }

    

    
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