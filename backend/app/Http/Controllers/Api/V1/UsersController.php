<?php
namespace App\Http\Controllers\Api\V1;


use App\Models\Profiles;
use App\Models\Users;
use Dingo\Api\Contract\Http\Request;
use Dingo\Api\Http\Response;
use Dingo\Api\Routing\Helpers;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\DB;

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

            $profile = new Profiles();
            $user = new Users();
            $profileAttribut = [];

            $profileAttribut['name'] = $request->name;
            $profileAttribut['firstName'] = $request->firstName;
            $profileAttribut['email'] = $request->email;
            $profileAttribut['insee_Cities'] = '49007';

            $profile = Profiles::create($profileAttribut);

            $user->login = $request->login;
            $user->password = md5($user->password);
            $user->id_UserTypes = $request->userTypes;
            $user->id_Profiles = $profile->id;

            $user->save();

            DB::commit();
        } catch (\PDOException $e) {
            // Woopsy
            DB::rollBack();
        }









    }


}
