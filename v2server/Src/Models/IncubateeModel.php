<?php 
namespace Server\Src\Models;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 * @ORM\Table(name="incubatees")
 */
class IncubateeModel {
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue
     */
    private $id;
    /**
     * @ORM\Column(type="string")
     */
    private $orgName;
    /**
     * @ORM\Column(type="string")
     */
    private $applicantName;
    /**
     * @ORM\Column(type="string")
     */
    private $email;
    /**
     * @ORM\Column(type="string")
     */
    private $phoneNumber;
    /**
     * @ORM\Column(type="string")
     */
    private $linkedInProfile;
    /**
     * @ORM\Column(type="string")
     */
    private $alternateContact;
    /**
     * @ORM\Column(type="string")
     */
    private $stage;
    /**
     * @ORM\Column(type="string")
     */
    private $isNonProfit;
    /**
     * @ORM\Column(type="string")
     */
    private $mcaRegistration;
    /**
     * @ORM\Column(type="string")
     */
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