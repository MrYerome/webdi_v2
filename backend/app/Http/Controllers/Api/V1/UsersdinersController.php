<?php

namespace App\Http\Controllers\Api\V1;

use App\Models\Usersdiners;
use Dingo\Api\Routing\Helpers;
use Dingo\Api\Http\Request;
use Illuminate\Routing\Controller;

class UsersdinersController extends Controller
{
    use Helpers;

    //  Récupération de toutes les réservations
    function getUsersdiners(){
        return Usersdiners::with("user", "diner")->get();
    }

    // Récupération d'une réservation avec l'id users et l'id diners
    function getOneUsersdiners(Request $request){
        return Usersdiners::with("user", "diner")->where([["id_Users", "=", $request->id_Users], ["id_diners", "=",$request->id_Diners]])->get();
    }
}
