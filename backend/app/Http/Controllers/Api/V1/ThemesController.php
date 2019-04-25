<?php

namespace App\Http\Controllers\Api\V1;
use App\Models\Themes;
use Dingo\Api\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\DB;


class ThemesController extends Controller
{
    public function getThemes(){
        return Themes::with("diners", "users")->get();
    }

    public function createThemes(Request $request){
        $attribut = [];

        try{
            $attribut['label'] = $request->label;

            DB::beginTransaction();

            $themes = Themes::create($attribut);

            DB::commit();

            return $themes;
        }catch (\PDOException $e){
            DB::rollBack();
            return $e;
        }
    }
}
