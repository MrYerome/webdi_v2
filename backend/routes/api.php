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
    //Envoi d'un mail après le signup
    $api->post('sendMailAfterSignup', 'App\Http\Controllers\Api\V1\ActivationController@sendMailAfterSignup');
    //Pour l'activation :
    $api->get('activation/{token}', 'App\Http\Controllers\Api\V1\ActivationController@activation');

    // Actions spécifiques aux utilisateurs
    $api->group(['prefix' => 'users'], function ($api){
        $api->get('/getAllUsers', 'App\Http\Controllers\Api\V1\UsersController@getUsers');
        $api->get('/login/{login}', 'App\Http\Controllers\Api\V1\UsersController@login');
        $api->get('/getUser/{id}', 'App\Http\Controllers\Api\V1\UsersController@getUser');
        $api->post('/create', 'App\Http\Controllers\Api\V1\UsersController@createUser');
        $api->post('/update', 'App\Http\Controllers\Api\V1\UsersController@updateUser');

    });

    // Actions spécifiques  aux diners
    $api->group(['prefix' => 'diners'], function ($api){
        $api->get('/getAllDiners', '\App\Http\Controllers\Api\V1\dinersController@getDiners');
        $api->get('/deleted',  '\App\Http\Controllers\Api\V1\dinersController@getDeletedDiners');
        $api->get('/getDiner/{id}', '\App\Http\Controllers\Api\V1\dinersController@getDiner');
        $api->get('/getOldDiners', '\App\Http\Controllers\Api\V1\dinersController@getOldDiners');
        $api->post('/myOwnDiners', '\App\Http\Controllers\Api\V1\dinersController@getMyOwnDiners');
        $api->post('/myOldDiners', '\App\Http\Controllers\Api\V1\dinersController@getMyOldDiners');
        $api->post('/myDiners', '\App\Http\Controllers\Api\V1\dinersController@getMyDiners');
        $api->post('/create', '\App\Http\Controllers\Api\V1\dinersController@createDiner');
        $api->post('/update', '\App\Http\Controllers\Api\V1\dinersController@updateDiner');
        $api->post('/delete', '\App\Http\Controllers\Api\V1\dinersController@deleteDiner');

    });

    // Actions spécifiques aux Réservation
    $api->group(['prefix' => 'usersdiners'], function ($api){

            $api->get('getAllUsersdiners', '\App\Http\Controllers\Api\V1\UsersdinersController@getUsersdiners');
            $api->get('getOneUsersdiners', '\App\Http\Controllers\Api\V1\UsersdinersController@getOneUsersdiners');
            $api->get('getAllUsersdiners/user/{id}', '\App\Http\Controllers\Api\V1\UsersdinersController@getAllUsersdinersByUsers');
            $api->get('getAllUsersdiners/diner/{id}', '\App\Http\Controllers\Api\V1\UsersdinersController@getAllUsersdinersByDiners');
            // TODO : Cette route devrait etre en post mais error method not allow
            $api->post('create', '\App\Http\Controllers\Api\V1\UsersdinersController@createUsersdiners');
            $api->post('update', '\App\Http\Controllers\Api\V1\UsersdinersController@updateUsersdiners');

    });


    $api->group(['prefix' => 'auth'], function ($api){
        $api->get('', '\App\Http\Controllers\Api\V1\dinersController@getDiners');
    });

    // Actions spécifiques aux lieux (restaurant)
    $api->group(["prefix" => 'places'], function ($api){
        $api->get('/getAllPlaces', '\App\Http\Controllers\Api\V1\PlacesController@getPlaces');
        $api->get('/getPlace/{id}', '\App\Http\Controllers\Api\V1\PlacesController@getPlace');
    });

    // Actions spécifiques aux thèmes
    $api->group(["prefix" => 'themes'], function ($api){
        $api->get('/getAllThemes', '\App\Http\Controllers\Api\V1\ThemesController@getThemes');
    });

    $api->group(["prefix" => 'cities'], function ($api){
        $api->get('/getCities', '\App\Http\Controllers\Api\V1\CitiesController@getAllCities');
        $api->get('/getCity/{insee}', '\App\Http\Controllers\Api\V1\CitiesController@getCity');
    });

    $api->post('login', 'App\Http\Controllers\Api\V1\AuthController@login');
    $api->post('signup', 'App\Http\Controllers\Api\V1\UsersController@createUser');

    //Pour le reset password : envoi d'un mail
    $api->post('sendPasswordResetLink', 'App\Http\Controllers\Api\V1\PasswordController@sendEmail');
    //Pour le reset password :
    $api->post('resetPassword', 'App\Http\Controllers\Api\V1\PasswordController@process');

});


