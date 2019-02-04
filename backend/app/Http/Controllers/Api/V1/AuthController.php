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

    public function sendEmail(){
        return json_encode("bravo");
    }

    public function login()
    {
        $password = md5(request('password'));
        $login = request('login');
        $userSaisi = $this->api->get("users/login/".$login);

        if (isset($userSaisi[0]) && $userSaisi!= null) {
            if($userSaisi[0]['password']!= $password){
                return response()->json(['message' => $password]);
            }
            else{
                return $userSaisi;
            }
        } else {
            return response()->json(['message' => 'false']);
        }

    }


}
