<?php

namespace App\Http\Controllers\Api\V1;


use App\Models\Profiles;
use App\Models\Users;
use Dingo\Api\Routing\Helpers;
use Dingo\Api\Contract\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\DB;



class ProfilesController extends Controller
{
    use Helpers;

    public function create(Request $request){
    try {
        DB::beginTransaction();

        $p = new Profiles();
        $p->name = $request->name;
        $p->firstName = $request->firstName;
        $p->email = $request->email;
        $p->insee_Cities = '49007';

        $p->save();
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
    $profile = Profiles::with('Usertypes', 'Profile')->where(['id' => $id])->take(1)->get();
    return $profile;

    }
    public function getAllProfiles()
    {
//        $user = Users::with('Usertypes', 'Profile')->where(['login' => $login])->take(1)->get();
        $user = Users::with('Usertypes', 'Profile')->get();
        //dd($user);

        //return $user;
        return $user;
//        return json_encode("totot");
//        return Users::with('Usertypes', 'Profile')->where(['id' => $id])->get();
//        return response()->json(['message' => 'false']);
//        $login = request('login');
    }
}
