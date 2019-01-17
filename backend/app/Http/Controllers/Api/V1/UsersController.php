<?php
namespace App\Http\Controllers\Api\V1;

use App\Http\Transformers\UsersTransformer;
use App\Models\Users;
use Dingo\Api\Contract\Http\Request;
use Dingo\Api\Http\Response;
use Dingo\Api\Routing\Helpers;
use Illuminate\Routing\Controller;

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
        $user = new Users();

        foreach ($request->all() as $key => $value)
        {
            var_dump($key);
            $user->$key = $value;
        }
        $user->password = md5($user->password);
        $user->save();
//        $user = Users::create($request->all());

    }


}
