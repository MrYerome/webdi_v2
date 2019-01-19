<?php

namespace App\Http\Controllers\Api\V1;

use App\Models\Diners;
use Dingo\Api\Routing\Helpers;
use Dingo\Api\Contract\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\DB;

class dinersController extends Controller
{
    use Helpers;

    public function getDiners(){
        return Diners::with('place', 'theme', 'user')->where("date", ">=", date("Y-m-d h:i:s"))->get();
    }

}
