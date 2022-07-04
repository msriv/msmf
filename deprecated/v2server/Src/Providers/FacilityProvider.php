<?php 

namespace Server\Src\Providers;
use Server\Src\Models\FacilityModel;
use Server\Src\Utils\Helpers;

class FacilityProvider extends Provider {

    private $db;

    public function __construct($db)
    {
        $this->db = $db;
    }

    public function getFacility($id) {

    }

    public function getAllFacilities() {
        $facilityRepository = $this->db->getRepository('Server\Src\Models\FacilityModel');
        $facilities = $facilityRepository->findAll();
        $result = array();
        foreach ($facilities as $facility) {
            array_push($result, $facility->getFacility());
        }
        return Helpers::createSuccessResponse(200, $result);
    }

    public function createFacility() {
       $facility = new FacilityModel(
           $_POST["particulars"], 
           $_POST["category"], 
           $_POST["charges"],
           $_POST["duration"],
           $_POST["remarks"],
           $_POST["image"],
        );

        $this->db->persist($facility);
        $this->db->flush();

        return Helpers::createSuccessResponse(201, $facility->getFacility());
    }
}

