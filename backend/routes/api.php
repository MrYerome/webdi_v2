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


$api = app(Router::class);

$api->version('v1', [], function (Router $api) {
    $api->group(['prefix' => 'users'], function ($api){
        $api->get('', 'App\Http\Controllers\Api\V1\UsersController@getAllUsers');
        $api->get('/login/{login}', 'App\Http\Controllers\Api\V1\UsersController@login');
        $api->get('{id}', 'App\Http\Controllers\Api\V1\UsersController@getUser');
        $api->post('', 'App\Http\Controllers\Api\V1\UsersController@createUser');
        $api->get('/getUser/{id}', 'App\Http\Controllers\Api\V1\UsersController@getUser');
        $api->get('/getAllUsers', 'App\Http\Controllers\Api\V1\UsersController@getAllUsers');


    });

    $api->group(['prefix' => 'profiles'], function ($api){
       $api->post('', 'App\Http\Controllers\Api\V1\ProfilesController@createProfile');
       $api->patch('', 'App\Http\Controllers\Api\V1\ProfilesController@updateProfile');

       $api->get('getProfile/{id}', 'App\Http\Controllers\Api\V1\ProfilesController@getProfile');
       $api->get('getAllProfiles/', 'App\Http\Controllers\Api\V1\ProfilesController@getAllProfiles');

    });

    $api->post('login', 'App\Http\Controllers\Api\V1\AuthController@login');
    $api->post('signup', 'App\Http\Controllers\Api\V1\UsersController@createUser');
});


