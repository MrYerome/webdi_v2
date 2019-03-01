<?php

namespace App\Http\Controllers\Api\V1;



use App\Models\Cities;
use Illuminate\Routing\Controller;

class CitiesController extends Controller
{

    public function getAllCities(){
        return Cities::with("places", "users","diners")->find(1);
    }

    public function getCity($insee){
        return Cities::with("places", "users","diners")->where("insee", "=", $insee)->get();
    }
}
