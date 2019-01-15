<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use DB;
class UserDetailsController extends Controller
{
    public function userDetails(Request $req)
    {
//        $nom = ret;

//        foreach($req->params as $postdata)
//        {
//            $datainserted = DB::table('users')->insert(
//                ['name' => $postdata['updates'][0]['value'], 'email' => $postdata['updates'][1]['value']]
//            );
//            if($datainserted)
//            {
//                return response()->json("Data Added Successfully");
//            }
//        }

        $nom = $req->get("name");

        return response()->json("Bravo" . $nom);

    }
}
