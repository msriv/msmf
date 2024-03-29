<?php

namespace Server\Src\Services;

use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;
use Server\Src\Utils\Helpers;
use PHPMailer\PHPMailer\SMTP;

class MailerService {

  private $mail;

  public function __construct($from, $to) {

    $this->mail = new PHPMailer(TRUE);
    $this->mail->From = $from;
    $this->mail->addAddress($to);
    $this->mail->SMTPDebug = 0;                     //Enable verbose debug output
    $this->mail->isSMTP();                                            //Send using SMTP
    $this->mail->Host       = $_ENV['SMTP_HOST'];                     //Set the SMTP server to send through
    $this->mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $this->mail->Username   = $_ENV['SMTP_USERNAME'];                     //SMTP username
    $this->mail->Password   = $_ENV['SMTP_PASSWORD'];                               //SMTP password
    $this->mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $this->mail->Port       = $_ENV['SMTP_PORT'];    
  }


  public function setSubject($subject) {
    $this->mail->Subject = $subject;
  }
  public function setBody($isHTML, $body) {
    $this->mail->isHTML($isHTML);
    $this->mail->Body = $body;
  }

  public function setAttachment($attachment, $path) {
    $this->mail->addAttachment($path, $attachment['name']);
  }

  public function send() {
    try {
      $this->mail->send();
      return Helpers::createSuccessResponse(200, array("message" => "Sent Successfully"));
    } catch (Exception $e) {
      return Helpers::createFailureResponse(500, array("error" => $e));
    }
    
  }

}