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
        return Diners::with('place', 'theme', 'user', 'usersdiners', "city")->where("date", ">=", date("Y-m-d H:m:i"))->orderBy('date','asc')->get();
    }

    /**
     * @param $id
     * @return Diners|Diners[]|\Illuminate\Database\Eloquent\Builder|\Illuminate\Database\Eloquent\Builder[]|\Illuminate\Database\Eloquent\Collection|\Illuminate\Database\Eloquent\Model|null
     * récupération d'un diner
     */
    public function getDiner($id){
        return Diners::with('place','theme','user', 'usersdiners', 'city')->withTrashed()->find($id);
    }

    /**
     *
     * @return Diners|Diners[]|\Illuminate\Database\Eloquent\Builder|\Illuminate\Database\Eloquent\Builder[]|\Illuminate\Database\Eloquent\Collection|\Illuminate\Database\Eloquent\Model|null
     * récupération des 3 diners les plus proches
     */
    public function get3FistDiner(){
        return Diners::with('place','theme','user', 'city')->where("date", ">=", date("Y-m-d H:m:i"))->orderBy('date','asc')->limit(3)->get();
    }

    /**
     *
     * @return Diners|Diners[]|\Illuminate\Database\Eloquent\Builder|\Illuminate\Database\Eloquent\Builder[]|\Illuminate\Database\Eloquent\Collection|\Illuminate\Database\Eloquent\Model|null
     * récupération des trois diners les plus proches de la meme cat
     */
    public function get3FistDinerSameCat($id, $idtheme){
        return Diners::with('place','theme','user', 'city')->where([["date", ">=", date("Y-m-d H:m:i")],["id_Themes", "=", $idtheme], ["id", "!=", $id]])->orderBy('date','asc')->limit(3)->get();
    }

    /**
     * @param $id
     * @return Diners|Diners[]|\Illuminate\Database\Eloquent\Builder|\Illuminate\Database\Eloquent\Builder[]|\Illuminate\Database\Eloquent\Collection|\Illuminate\Database\Eloquent\Model|null
     * commentaire cg : récupération des anciens diners (diners dont la date du diners est inférieur a la date du jour)
     */
    public function getOldDiners(){
        return Diners::with('place','theme','user', 'usersdiners', 'city' )->where('date','<', date("Y-m-d H:m:i"))->orderBy('date','desc')->get();
    }

    /**
     * @param Request $request
     * @return Diners[]|\Illuminate\Database\Eloquent\Builder[]|\Illuminate\Database\Eloquent\Collection
     * commentaire cg : récupération des diners dont je suis l'organisateur
     */
public function getMyOwnDiners(Request $request){
       
        return Diners::with('place', 'theme', 'user', 'usersdiners', 'city')->where(['id_Organisator' => $request->user_id])->get();
    }





    /**
     * @param Request $request
     * @return string
     * commentaire cg: création du diner, le request est renseigné dans le tableau attribut
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


    public function deleteDiner(Request $request){

        try{

            $diner = Diners::find($request->diner_id);
            if ($diner->id_Organisator == $request->user_id){

                $diner->delete();
            }else{
                $this->response->errorUnauthorized();
            }

        }catch (\PDOException $e){
            return $e->getMessage();
        }
    }

    public function updateDiner(Request $request){

        try{

            $diners = new Diners();

            if (isset($request->id)){
                $diners = Diners::find($request->id);
            }

            if (!isset($diners->id)) {
            }

            $attributeNonModifiable = ['id','place', 'city', 'theme', 'user', 'usersdiners'];
            DB::beginTransaction();
                //return $request;
            foreach ($request->all() as $key => $param) {

                if (!in_array($key, $attributeNonModifiable)) {
                    $diners->$key = $param;
                }
            }

            $diners->save();

            DB::commit();
            return $this->api->get('diners/getDiner/' . $diners->id);


        }catch (\PDOException $e){
           DB::rollBack();
           return $e;
        }

    }

    /**
     * @return mixed
     * commentaier cg: récupération des diners supprimés
     */
    public function getDeletedDiners(){
        return Diners::with('place', 'theme', 'user', 'usersdiners', 'city')->onlyTrashed()->get();

    }



}
