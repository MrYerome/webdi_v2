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
        //$request=request();
        //$password = $request['password'];
        $password = request('password');
        //return json_encode($password);
        $login = request('login');
        // return response()->json(['message' => 'Successfully logged out']);
        //return response()->json("bravo");
        $userSaisi = $this->api->get("users/login/".$login);
        if (isset($userSaisi[0]) && $userSaisi!= null) {
            if($userSaisi[0]['password']!=$password){
                return response()->json(['message' => 'false']);
                //return response()->json("pbMdp");
            }
            else{
                return $userSaisi;
            }
        } else {
            return response()->json(['message' => 'false']);
          //  return "pbLogin";
        }

    }


}
