<?php

namespace App\Http\Controllers\Api\V1;
use App\Models\Themes;
use App\Models\Users;
use Dingo\Api\Http\Request;
use Dingo\Api\Routing\Helpers;
use http\Exception\InvalidArgumentException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\DB;


class ThemesController extends Controller
{
    use Helpers;

    public function getThemes(){
        return Themes::with("diners", "users")->get();
    }

    public function getOneTheme($id){
        return Themes::with("diners", "users")->find($id);
    }

    public function createThemes(Request $request){
        $attribut = [];

        try{
            $attribut['label'] = $request->label;

            DB::beginTransaction();

            $themes = Themes::create($attribut);

            DB::commit();

            return $themes;
        }catch (\PDOException $e){
            DB::rollBack();
            return $e;
        }
    }

    public function deleteThemes(Request $request){

        try{
            // Vérification que user_id est passé
            if (!isset($request->user_id)){
                throw new \InvalidArgumentException("user_id manquant");
            }

            // Vérification que theme_id est passé
            if (!isset($request->theme_id)){
                throw new \InvalidArgumentException("themes_id manquant");
            }
            $user = Users::with('usertypes')->find($request->user_id);
            // le user est admin
            if ($user->id_UserTypes != 1){
                throw new \InvalidArgumentException("Unauthorized");
            }

            DB::beginTransaction();
            if (Themes::find($request->theme_id) != null){
                Themes::find($request->theme_id)->delete();
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

    public function updateThemes(Request $request){
        try{
            $theme = new Themes();
            // Vérification que user_id est passé
            if (!isset($request->user_id)){
                throw new \InvalidArgumentException("User_id manquant");
            }
            // Vérification que theme_id est passé
            if (!isset($request->theme_id)){
                throw new \InvalidArgumentException("Le champ themes_id est manquant");
            }
            $user = Users::with('usertypes')->find($request->user_id);
            // Vérification que user est admin
            if ($user->id_UserTypes != 1){
                throw new \InvalidArgumentException("Unauthorized");
            }

            $theme = Themes::find($request->theme_id);

            $aAttributModifiable = ['label'];

            if (!isset($theme->id)) {
                throw new ModelNotFoundException('Themes not find');
            }

            DB::beginTransaction();

            foreach ($request->all() as $key => $value){
                if (in_array($key, $aAttributModifiable)){
                    $theme->$key = $value;
                }
            }
            $theme->save();

            DB::commit();
            return $this->api->get('themes/getOneThemes/' . $theme->id);

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
