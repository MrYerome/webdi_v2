<?php

use Illuminate\Http\Request;
use Dingo\Api\Routing\Router;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "Api" middleware group. Enjoy building your API!
|
*/
/*
 * author : yerome
 * date : november 2018
 * API qui redirige les routes d'angular(4200) vers le localhost php (8000) en ajoutant la class Cors qui rajoute des headers
 */
//Route de test :
//Route::group(['middleware' => 'cors'], function() {
//    Route::post('/test','UserDetailsController@userDetails' );
//    Route::post('/login', 'AuthController@login');
//    Route::post('/signup', 'AuthController@signup');
//});

//Route::post("/test", "UserDetailsController@userDetails");


$api = app(Router::class);

$api->version('v1', [], function (Router $api) {
    $api->get('users', 'App\Http\Controllers\Api\V1\UsersController@index');
    $api->get('users/{id}', 'App\Http\Controllers\Api\V1\UsersController@getUser');
    $api->post('login', 'App\Http\Controllers\AuthController@login');
    $api->post('signup', 'App\Http\Controllers\AuthController@signup');
});


//Routes utiles

//Route::post('logout', 'AuthController@logout');
//Route::post('refresh', 'AuthController@refresh');
//Route::post('me', 'AuthController@me');
//Route::post('sendPasswordResetLink', 'ResetPasswordController@sendEmail');
//Route::post('resetPassword', 'ChangePasswordController@process');
//Route::post('/login', 'AuthController@login');
//Route::post('/signup', 'AuthController@signup');
