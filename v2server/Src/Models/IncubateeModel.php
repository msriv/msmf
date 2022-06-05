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
    /**
     * @ORM\Column(type="string")
     */
    private $headquarters;
    /**
     * @ORM\Column(type="string")
     */
    private $sector;
    /**
     * @ORM\Column(type="string")
     */
    private $subSector;
    /**
     * @ORM\Column(type="string")
     */
    private $customerProblem;
    /**
     * @ORM\Column(type="string")
     */
    private $solution;
    /**
     * @ORM\Column(type="string")
     */
    private $solutionBetter;
    /**
     * @ORM\Column(type="string")
     */
    private $primaryBeneficiary;
    /**
     * @ORM\Column(type="string")
     */
    private $milestone;
    /**
     * @ORM\Column(type="string")
     */
    private $reasonToIncubate;
    /**
     * @ORM\Column(type="string")
     */
    private $earlierFunds;
    /**
     * @ORM\Column(type="string")
     */
    private $totalEarlierFunds;
    /**
     * @ORM\Column(type="string")
     */
    private $anyPatent;
    /**
     * @ORM\Column(type="string")
     */
    private $aboutPatent;
    /**
     * @ORM\Column(type="string")
     */
    private $otherDetails;
    /**
     * @ORM\Column(type="string")
     */
    private $pitchDeck;
    /**
     * @ORM\Column(type="string")
     */
    private $logo;
    /**
     * @ORM\Column(type="string")
     */
    private $gdpr;
}