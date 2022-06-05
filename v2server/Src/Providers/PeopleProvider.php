<?php

namespace Server\Src\Providers;
use Server\Src\Models\PeopleModel;
use Server\Src\Utils\Helpers;

class PeopleProvider extends Provider  {

    private $db;
    private $peopleRepository;

    public function __construst($db){
        $this->db = $db;
        $this->peopleRepository = $this->db->getRepository('Server\Src\Models\PeopleModel');
    }

    public function getPeopleByTeam($team){
        $teamPeople  =  $this->peopleRepository->findBy(array('team' => $team));
        $result = array();
        foreach ($teamPeople as $people){
            array_push($result, $people->getPerson());
        }
        return Helpers::createSuccessResponse(200, $result);
    }

    public function getAllPeople() {
        $allPeople =  $this->peopleRepository->findAll();
        $result = array();
        foreach ($allPeople as $people){
            array_push($result, $people->getPerson());
        }
        return Helpers::createSuccessResponse(200, $result);
    }

    public function createPeople(){
        $people = new PeopleModel(
            $_POST["image"], 
            $_POST["position"],
            $_POST[" linkedInProfile"],
            $_POST["about"],
            $_POST["address"],
        );

        $this->db->persist($people);
        $this->db->flush();

        return Helpers::createSuccessResponse(200, $people->getPeople());
    }
}