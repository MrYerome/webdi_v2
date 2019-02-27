<?php

namespace App\Http\Controllers\Api\V1;



use App\Models\Places;
use Illuminate\Routing\Controller;


class PlacesController extends Controller
{
    public function getPlaces(){
        return Places::with("contact", "city", "diners")->get();
    }

    public function getPlace($id){
        return Places::with("contact", "city", "diners")->find($id);
    }
}
