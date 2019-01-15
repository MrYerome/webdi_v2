<?php

namespace App\Http\Transformers;

use App\Models\Users;
use League\Fractal\TransformerAbstract;

class UsersTransformer extends TransformerAbstract
{

    static public function transform(Users $users) : array
    {
        return [
            'id' => $users->id,
            'login' =>$users->login,
            'password' => $users->password,
            'userType' => $users->id_UserTypes,
            'profile' => $users->id_Profiles,
        ];
    }
}