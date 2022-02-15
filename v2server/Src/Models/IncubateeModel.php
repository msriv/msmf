<?php 
namespace Server\Src\Models;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 * @ORM\Table(name="incubatees")
 */
class IncubateeModel {
    private $id;
    private $orgName;
    private $applicantName;
    private $email;
    private $phoneNumber;
    private $linkedInProfile;
    private $alternateContact;
    private $stage;
    private $isNonProfit;
    private $mcaRegistration;
    private $incorporationYear;
    private $headquarters;
    private $sector;
    private $subSector;
    private $customerProblem;
    private $solution;
    private $solutionBetter;
    private $primaryBeneficiary;
    private $milestone;
    private $reasonToIncubate;
    private $earlierFunds;
    private $totalEarlierFunds;
    private $anyPatent;
    private $aboutPatent;
    private $otherDetails;
    private $pitchDeck;
    private $logo;
    private $gdpr;
}