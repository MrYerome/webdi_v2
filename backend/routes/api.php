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
        $api->get('/getAllUsers', 'App\Http\Controllers\Api\V1\UsersController@getUsers');
        $api->get('/login/{login}', 'App\Http\Controllers\Api\V1\UsersController@login');
        $api->get('{id}', 'App\Http\Controllers\Api\V1\UsersController@getUser');
        $api->get('/getUser/{id}', 'App\Http\Controllers\Api\V1\UsersController@getUser');
        $api->post('/create', 'App\Http\Controllers\Api\V1\UsersController@createUser');
        $api->patch('/update', 'App\Http\Controllers\Api\V1\UsersController@updateUser');

    });


    $api->group(['prefix' => 'diners'], function ($api){
        $api->get('', '\App\Http\Controllers\Api\V1\dinersController@getDiners');

    });

    $api->post('login', 'App\Http\Controllers\Api\V1\AuthController@login');
    $api->post('signup', 'App\Http\Controllers\Api\V1\UsersController@createUser');
});


