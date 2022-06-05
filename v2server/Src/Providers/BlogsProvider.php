<?php

namespace Server\Src\Providers;
use Server\Src\Models\BlogModel;
use Server\Src\Utils\Helpers;

class BlogsProvider extends Provider  {
   
    private $db;
    private $blogRepository;

    public function __construst($db){
        $this->db = $db;
        $this->blogRepository = $this->db->getRepository('Server\Src\Models\BlogModel');
    }

    public function getBlogById($id){
        $getBog  =  $this->blogRepository->findBy(array('id' => $id));
        $result = array();
        foreach ($getBog as $blog){
            array_push($result, $blog->getBlog());
        }
        return Helpers::createSuccessResponse(200, $result);
    }

    public function getAllBlog() {
        $allBlog =  $this->blogRepository->findAll();
        $result = array();
        foreach ($allBlog as $blog){
            array_push($result, $blog->getBlog());
        }
        return Helpers::createSuccessResponse(200, $result);
    }

    public function createBlog(){
        $blog = new BlogModel(
            $_POST["id"]
            $_POST["author"]
            $_POST["title"]
            $_POST["body"]
            $_POST["featuredImage"]
            $_POST["likes"]
            $_POST["createdOn"]
            $_POST["updatedOn"]
        );

        $this->db->persist($blog);
        $this->db->flush();

        return Helpers::createSuccessResponse(200, $blog->getBlog());
    }
}