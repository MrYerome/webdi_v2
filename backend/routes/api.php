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
    //Envoi d'un mail après le signup
    $api->post('sendMailAfterSignup', 'App\Http\Controllers\Api\V1\ActivationController@sendMailAfterSignup');
    //Pour l'activation :
    $api->get('activation/{token}', 'App\Http\Controllers\Api\V1\ActivationController@activation');

    $api->group(['prefix' => 'diners'], function ($api){
        $api->get('myDiners', '\App\Http\Controllers\Api\V1\dinersController@getMyDiners');
        $api->get('/{id}', '\App\Http\Controllers\Api\V1\dinersController@getDiner');

        $api->get('/myOwnDiners', '\App\Http\Controllers\Api\V1\dinersController@getMyOwnDiners');
       // $api->get('myDiners', '\App\Http\Controllers\Api\V1\dinersController@getDiners');

        $api->get('/deleted', '\App\Http\Controllers\Api\V1\dinersController@getDeletedDiners');
        $api->post('/create', '\App\Http\Controllers\Api\V1\dinersController@createDiner');
        $api->patch('/update', '\App\Http\Controllers\Api\V1\dinersController@updateDiner');
        $api->delete('/{id}', '\App\Http\Controllers\Api\V1\dinersController@deleteDiner');

    });

    $api->group(['prefix' => 'auth'], function ($api){
        $api->get('', '\App\Http\Controllers\Api\V1\dinersController@getDiners');
    });

    $api->post('login', 'App\Http\Controllers\Api\V1\AuthController@login');
    $api->post('signup', 'App\Http\Controllers\Api\V1\UsersController@createUser');

    //Pour le reset password : envoi d'un mail
    $api->post('sendPasswordResetLink', 'App\Http\Controllers\Api\V1\PasswordController@sendEmail');
    //Pour le reset password :
    $api->post('resetPassword', 'App\Http\Controllers\Api\V1\PasswordController@process');

});


