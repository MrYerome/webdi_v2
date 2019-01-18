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
    $api->group(['prefix' => 'users'], function ($api){
        $api->get('', 'App\Http\Controllers\Api\V1\UsersController@index');
        $api->get('/login/{login}', 'App\Http\Controllers\Api\V1\UsersController@login');
        $api->get('{id}', 'App\Http\Controllers\Api\V1\UsersController@getUser');

        $api->post('', 'App\Http\Controllers\Api\V1\UsersController@createUser');

    });

    $api->group(['prefix' => 'profiles'], function ($api){
       $api->post('', 'App\Http\Controllers\Api\V1\ProfilesController@create');
       $api->post('/getProfile', 'App\Http\Controllers\Api\V1\ProfilesController@getProfile');
    });

    $api->post('login', 'App\Http\Controllers\Api\V1\AuthController@login');
    $api->post('signup', 'App\Http\Controllers\Api\V1\UsersController@createUser');
});


//Routes utiles

//Route::post('logout', 'AuthController@logout');
//Route::post('refresh', 'AuthController@refresh');
//Route::post('me', 'AuthController@me');
//Route::post('sendPasswordResetLink', 'ResetPasswordController@sendEmail');
//Route::post('resetPassword', 'ChangePasswordController@process');
//Route::post('/login', 'AuthController@login');
//Route::post('/signup', 'AuthController@signup');
