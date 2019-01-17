<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Transformers\UsersTransformer;
use App\Models\Users;
use App\User;
use Dingo\Api\Contract\Http\Request;
use Dingo\Api\Http\Response;
use Dingo\Api\Routing\Helpers;
use Illuminate\Routing\Controller;

class AuthController extends Controller
{
    use Helpers;

    public function login()
    {
        $password = request('password');
        $login = request('login');
        $userSaisi = Users::with('Usertypes', 'Profile')->where(['login' => $login])->get();
        if (isset($userSaisi[0]) && $userSaisi!= null) {
            if($userSaisi[0]['password']!=$password){
                return response()->json(['message' => 'false']);
            }
            else{
            return response()->json($userSaisi);
            }
        } else {
            return response()->json(['message' => 'false']);

        }

    }


}
