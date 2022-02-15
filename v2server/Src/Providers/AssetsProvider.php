<?php

namespace Server\Src\Providers;

use Server\Src\Models\AssetModel;
use Server\Src\Services\StorageService;
use Server\Src\Utils\Helpers;

class AssetsProvider extends Provider {
    public function __construct($db)
    {
        $this->db = $db;
    }
    public function getAllAssets() {
        
    }

    public function createAssets() {
        $storageService = new StorageService($_FILES["assets"], $_SERVER);
        $storageService->setStorageDirectory(SITE_ROOT . "/assets/");
        $storageService->setValidators("10MB", ["jpg", "png", "jpeg"]);
        switch ($storageService->processFiles()) {
            case StorageService::FILE_ALREADY_EXISTS_EXCEPTION: {
                return Helpers::createFailureResponse(400, array('message' => "File Already Exists"));
            }
            case StorageService::FILE_SIZE_EXCEED_MAX_SIZE_EXCEPTION: {
                return Helpers::createFailureResponse(400, array('message' => "File Size Exceeded"));
            }
            case StorageService::FILE_TYPE_NOT_ALLOWED_EXCEPTION: {
                return Helpers::createFailureResponse(400, array('message' => "File Type Not Allowed"));
            }
            case StorageService::UPLOAD_READY: {
                $files = $storageService->getFiles();
                foreach($files as $key=>$file) {
                    $imgDimensions = getimagesize($file['tmp_name']);
                    $files[$key] = array(
                        'name' => basename($file['name']),
                        'alt' => basename($file['name']),
                        'width' => $imgDimensions[0],
                        'height' => $imgDimensions[1],
                        'uri' => $_ENV['BASE_URI'] . "/assets/" . basename($file['name']),
                        'path' => $storageService->getFileTargetName($file),
                        'mime' => $imgDimensions['mime']
                    );
                }
                switch ($storageService->upload()) {
                    case StorageService::UPLOAD_FAILURE: {
                        return Helpers::createFailureResponse(500, array('message' => "Upload Failed"));
                    }
                    case StorageService::UPLOAD_SUCCESS: {
                        
                        $assets = array();
                        foreach($files as $file) {
                            $asset = new AssetModel($file);
                            $this->db->persist($asset);
                            $this->db->flush();

                            array_push($assets, $asset->getAsset());
                        }
                        return Helpers::createSuccessResponse(201, $assets);
                    }
                }
            }
        };
    }

    
}