<?php
namespace Src\Controllers;

use FileUpload;

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
        // $validator = new FileUpload\Validator\Simple('10M', ["image/png", "image/jpg"]);
        // $pathresolver = new FileUpload\PathResolver\Simple("/assets");
        // $filesystem = new FileUpload\FileSystem\Simple();
        // var_dump($_POST, $_FILES["files"]);
        // $fileupload = new FileUpload\FileUpload($_FILES['files'], $_SERVER);

        // $fileupload->setPathResolver($pathresolver);
        // $fileupload->setFileSystem($filesystem);
        // $fileupload->addValidator($validator);

        // list($files, $headers) = $fileupload->processAll();

        // // Outputting it, for example like this
        // foreach($headers as $header => $value) {
        //     header($header . ': ' . $value);
        // }

        // echo json_encode(['files' => $files]);

        // foreach($files as $file){
        //     //Remeber to check if the upload was completed
        //     if ($file->completed) {
        //         echo $file->getRealPath();
                
        //         // Call any method on an SplFileInfo instance
        //         var_dump($file->isFile());
        //     }
        // }

        // $fileupload->addCallback('completed', function(FileUpload\File $file) {
        //     var_dump($file);
        // });

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
            }
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