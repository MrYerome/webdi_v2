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
        return Usersdiners::all();
    }
}
