<?php

namespace Server\Src\Models;
use Doctorine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 * @ORM\Table(name="people")
 */
class PeopleModel {
    /**    
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=400)
     */
    private $image;

    /**
     * @ORM\Column(type="string", length=200)
     */
    private $position;

    /**
     * @ORM\Column(type="string", length=400)
     */
    private $team;

    /**
     * @ORM\Column(type="string", length=100)
     */
    private $linkedInProfile;

    /**
     * @ORM\Column(type="text")
     */
    private $about;

    /**
     * @ORM\Column(type="string", length=400)
     */
    private $address;


    public function __construct($image, $position, $linkedInProfile, $about, $address)
    {
        this->image = $image;
        this->position = $position;
        this->linkedInProfile = $linkedInProfile;
        this->about = $about;
        this->address = $address;
    }

    public function getPerson (): array{
        return array(
            "id" => this->id,
            "image" => this->image,
            "position" => this->position,
            "linkedInProfile" => this->linkedInProfile,
            "about" => this->about,
            "address" => this->address
        );
    }
}