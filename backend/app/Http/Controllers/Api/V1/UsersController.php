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

            $user = new Users();

            $profile = $this->api->with($request->all())->post('profiles');
            //var_dump($profile);
            //dd($this->api->with($request)->post('profiles'));

            $user->login = $request->login;
            $user->password = md5($user->password);
            $user->id_UserTypes = $request->userTypes;
            $user->id_Profiles = $profile['id'];

            $user->save();

            DB::commit();
            return $user;
        } catch (\PDOException $e) {
            // Woopsy
            return $e;
            //return $this->response->errorBadRequest();
            DB::rollBack();
        }
    }
}
