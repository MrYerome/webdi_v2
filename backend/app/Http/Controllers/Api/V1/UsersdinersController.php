<?php

namespace App\Http\Controllers\Api\V1;

use App\Models\Usersdiners;
use Dingo\Api\Routing\Helpers;
use Dingo\Api\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\DB;

class UsersdinersController extends Controller
{
    use Helpers;

    //  Récupération de toutes les réservations
    public function getUsersdiners(){
        return Usersdiners::with("user", "diner")->get();
    }

    // Récupération d'une réservation avec l'id users et l'id diners
    public function getOneUsersdiners(Request $request){
        return Usersdiners::with("user", "diner")->where([["id_Users", "=", $request->id_Users], ["id_diners", "=",$request->id_Diners]])->get();
    }

    // Récupération des réservation d'un utilisateur
    public function getAllUsersdinersByUsers($id){
            return Usersdiners::with("user", "diner")->where("id_Users", "=" , $id)->get();
    }

    // Récupération des réservation d'un diners
    public function getAllUsersdinersByDiners($id){
        return Usersdiners::with("user", "diner")->where("id_Diners", "=" , $id)->get();
    }

    public function createUsersdiners(Request $request){

        if ($request->id_Users != null && $request->id_Diners != null){

            try{

                DB::beginTransaction();
                $attribut = [];
                $attribut['id_Users'] = $request->id_Users;
                $attribut['id_Diners'] = $request->id_Diners;
                $attribut['nbPlaces'] = ($request->nbPlaces == null) ? 1 : $request->nbPlaces;

                $usersDiners = Usersdiners::create($attribut);

                DB::commit();
                return $this->api->get('usersdiners/getOneUsersdiners/?id_Users=' . $usersDiners->id_Users.'&id_Diners='. $usersDiners->id_Diners);
            } catch (\PDOException $e) {
                DB::rollBack();
                return $e;
                //return $this->response->errorBadRequest();
            }
        }
    }


}
