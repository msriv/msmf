<?php

namespace Server\Src\Models;
use Doctorine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 * @ORM\Table(name="blog")
 * @ORM\HasLifecycleCallbacks
 */
class BlogsModel {
    /**    
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue
     */
    private $id;
    
    /**
     * @ORM\Column(type="string", length=100)
     */
    private $author;
    
    /**
     * @ORM\Column(type="string", length=200)
     */
    private $title;
    /**
     * @ORM\Column(type="text",)
     */
    private $body;
    
    /**
     * @ORM\Column(type="string", length=400)
     */
    private $featuredImage;

    /**
     * @ORM\Column(type="integer")
     */
    private $likes;

    private $createdOn;
    
    private $updatedOn;

    private setCreated($timestamp){
        $this->createdOn = $timestamp;
    }

    private setModified($timestamp){
        $this->updatedOn = $timestamp;
    }

    private getModified(){
        return $this->updatedOn;
    }

    public function __construct($id, $author, $title, $body, $featuredImage){
        
        $this->author = $author;
        $this->title = $title;
        $this->body = $body;
        $this->featuredImage = $featuredImage;

        $this->setCreated(new \DateTime());
        if ($this->getModified() == null) {
            $this->setModified(new \DateTime());
        }
    }

    /**
     * @ORM\PrePersist()
     * @ORM\PreUpdate()
     */
    public function updateModifiedDatetime() {
        // update the modified time
        $this->setModified(new \DateTime());
    }

    public function getBlog (): array {
        return array(
            "id" => $this->id,
            "author" => $this->author,
            "title" => $this->title,
            "body" => $this->body,
            "featuredImage" => $this->featuredImage,
            "likes" => $this->likes,
            "createdOn" => $this->createdOn,
            "updatedOn" => $this->updatedOn
        );
    }
}