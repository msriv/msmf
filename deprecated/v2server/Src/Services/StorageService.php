<?php

namespace Server\Src\Services;

use Exception;
use Server\Src\Utils\Helpers;

class StorageService {
    
    const UPLOAD_SUCCESS = 1;
    const SERVICE_ACTIVE = 3;
    const SERVICE_INACTIVE = -3;
    const UPLOAD_FAILURE = 0;
    const UPLOAD_READY = 2;

    const FILE_ALREADY_EXISTS_EXCEPTION = "FileAlreadyExistsException";
    const FILE_SIZE_EXCEED_MAX_SIZE_EXCEPTION = "FileSizeExceedsMaxSizeException";
    const FILE_TYPE_NOT_ALLOWED_EXCEPTION = "FileTypeNotAllowedException";
    const NULL_FILES_EXCEPTION = "NullFilesException";

    private $directory;
    private $allowedFileTypes;
    private $fileSizeAllowed;
    private $files;
    private $server;
    private $serviceStatus;

    public function __construct($files, $server)
    {
        if($files != NULL) {
            $this->setServiceStatus(StorageService::SERVICE_ACTIVE);
        } else {
            $this->setServiceStatus(StorageService::SERVICE_INACTIVE);
            throw new Exception(StorageService::NULL_FILES_EXCEPTION);
        }
        foreach($files["name"] as $key=>$file) {
            $this->files[$key] = array(
                'name' => $files['name'][$key],
                'type' => $files['type'][$key],
                'tmp_name' => $files['tmp_name'][$key],
                'error' => $files['error'][$key],
                'size' => $files['size'][$key]
            );
        }
        $this->server = $server;
    }

    private function checkIfDirectoryExistsAndCreate($path) 
    {
        if (!file_exists($path)) {
            mkdir($path, 0777, true);
        }
    }

    private function getFileExtension($file) {
        return strtolower(pathinfo($this->getFileTargetName($file), PATHINFO_EXTENSION));
    }

    public function getFileTargetName($file) {
        return $this->directory . basename($file["name"]);
    }

    public function setStorageDirectory($path): bool {
        $this->checkIfDirectoryExistsAndCreate($path);
        if(is_dir($path)) {
            $this->directory = $path;
            return true;
        } else {
            return false;
        }
    }

    public function setValidators(string $maxSize, array $fileTypesAllowed) {
        $this->fileSizeAllowed = Helpers::convertToBytes($maxSize);
        foreach ($fileTypesAllowed as $key=>$type) {
            $fileTypesAllowed[$key] = strtolower($type);
        }
        $this->allowedFileTypes = $fileTypesAllowed;
    }

    private function validateSize($file) {
        return $file["size"] > $this->fileSizeAllowed;
    }

    private function validateType($file) {
        return in_array($this->getFileExtension($file), $this->allowedFileTypes, TRUE);    
    }

    private function isFileExists($file) {
        return file_exists($this->getFileTargetName($file));
    }

    private function setServiceStatus($statusCode) {
        switch ($statusCode) {
            case StorageService::UPLOAD_SUCCESS: {
                $this->serviceStatus = StorageService::UPLOAD_SUCCESS;
            } break;
            case StorageService::SERVICE_ACTIVE: {
                $this->serviceStatus = StorageService::SERVICE_ACTIVE;
            } break;
            case StorageService::UPLOAD_FAILURE: {
                // flush file operations;
                $this->serviceStatus = StorageService::UPLOAD_FAILURE;
            }break;
        }
    }

    public function processFiles() {
        if ($this->serviceStatus == StorageService::SERVICE_INACTIVE) {
            throw new Exception(StorageService::SERVICE_INACTIVE);
        }
        foreach($this->files as $file) {
            if($this->validateSize($file)) {
                $this->setServiceStatus(StorageService::UPLOAD_FAILURE);
                return (StorageService::FILE_SIZE_EXCEED_MAX_SIZE_EXCEPTION);
            } else if (!$this->validateType($file)) {
                $this->setServiceStatus(StorageService::UPLOAD_FAILURE);
                return (StorageService::FILE_TYPE_NOT_ALLOWED_EXCEPTION);
            } else if ($this->isFileExists($file)) {
                $this->setServiceStatus(StorageService::UPLOAD_FAILURE);
                return (StorageService::FILE_ALREADY_EXISTS_EXCEPTION);
            } else {
                $this->setServiceStatus(StorageService::UPLOAD_READY);
                return StorageService::UPLOAD_READY;
            }
        }
    }

    public function upload() {
        foreach($this->files as $file) {
            if ($this->serviceStatus == StorageService::UPLOAD_FAILURE) {
                throw new Exception("Upload Service Failed", StorageService::UPLOAD_FAILURE);
            } else {
                if (move_uploaded_file($file["tmp_name"], $this->getFileTargetName($file))) {
                    $this->setServiceStatus(StorageService::UPLOAD_SUCCESS);
                } else {
                    $this->setServiceStatus(StorageService::UPLOAD_FAILURE);
                    break;
                }
            }
        }

        if ($this->serviceStatus == StorageService::UPLOAD_SUCCESS) {
            return StorageService::UPLOAD_SUCCESS;
        } else {
            return StorageService::UPLOAD_FAILURE;
        }
    }

    public function getFiles() {
        return $this->files;
    }
}