<?php

namespace App\Http\Controllers\Api\V1;


use App\Models\Profiles;
use App\Models\Users;
use function Couchbase\basicEncoderV1;
use Dingo\Api\Routing\Helpers;
use Dingo\Api\Contract\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\DB;



class ProfilesController extends Controller
{
    use Helpers;

    public function createProfile(Request $request){
    try {
        DB::beginTransaction();

//        $p = new Profiles();
//        $p->name = $request->name;
//        $p->firstName = $request->firstName;
//        $p->email = $request->email;
//        $p->insee_Cities = '49007';

        $attribut = [];
        $attribut['name'] = $request->name;
        $attribut['firstName'] = $request->firstName;
        $attribut['email'] = $request->email;
        $attribut['insee_Cities'] = '49007';

        $p = Profiles::create($attribut);
        DB::commit();

        return $p;

        } catch (\PDOException $e) {
            // Woopsy
            return $e;
//            return $this->response->errorBadRequest();
            DB::rollBack();
        }
    }


    public function getProfile($id)
    {
        $profile = Profiles::with('insee_Cities', 'profilesthemes')->where(['id' => $id])->take(1)->get();

        return $profile;

    }
    public function getAllProfiles()
    {

        $profiles = Profiles::with('insee_Cities', 'profilesthemes')->get();

        return $profiles;
    }


    public function updateProfile(Request $request){

        try{
            DB::beginTransaction();

            if (isset($request->id)){
                $profile = $this->api->get('getProfile/'.$request->id);
            }

            foreach ($request->all() as $key => $param){
                if($key != 'id'){
                    $profile->$key = $param;
                }
            }

            $profile->save();

            DB::commit();

            return $this->api->get('getProfile/'.$profile->id);
        }catch (\PDOException $e){
            DB::rollBack();

        }




    }

}
