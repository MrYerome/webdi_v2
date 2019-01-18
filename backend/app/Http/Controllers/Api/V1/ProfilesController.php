<?php

namespace App\Http\Controllers\Api\V1;

use Dingo\Api\Routing\Helpers;
use Dingo\Api\Contract\Http\Request;
use App\Models\Profiles;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\DB;



class ProfilesController extends Controller
{
    use Helpers;

    public function create(Request $request){
        try {
            DB::beginTransaction();

            $p = new Profiles();
            $p->name = $request->name;
            $p->firstName = $request->firstName;
            $p->email = $request->email;
            $p->insee_Cities = '49007';

            $p->save();
            DB::commit();

            return $p;

        } catch (\PDOException $e) {
            // Woopsy
            return $e;
//            return $this->response->errorBadRequest();
            DB::rollBack();
        }
    }
}
