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
     * @ORM\Column(type="boolean", options={"default":"0"})
     */
    private $isNonProfit;
    
    /**
     * @ORM\Column(type="boolean", options={"default":"0"})
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
     * @ORM\Column(type="text", length=65535)
     */
    private $customerProblem;
    
    /**
     * @ORM\Column(type="text", length=65535)
     */
    private $solution;
    
    /**
     * @ORM\Column(type="text", length=65535)
     */
    private $solutionBetter;
    
    /**
     * @ORM\Column(type="text", length=65535)
     */
    private $primaryBeneficiary;
    
    /**
     * @ORM\Column(type="text", length=65535)
     */
    private $milestone;
    
    /**
     * @ORM\Column(type="text", length=65535)
     */
    private $reasonToIncubate;
    
    /**
     * @ORM\Column(type="boolean", options={"default":"0"})
     */
    private $earlierFunds;
    
    /**
     * @ORM\Column(type="string")
     */
    private $totalEarlierFunds;
    
    /**
     * @ORM\Column(type="boolean", options={"default":"0"})
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

    public function __construct($id, $orgName, $applicantName, $email, $phoneNumber, $linkedInProfile, $alternateContact, $stage, $isNonProfit, $mcaRegistration, $incorporationYear, $headquarters, $sector, $subSector, $customerProblem, $solution, $solutionBetter, $primaryBeneficiary, $milestone, $reasonToIncubate, $earlierFunds, $totalEarlierFunds, $anyPatent, $aboutPatent, $otherDetails, $pitchDeck, $logo, $gdpr){
        $this->id = $id;
        $this->orgName = $orgName;
        $this->applicantName = $applicantName;
        $this->email = $email;
        $this->phoneNumber = $phoneNumber;
        $this->linkedInProfile = $linkedInProfile;
        $this->alternateContact = $alternateContact;
        $this->stage = $stage;
        $this->isNonProfit = $isNonProfit;
        $this->mcaRegistration = $mcaRegistration;
        $this->incorporationYear = $incorporationYear;
        $this->headquarters = $headquarters;
        $this->sector = $sector;
        $this->subSector = $subSector;
        $this->customerProblem = $customerProblem;
        $this->solution = $solution;
        $this->solutionBetter = $solutionBetter;
        $this->primaryBeneficiary = $primaryBeneficiary;
        $this->milestone = $milestone;
        $this->reasonToIncubate = $reasonToIncubate;
        $this->earlierFunds = $earlierFunds;
        $this->totalEarlierFunds = $totalEarlierFunds;
        $this->anyPatent = $anyPatent;
        $this->aboutPatent = $aboutPatent;
        $this->otherDetails = $otherDetails;
        $this->pitchDeck = $pitchDeck;
        $this->logo = $logo;
        $this->gdpr = $gdpr;
    }

    public function getIncubatee (): array{
        return array(
            "id" => $this->id,
            "orgName" => $this->orgName,
            "applicantName" => $this->applicantName,
            "email" => $this->email,
            "phoneNumber" => $this->phoneNumber,
            "linkedInProfile" => $this->linkedInProfile,
            "alternateContact" => $this->alternateContact,
            "stage" => $this->stage,
            "isNonProfit" => $this->isNonProfit,
            "mcaRegistration" => $this->mcaRegistration,
            "incorporationYear" => $this->incorporationYear,
            "headquarters" => $this->headquarters,
            "sector" => $this->sector,
            "subSector" => $this->subSector,
            "customerProblem" => $this->customerProblem,
            "solution" => $this->solution,
            "solutionBetter" => $this->solutionBetter,
            "primaryBeneficiary" => $this->primaryBeneficiary,
            "milestone" => $this->milestone,
            "reasonToIncubate" => $this->reasonToIncubate,
            "earlierFunds" => $this->earlierFunds,
            "totalEarlierFunds" => $this->totalEarlierFunds,
            "anyPatent" => $this->anyPatent,
            "aboutPatent" => $this->aboutPatent,
            "otherDetails" => $this->otherDetails,
            "pitchDeck" => $this->pitchDeck,
            "logo" => $this->logo,
            "gdpr" => $this->gdpr
        )
    }
}