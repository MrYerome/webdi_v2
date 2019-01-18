<?php
namespace App\Http\Controllers\Api\V1;


use App\Models\Profiles;
use App\Models\Users;
use Barryvdh\Cors\Tests\PreflightTest;
use Dingo\Api\Contract\Http\Request;
use Dingo\Api\Http\Response;
use Dingo\Api\Routing\Helpers;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\DB;
use Psy\Util\Json;

class UsersController extends Controller
{
    use Helpers;

    public function login($login)
    {
        $user = Users::with('Usertypes', 'Profile')->where(['login' => $login])->take(1)->get();
        return $user;
    }

    public function index()
    {
         return Users::with('Usertypes', 'Profile')->get();
    }

    public function getUser($id)
    {
        return Users::with('Usertypes', 'Profile')->where(['id' => $id])->get();
    }


    public function createUser(Request $request)
    {
        try {
            DB::beginTransaction();


            $attribut = [];

            $profile = $this->api->with($request->all())->post('profiles');


            $attribut['login'] = $request->login;
            $attribut['password'] = md5($request->password);
            $attribut['id_UserTypes'] = $request->userTypes;
            $attribut['id_Profiles'] = $profile['id'];

            $user = Users::create($attribut);

            DB::commit();
            return $this->api->get('users/'.$user->id);
        } catch (\PDOException $e) {
            // Woopsy
            return $e;
            //return $this->response->errorBadRequest();
            DB::rollBack();
        }



    }


}
