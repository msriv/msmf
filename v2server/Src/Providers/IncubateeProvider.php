<?php

namespace Server\Src\Providers;

use Server\Src\Models\IncubateeModel;
use Server\Src\Services\StorageService;
use Server\Src\Utils\Constants;
use Server\Src\Utils\Helpers;

class IncubateeProvider extends Provider  {
  private $db;

  public function __construct($db)
  {
      $this->db = $db;
  }

  public function createIncubatee() {

    $this->logoURL = "";
    $this->pitchDeckURL = "";

    // Incubatee Logo
    $storageServiceLogo = new StorageService($_FILES["logo"], $_SERVER);
    $storageServiceLogo->setStorageDirectory(SITE_ROOT . "/uploads/logos");
    $storageServiceLogo->setValidators("10MB", ["jpg", "png", "jpeg"]);
    
    switch ($storageServiceLogo->processFiles()) {
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
          $files = $storageServiceLogo->getFiles();
          switch ($storageServiceLogo->upload()) {
              case StorageService::UPLOAD_FAILURE: {
                  return Helpers::createFailureResponse(500, array('message' => "Upload Failed"));
              }
              case StorageService::UPLOAD_SUCCESS: {
                  foreach($files as $file) {
                    $this->logoURL = $storageServiceLogo->getFileTargetName($file);
                  }
              }
          }
      }
    }


    // Incubatee Pitch Deck
    $storageServiceDeck = new StorageService($_FILES["pitchDeck"], $_SERVER);
    $storageServiceDeck->setStorageDirectory(SITE_ROOT . "/uploads/pitchDecks");
    $storageServiceDeck->setValidators("10MB", ["pdf", "pptx"]);
    
    switch ($storageServiceDeck->processFiles()) {
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
          $files = $storageServiceDeck->getFiles();
          switch ($storageServiceDeck->upload()) {
              case StorageService::UPLOAD_FAILURE: {
                  return Helpers::createFailureResponse(500, array('message' => "Upload Failed"));
              }
              case StorageService::UPLOAD_SUCCESS: {
                  foreach($files as $file) {
                    $this->pitchDeckURL = $storageServiceDeck->getFileTargetName($file);
                  }
              }
          }
      }
    }

    
    $newIncubatee = new IncubateeModel(
        $_POST['orgName'],
        $_POST['applicantName'],
        $_POST['email'],
        $_POST['phoneNumber'],
        $_POST['linkedInProfile'],
        $_POST['alternateContact'],
        $_POST['stage'],
        $_POST['isNonProfit'],
        $_POST['mcaRegistration'],
        $_POST['incorporationYear'],
        $_POST['headquarters'],
        $_POST['sector'],
        $_POST['subSector'],
        $_POST['customerProblem'],
        $_POST['solution'],
        $_POST['solutionBetter'],
        $_POST['primaryBeneficiary'],
        $_POST['milestone'],
        $_POST['reasonToIncubate'],
        $_POST['earlierFunds'],
        $_POST['totalEarlierFunds'],
        $_POST['anyPatent'],
        $_POST['aboutPatent'],
        $_POST['otherDetails'],
        $this->pitchDeckURL,
        $this->logoURL,
        $_POST['gdpr'],
    );

    return Helpers::sendPost(Constants::INCUBATEE_SHEET_URL, $newIncubatee->getIncubatee());

    // return Helpers::createSuccessResponse(201, $newIncubatee->getIncubatee()) ;
  }
}