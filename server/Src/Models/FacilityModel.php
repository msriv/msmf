<?php 
namespace Server\Src\Models;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 * @ORM\Table(name="facilities")
 */
class FacilityModel {
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue
     */
    private $id;
    /**
     * @ORM\Column(type="string")
     */
    private $particulars;
    /**
     * @ORM\Column(type="string")
     */
    private $category; 
    /**
     * @ORM\Column(type="string")
     */
    private $charges; 
    /**
     * @ORM\Column(type="string")
     */
    private $duration; 
    /**
     * @ORM\Column(type="string", length=1000)
     */
    private $remarks; 
    /**
     * @ORM\Column(type="string", length=400)
     */
    private $image;

    public function __construct($particulars, $category, $charges, $duration, $remarks, $image)
    {
        $this->particulars = $particulars;
        $this->category = $category;
        $this->charges = $charges;
        $this->duration = $duration;
        $this->image = $image;
    }

    public function getFacility (): array {
        return array(
            'id' => $this->id,
            'particulars' => $this->particulars,
            'category' => $this->category,
            'charges' => $this->charges,
            'duration' => $this->duration,
            'remarks' => $this->remarks,
            'image' => $this->image
        );
    }

}