<?php

namespace App\Http\Controllers\Api\V1;



use App\Models\Cities;
use Illuminate\Routing\Controller;

class CitiesController extends Controller
{
    public function getCity($insee){
        return Cities::with("places", "users")->where("insee", "=", $insee)->get();
    }
}
