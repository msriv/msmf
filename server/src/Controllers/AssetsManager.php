<?php
namespace Src\Controllers;

class AssetsManager {
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
            case 'create_assets':
            $response = $this->createAssets();
            break;

            case 'get_all_assets':
            $response = $this->getAllAssets();
            break;
        }
        header($response['status_code_header']);
        if($response['body']) {
            echo $response['body'];
        }
    }

    private function createAssets() {
        $num_files = count($_FILES['files']['name']);
        $uploaded_files = 0;
        $target_dir = SITE_ROOT . "/assets/";
        for($i=0; $i < $num_files; $i++) {
            $target_file = $target_dir . basename($_FILES["files"]["name"][$i]);
            $uploadOk = 1;
            if(isset($_FILES["files"])) {
                $check = getimagesize($_FILES["files"]["tmp_name"][$i]);
                if($check !== false) {
                    $uploadOk = 1;
                } else {
                    $uploadOk = 0;
                }


                if ($uploadOk == 0) {
                    $response['status_code_header'] = 'HTTP/1.1 400 Bad Request';
                    $response['body'] = json_encode(array('message' => 'Wrong File Type Uploaded'));
                    return $response;
                } else {
                    $query = "
                    INSERT INTO assets
                        (uid, name, alt, width, height, uri, path, mime)
                    VALUES
                        (:uid, :name, :alt, :width, :height, :uri, :path, :mime);
                    ";
                    try {
                        $statement = $this->db->prepare($query);
                        $statement->execute(array(
                            'uid' => MD5(basename($_FILES["files"]["name"][$i])),
                            'name' => basename($_FILES["files"]["name"][$i]),
                            'alt' => basename($_FILES["files"]["name"][$i]),
                            'width' => $check[0],
                            'height'  => $check[1],
                            'uri' => $_ENV['BASE_URI'] . "/assets/" . basename($_FILES["files"]["name"][$i]),
                            'path' => $target_file,
                            'mime' => $check['mime']
                        ));
                        if($statement->rowCount()) {
                            if (move_uploaded_file($_FILES["files"]["tmp_name"][$i], $target_file)) {       
                                $uploaded_files++;
                            }
                        }
                    } catch (\PDOException $e) {
                        exit($e->getMessage());
                    }

                    
                }
            } else {
                $response['status_code_header'] = 'HTTP/1.1 400 Bad Request';
                $response['body'] = json_encode(array('message' => 'No Files Found'));
                return $response;
            }
        }
        if($uploaded_files == $num_files) {
            $response['status_code_header'] = 'HTTP/1.1 201 Uploaded';
            $response['body'] = json_encode(array('message' => 'Files Uploaded'));
            return $response;
        }else {
            $response['status_code_header'] = 'HTTP/1.1 201 Uploaded';
            $response['body'] = json_encode(array('message' => 'Files Uploaded', 'warning' => 'Some files are already there.'));
            return $response;
        }
    }

    private function getAllAssets() {
         $query = "
            SELECT
                uid, name, alt, width, height, uri, path, mime
            FROM
                assets;
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
}    