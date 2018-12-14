<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
/*
 * author : yerome
 * date : november 2018
 * API qui redirige les routes d'angular(4200) vers le localhost php (8000) en ajoutant la class Cors qui rajoute des headers
 */
//Route de test :
Route::group(['middleware' => 'cors'], function() {
    Route::post('/test','UserDetailsController@userDetails' );

});

//Route::post("/test", "UserDetailsController@userDetails");


//Routes utiles
Route::post('login', 'AuthController@login');
Route::post('/signup', 'AuthController@signup');
Route::post('logout', 'AuthController@logout');
Route::post('refresh', 'AuthController@refresh');
Route::post('me', 'AuthController@me');
Route::post('sendPasswordResetLink', 'ResetPasswordController@sendEmail');
Route::post('resetPassword', 'ChangePasswordController@process');
