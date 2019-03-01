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

        return Users::with('Usertypes', 'cities', 'Themes')->where(['login' => $login])->get()->makeVisible(['password']);

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
            $attribut['name'] = $request->name;
            $attribut['firstName'] = $request->firstName;
            $attribut['email'] = $request->email;
            // TODO: Modifier le id_Cities pour qu'il ne soit plus fixe
            $attribut['id_Cities'] = 1;
            $attribut['id_UserTypes'] = '2';

            $user = Users::create($attribut);

            DB::commit();
            return $this->api->get('users/' . $user->id);
        } catch (\PDOException $e) {
            return $e;
            //return $this->response->errorBadRequest();
            DB::rollBack();
        }

    }

    /**
     * @param Request $request
     * @return \Exception|mixed|\PDOException
     * Commentaire JV : cette fonction marche, mais j'ai été obligé de mettre le $request dans un $attribut[]
     * Si je fais request->all, le PDO bloque sur usertypes (champ inconnu)
     * Je ne comprend pas pourquoi, car cela fonctionne très bien avec city
     * En plus, dans postman, la requête fonctionne, ce qui me fait penser à une erreur dans le front angular
     */
    // TODO: Update de la ville et utiliser la bonne fonction
    public function updateUser(Request $request)
    {
        try {
            DB::beginTransaction();
            $attribut = [];
            $attribut['id'] = $request->id;
            $attribut['login'] = $request->login;
            $attribut['id_UserTypes'] = 2;
            $attribut['name'] = $request->name;
            $attribut['firstName'] = $request->firstName;
            $attribut['email'] = $request->email;
            $attribut['specAlim'] = $request->specAlim;
            $user = new Users();

            if (isset($attribut['id'])) {
                $user = Users::with('usertypes', 'cities', 'Themes')->find($attribut['id']);
            }
            if (isset($user->id)) {
                //return $request;
                foreach ($attribut as $key => $param) {
                    if ($key != 'id') {
                        $user->$key = $param;
                    }
                }
                $user->save();

                DB::commit();
                return $user->id;
                return $this->api->get('users/getUser' . $user->id);
            } ELSE {
                $this->response->errorBadRequest();
            }
        } catch (\PDOException $e) {
            return $e;
            DB::rollBack();
        }
    }

    /**
     * @param Request $request
     * @return \Exception|mixed|\PDOException
     * Commentaire JV : cette requête ne marche pas, le problème est le champ usertypes qui n'est pas trouvé
     *
     */
    public function updateUser2(Request $request)
    {
        try {
            DB::beginTransaction();
            $user = new Users();
            if (isset($request->id)) {
                $user = Users::with('usertypes', 'cities', 'Themes')->find($request->id);
                //  return json_encode($user);
            }

            if (isset($user->id)) {
                foreach ($request->all() as $key => $param) {
                    if ($key != 'id') {
                        $user->$key = $param;
                    }
                }
                $user->save();
                DB::commit();
                return $this->api->get('users/' . $user->id);

            } else {
                $this->response->errorBadRequest();
            }

        } catch (\PDOException $e) {
            return $e;
            DB::rollBack();

        }
    }
}
