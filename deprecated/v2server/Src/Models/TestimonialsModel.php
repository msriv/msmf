<?php

namespace Server\Src\Models;
use Doctorine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 * @ORM\Table(name="Testimonials")
 */
class TestimonialsModel {
    
    /**
     * @ORM\Column(type="string", options={"default" : "null"})
     */
    private $name;

    /**
     * @ORM\Column(type="string")
     */
    private $company;

    /**
     * @ORM\Column(type="string", length="400", options={"default" : "null"})
     */
    private $avatar;

    /**
     * @ORM\Column(type="string")
     */
    private $testimonialContent;

    public function __construct($name, $company, $avatar, $testimonialContent){
        $this->name = $name;
        $this->company = $company;
        $this->avatar = $avatar;
        $this->testimonialContent = $testimonialContent;
    }

    public function getTestimonial (): array{
        return array(
            "name" => $this->name,
            "company" => $this->company,
            "avatar" => $this->avatar,
            "testimonialContent" => $this->testimonialContent
        );
    }
}