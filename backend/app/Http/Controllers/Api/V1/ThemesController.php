<?php

namespace App\Http\Controllers\Api\V1;
use App\Models\Themes;
use Illuminate\Routing\Controller;


class ThemesController extends Controller
{
    public function getThemes(){
        return Themes::with("diners", "users")->get();
    }
}
