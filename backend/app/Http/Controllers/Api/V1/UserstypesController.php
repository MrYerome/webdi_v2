<?php

namespace App\Http\Controllers\Api\V1;

use App\Models\Users;
use App\Models\Usertypes;
use Dingo\Api\Http\Request;
use Dingo\Api\Routing\Helpers;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\DB;

class UserstypesController extends Controller
{
    use Helpers;

    public function getUserstypes(){
        return Usertypes::with('users')->get();
    }

    public function getOneUserstypes($id){
        return Usertypes::with( "users")->find($id);
    }

    public function createUserstypes(Request $request){
        $attribut = [];

        try{
            $attribut['label'] = $request->label;

            DB::beginTransaction();

            $userstypes = Usertypes::create($attribut);

            DB::commit();

            return $userstypes;
        }catch (\PDOException $e){
            DB::rollBack();
            return $e;
        }
    }

    public function deleteUserstypes(Request $request){

        try{
            // Vérification que user_id est passé
            if (!isset($request->user_id)){
                throw new \InvalidArgumentException("user_id manquant");
            }

            // Vérification que theme_id est passé
            if (!isset($request->userstypes_id)){
                throw new \InvalidArgumentException("userstypes_id manquant");
            }
            $user = Users::with('usertypes')->find($request->user_id);

            // Vérification le user est admin


            if ($user->id_UserTypes != 1 || $request->userstypes_id == 1 ){
                throw new \InvalidArgumentException("Unauthorized");
            }

            DB::beginTransaction();
            if (Usertypes::find($request->userstypes_id) != null){
                Usertypes::find($request->userstypes_id)->delete();
            }

            DB::commit();
            return $this->response->accepted();

        }catch (\InvalidArgumentException $e){
            return $e->getMessage();
        }catch (\PDOException $e){
            DB::rollBack();
            return $e->getMessage();
        }
    }

    public function updateUserstypes(Request $request){
        try{
            $userstypes = new Usertypes();
            // Vérification que user_id est passé
            if (!isset($request->user_id)){
                throw new \InvalidArgumentException("User_id manquant");
            }
            // Vérification que theme_id est passé
            if (!isset($request->userstypes_id)){
                throw new \InvalidArgumentException("Le champ userstypes_id est manquant");
            }
            $user = Users::with('usertypes')->find($request->user_id);
            // Vérification que user est admin
            if ($user->id_UserTypes != 1 || $request->userstypes_id == 1 ){
                throw new \InvalidArgumentException("Unauthorized");
            }

            $userstypes = Usertypes::find($request->userstypes_id);

            $aAttributModifiable = ['label', 'deleted_at'];

            if (!isset($userstypes->id)) {
                throw new ModelNotFoundException('Userstypes not find');
            }

            DB::beginTransaction();

            foreach ($request->all() as $key => $value){
                if (in_array($key, $aAttributModifiable)){
                    $userstypes->$key = $value;
                }
            }
            $userstypes->save();

            DB::commit();
            return $this->api->get('userstypes/getOneUserstypes/' . $userstypes->id);

        }catch (\InvalidArgumentException $e) {
            return $e->getMessage();
        }catch (\PDOException $e) {
            DB::rollBack();
            return $e->getMessage();
            //return $this->response->errorBadRequest();
        }catch (ModelNotFoundException $e){
            return $e->getMessage();
        }
    }
}
