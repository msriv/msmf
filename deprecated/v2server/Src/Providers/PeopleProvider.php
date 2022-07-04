<?php

namespace Server\Src\Providers;
use Doctrine\Common\Collections\Criteria;
use Server\Src\Models\PeopleModel;
use Server\Src\Utils\Helpers;

class PeopleProvider extends Provider  {

    private $db;
    private $peopleRepository;

    public function __construst($db){
        $this->db = $db;
        $this->peopleRepository = $this->db->getRepository('Server\Src\Models\PeopleModel');
    }

    public function getPeopleByTeam($vertical, $team, ?string $subteam){
        $criteria = Criteria::create()
            ->where(Criteria::expr()->eq("vertical", $vertical))
            ->andWhere(Criteria::expr()->eq("team", $team));
        if ($subteam) {
            $criteria->andWhere(Criteria::expr()->eq("subteam", $subteam));
        }
        $teamPeople  =  $this->peopleRepository->matching($criteria);
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

    public function createPerson(){
        $people = new PeopleModel(
            $_POST["image"], 
            $_POST["position"],
            $_POST["linkedInProfile"],
            $_POST["about"],
            $_POST["address"],
            $_POST["vertical"],
            $_POST["team"],
            $_POST["subteam"],
        );

        $this->db->persist($people);
        $this->db->flush();

        return Helpers::createSuccessResponse(200, $people->getPerson());
    }
}