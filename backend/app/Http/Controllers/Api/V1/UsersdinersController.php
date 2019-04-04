<?php

namespace App\Http\Controllers\Api\V1;

use App\Models\Diners;
use App\Models\Usersdiners;
use Dingo\Api\Routing\Helpers;
use Dingo\Api\Http\Request;
use http\Exception;
use Illuminate\Database\Eloquent\ModelNotFoundException;
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

    // Création d'un userdiner
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

    // Mettre a jour un usersdiners
    public function updateUsersdiners(Request $request){
        try{
            $usersdiner = new Usersdiners();

            if (isset($request->id_Users) && isset($request->id_Diners)){
                $usersdiner = Usersdiners::where([["id_Users", "=", $request->id_Users], ["id_diners", "=",$request->id_Diners]])->first();
            }

            if (!isset($usersdiner->id_Users)) {
                throw new ModelNotFoundException('UsersDiners not find');
            }

            $aAttributModifiable = ['rate', 'comment', 'nbPlaces'];

            DB::beginTransaction();

            foreach ($request->all() as $key => $value){
                if (in_array($key, $aAttributModifiable)){
                    $usersdiner->$key = $value;
                }
            }
            $usersdiner->save();

            DB::commit();
            return $this->api->get('usersdiners/getOneUsersdiners?id_Users=' . $usersdiner->id_Users.'&id_Diners='. $usersdiner->id_Diners);

        }catch (\PDOException $e) {
            DB::rollBack();
            return $e;
            //return $this->response->errorBadRequest();
        }
    }


}
