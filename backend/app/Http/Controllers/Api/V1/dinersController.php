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

    public function getDiners(){
        return Diners::with('place', 'theme', 'user', 'usersdiners')->where("date", ">=", date("Y-m-d h:i:s"))->get();
    }

    public function getDiner($id){
        return Diners::with('place','theme','user', 'usersdiners')->where('date','>=', 'now()')->orderBy('date','asc')->find($id);
    }

    public function getOldDiner($id){
        return Diners::with('place','theme','user', 'usersdiners')->where('date','<', 'now()')->orderBy('date','desc')->find($id);
    }

    public function getMyOwnDiners(Request $request){
        return Diners::with('place', 'theme', 'user', 'usersdiners')->where(['id_Organisator' => $request->user_id])->get();
    }

    public function getMyDiners(Request $request){
        return Diners::with('place','theme','user', 'usersdiners')->where('date','>=','now()')->whereHas('usersdiners' , function ($query) use ($request) {
            $query->where('id_Users', '=', $request->user_id);
        })->get();
    }

    public function getMyOldDiners(Request $request){
        return Diners::with('place','theme','user', 'usersdiners')->where('date','<','now()')->whereHas('usersdiners' , function ($query) use ($request) {
            $query->where('id_Users', '=', $request->user_id);
        })->get();
    }


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

    public function deleteDiner($id){

        try{
            Diners::deleted($id);
        }catch (\PDOException $e){
            return $e->getMessage();
        }
    }

}
