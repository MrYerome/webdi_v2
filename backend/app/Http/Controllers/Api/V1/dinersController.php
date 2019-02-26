<?php

namespace App\Http\Controllers\Api\V1;

use App\Models\Diners;
use App\Models\Users;
use Dingo\Api\Routing\Helpers;
use Dingo\Api\Contract\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\DB;

class dinersController extends Controller
{
    use Helpers;

    /**
     * @return Diners[]|\Illuminate\Database\Eloquent\Builder[]|\Illuminate\Database\Eloquent\Collection
     * commentaire cg: récupération des diners dont la date est supérieur a la date du jour
     */
    public function getDiners(){
        return Diners::with('place', 'theme', 'user', 'usersdiners')->where("date", ">=", "now()")->orderBy('date','asc')->get();
    }

    /**
     * @param $id
     * @return Diners|Diners[]|\Illuminate\Database\Eloquent\Builder|\Illuminate\Database\Eloquent\Builder[]|\Illuminate\Database\Eloquent\Collection|\Illuminate\Database\Eloquent\Model|null
     * récupération d'un diner
     */
    public function getDiner($id){
        return Diners::with('place','theme','user', 'usersdiners')->find($id);
    }

    /**
     * @param $id
     * @return Diners|Diners[]|\Illuminate\Database\Eloquent\Builder|\Illuminate\Database\Eloquent\Builder[]|\Illuminate\Database\Eloquent\Collection|\Illuminate\Database\Eloquent\Model|null
     * commentaire cg : récupération des anciens diners (diners dont la date du diners est inférieur a la date du jour)
     */
    public function getOldDiners(){
        return Diners::with('place','theme','user', 'usersdiners')->where('date','<', 'now()')->orderBy('date','desc')->get();
    }

    /**
     * @param Request $request
     * @return Diners[]|\Illuminate\Database\Eloquent\Builder[]|\Illuminate\Database\Eloquent\Collection
     * commentaire cg : récupération des diners dont je suis l'organisateur
     */
    public function getMyOwnDiners(Request $request){
        return Diners::with('place', 'theme', 'user', 'usersdiners')->where(['id_Organisator' => $request->user_id])->get();
    }

    /***
     * @param Request $request
     * @return Diners[]|\Illuminate\Database\Eloquent\Builder[]|\Illuminate\Database\Eloquent\Collection
     * commentaire cg: récupération des diners auquels j'ai participé
     */
    public function getMyDiners(Request $request){
        return Diners::with('place','theme','user', 'usersdiners')->where('date','>=','now()')->whereHas('usersdiners' , function ($query) use ($request) {
            $query->where('id_Users', '=', $request->user_id);
        })->get();
    }

    /**
     * @param Request $request
     * @return Diners[]|\Illuminate\Database\Eloquent\Builder[]|\Illuminate\Database\Eloquent\Collection
     * commentaire cg : récupération des anciens diners auquels j'ai participé
     */
    public function getMyOldDiners(Request $request){
        return Diners::with('place','theme','user', 'usersdiners')->where('date','<','now()')->whereHas('usersdiners' , function ($query) use ($request) {
            $query->where('id_Users', '=', $request->user_id);
        })->get();
    }

    /**
     * @param Request $request
     * @return string
     * commentaire cg: création du diner, le request est renseigner dans le tableau attribut
     */
    public function createDiner(Request $request){
        $attribut = [];

        try{
            DB::beginTransaction();

                $attribut['title'] = $request->title;
                $attribut['description'] = $request->description;
                $attribut['date'] = $request->date;
                $attribut['price'] = $request->price;
                $attribut['maxMembers'] = $request->maxMembers;
                $attribut['id_Places'] = $request->id_Places;
                $attribut['id_Themes'] = $request->id_Themes;
                $attribut['id_Organisator'] = $request->id_Organisator;

                $diners = Diners::create($attribut);

            DB::commit();
            return $diners;
        }catch (\PDOException $e){
            DB::rollBack();
            return $e->getMessage();

        }

    }

    /**
     * @param $id
     * @return string
     * Commentaire cg : Cette fonction ne supprime pas le diner mais renseigne la date "deleted_at"
     */
    public function deleteDiner($id){

        try{
            $diner = Diners::find($id);
            $diner->delete();

        }catch (\PDOException $e){
            return $e->getMessage();
        }
    }

    public function updateDiner(Request $request){

        try{
            DB::beginTransaction();
            $diners = new Diners();

            if (isset($request->id)){
                $diners = Diners::find($request->id);
            }

            if (isset($diners->id)) {
                //return $request;
                foreach ($request->all() as $key => $param) {

                    if ($key != 'id') {
                        $diners->$key = $param;

                    }
                }
                $diners->save();

                DB::commit();
                return $this->api->get('diners/' . $diners->id);
            } ELSE {
                $this->response->errorBadRequest();
            }

        }catch (\PDOException $e){
           return $e;
           DB::rollBack();
        }

    }

    /**
     * @return mixed
     * commentaier cg: récupération des diners supprimés
     */
    public function getDeletedDiners(){
        return Diners::with('place', 'theme', 'user', 'usersdiners')->onlyTrashed()->get();

    }



}
