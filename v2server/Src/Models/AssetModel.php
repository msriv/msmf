<?php

namespace Server\Src\Models;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 * @ORM\Table(name="assets")
 */
class AssetModel {
    
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue
     */
    private $id;
    
    /**
     * @ORM\Column(type="string")
     */
    private $name;
    
    /**
     * @ORM\Column(type="string")
     */
    private $alt;
    
    /**
     * @ORM\Column(type="string")
     */
    private $width;
    
    /**
     * @ORM\Column(type="string")
     */
    private $height;
    
    /**
     * @ORM\Column(type="string")
     */
    private $uri;
    
    /**
     * @ORM\Column(type="string", length=400)
     */
    private $path;

    /**
     * @ORM\Column(type="string", length=400)
     */
    private $mime;

    public function __construct($file)
    {
        $this->name = $file['name'];
        $this->alt = $file['alt'];
        $this->width = $file['width'];
        $this->height = $file['height'];
        $this->uri = $file['uri'];
        $this->path = $file['path'];
        $this->mime = $file['mime'];
    }

    public function getAsset(): array {
        return array(
            'id' => $this->id,
            'name' => $this->name,
            'alt' => $this->alt,
            'width' => $this->width,
            'height' => $this->height,
            'uri' => $this->uri,
            'path' => $this->path,
            'mime' => $this->mime
        );
    }
}