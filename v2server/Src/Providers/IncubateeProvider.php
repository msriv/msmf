<?php

namespace Server\Src\Providers;

use Server\Src\Models\IncubateeModel;
use Server\Src\Services\MailerService;
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
    $mail = new MailerService("msmf@ms-mf.org", "msrivastava574@gmail.com");
    $mail->setSubject("[MSMF | TBI] A New Incubatee Has Registered");
    

    // Incubatee Logo
    $storageServiceLogo = new StorageService($_FILES["logo"], $_SERVER);
    $storageServiceLogo->setStorageDirectory(SITE_ROOT . "/uploads/logos/");
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
                    $mail->setAttachment($file, $storageServiceLogo->getFileTargetName($file));
                    // $this->logoURL = $storageServiceLogo->getFileTargetName($file);
                    $this->logoURL = "https://api.ms-mf.org/uploads/logos/" . $file['name'];
                  }
              }
          }
      }
    }


    // Incubatee Pitch Deck
    $storageServiceDeck = new StorageService($_FILES["pitchDeck"], $_SERVER);
    $storageServiceDeck->setStorageDirectory(SITE_ROOT . "/uploads/pitchDecks/");
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
                    $mail->setAttachment($file, $storageServiceDeck->getFileTargetName($file));
                    $this->pitchDeckURL = "https://api.ms-mf.org/uploads/pitchDecks/" . $file['name'];
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

    $mail->setBody(TRUE, "
      <html>
        <head>
          <style>
            td {
              padding: 2px 4px;
              margin: 0;
            }
            p {
              font-size: 18;
              font-weight: 700;
              margin-bottom: 0;
            }
            span {
              font-size: 16;
              font-weight: 400;
            }
          </style>
        </head>
        <body>
          <p>A New incubatee '". $_POST['orgName'] ."' has registered on the site.</p>
          <br/>
          <p>Below are the details about the incubatee. You'll find the logo and Pitch Deck that they have shared attached below. </p>
            <p>Name of the Organisation / Startup: </p><span> " . $_POST['orgName'] . "</span>
            <p>Name of the Applicant / Entrepreneur: </p><span> " . $_POST['applicantName'] . "</span>
            <p>Email Address: </p><span> " . $_POST['email'] . "</span>
            <p>Mobile Number: </p><span> " . $_POST['phoneNumber'] . "</span>
            <p>Linkedin Profile URL: </p><span> " . $_POST['linkedInProfile'] . "</span>
            <p>Alternative contact info: </p><span> " . $_POST['alternateContact'] . "</span>
            <p>Start Up Stage: </p><span> " . $_POST['stage'] . "</span>
            <p>Is your enterprise a Non-profit or For-profit start-up?: </p><span> " . $_POST['isNonProfit'] . "</span>
            <p>Is your company registered under the MCA?: </p><span> " . $_POST['mcaRegistration'] . "</span>
            <p>Year of Incorporation: </p><span> " . $_POST['incorporationYear'] . "</span>
            <p>Headquarter City: </p><span> " . $_POST['headquarters'] . "</span>
            <p>Sector: </p><span> " . $_POST['sector'] . "</span>
            <p>Sub-sector: </p><span> " . $_POST['subSector'] . "</span>
            <p>What is the customer problem you are addressing?: </p><span> " . $_POST['customerProblem'] . "</span>
            <p>What is your solution to address the customer problem?: </p><span> " . $_POST['solution'] . "</span>
            <p>How is your solution better than the available options in the market?: </p><span> " . $_POST['solutionBetter'] . "</span>
            <p>Who is the primary beneficiary of your product/service?: </p><span> " . $_POST['primaryBeneficiary'] . "</span>
            <p>Highlight significant milestones achieved by the company: </p><span> " . $_POST['milestone'] . "</span>
            <p>What are you seeking from your Incubation at Bionest?: </p><span> " . $_POST['reasonToIncubate'] . "</span>
            <p>Have you raised funds in the past?: </p><span> " . $_POST['earlierFunds'] . "</span>
            <p>Total Grant Amount: </p><span>" . $_POST['totalEarlierFunds'] . "</span>
            <p>Have you filed for any patent?: </p><span> " . $_POST['anyPatent'] . "</span>
            <p>If yes, what is the patent for?: </p><span> " . $_POST['aboutPatent'] . "</span>
            <p>Any other details: </p><span> " . $_POST['otherDetails'] . "</span>
            <p>GDPR: </p><span> " . $_POST['gdpr'] . "</span>
        </body>
      </html>
    ");
    
    // return Helpers::sendPost(Constants::INCUBATEE_SHEET_URL, $newIncubatee->getIncubatee());
    if ($mail->send()) {
      return Helpers::createSuccessResponse(201, array("message" => "Mail sent", "data" => $newIncubatee->getIncubatee())) ;
    }
  }
}