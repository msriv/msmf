<?php

namespace Server\Src\Providers;

use Server\Src\Utils\Helpers;

class IncubateesProvider extends Provider  {
    private $db;

    public function __construct($db)
    {
        $this->db = $db;
    }

    public function getIncubatee($id) {
      // To Be Implemented
      return Helpers::NotImplementedError();
    }

    public function getAllIncubatees() {
      // To Be Implemented
      return Helpers::NotImplementedError();
    }

    public function createIncubatee() {
      // To Be Implemented
      return Helpers::NotImplementedError();
    }

    public function updateIncubatee($id) {
      // To Be Implemented
      return Helpers::NotImplementedError();
    }
}
