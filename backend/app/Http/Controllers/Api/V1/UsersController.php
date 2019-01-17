<?php
namespace App\Http\Controllers\Api\V1;

use App\Http\Transformers\UsersTransformer;
use App\Models\Users;
use App\User;
use Dingo\Api\Contract\Http\Request;
use Dingo\Api\Http\Response;
use Dingo\Api\Routing\Helpers;
use Illuminate\Routing\Controller;

class UsersController extends Controller
{
    use Helpers;

    public function login($login)
    {
        $user = Users::with('Usertypes', 'Profile')->where(['login' => $login])->get();
        return $user;
        //return response()->json(['message' => 'Successfully logged out']);
        //return response()->json("bravo");
        //return Users::with('Usertypes', 'Profile')->where(['id' => $data])->post();
    }

    public function index()
    {
         return Users::with('Usertypes', 'Profile')->get();
    }

    public function getUser($id)
    {
        return Users::with('Usertypes', 'Profile')->where(['id' => $id])->get();
    }

    public  function getUsers(Request $request)
    {
        $query = Users::with('Usertypes', 'Profile');
        foreach ($request->all() as $key => $value) {
            if (is_array($value)) {
                $query->whereIn($key, $value);
            } else {
                $query->where($key, $value);
            }
        }

        return $query->get();
    }

    public function createUser(Request $request)
    {
        $user = new Users();
        foreach ($request->all() as $key => $value)
        {
            $user->$key = $value;
        }
        Users::created($user);

    }


}
