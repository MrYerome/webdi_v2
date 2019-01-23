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
        return Users::with('Usertypes', 'cities', 'Themes')->where(['login' => $login])->get();

    }

    public function getUsers()
    {
         return Users::with('Usertypes', 'cities', 'Themes')->get();
    }

    public function getUser($id)
    {
        return Users::with('Usertypes', 'cities', 'Themes')->find($id);
    }


    public function createUser(Request $request)
    {
        try {
            DB::beginTransaction();


            $attribut = [];

            $attribut['login'] = $request->login;
            $attribut['password'] = md5($request->password);
            $attribut['id_UserTypes'] = $request->userTypes;
            $attribut['name'] = $request->name;
            $attribut['firstName'] = $request->firstName;
            $attribut['email'] = $request->email;
            $attribut['insee_Cities'] = '49007';

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

    public function updateUser(Request $request){
        try{
            DB::beginTransaction();

            $user = new Users();
            if (isset($request->id)){
                $user = Users::with('Usertypes', 'cities', 'Themes')->find($request->id);

            }

            if(isset($user->id)){
                foreach ($request->all() as $key => $param){
                    if($key != 'id'){
                        $user->$key = $param;
                    }
                }
                $user->save();

                DB::commit();

                return $this->api->get('users/'.$user->id);
            }ELSE{
                $this->response->errorBadRequest();
            }


        }catch (\PDOException $e){
            return $e;
            DB::rollBack();

        }
    }
}
