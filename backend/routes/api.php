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
        $api->get('/isUserExist/{login}', 'App\Http\Controllers\Api\V1\UsersController@isUserExist');
        $api->post('/create', 'App\Http\Controllers\Api\V1\UsersController@createUser');
        $api->post('/update', 'App\Http\Controllers\Api\V1\UsersController@updateUser');

    });

    // Actions spécifiques  aux diners
    $api->group(['prefix' => 'diners'], function ($api){
        $api->get('/getAllDiners', '\App\Http\Controllers\Api\V1\dinersController@getDiners');
        $api->get('/deleted',  '\App\Http\Controllers\Api\V1\dinersController@getDeletedDiners');
        $api->get('/getDiner/{id}', '\App\Http\Controllers\Api\V1\dinersController@getDiner');
        $api->get('/getOldDiners', '\App\Http\Controllers\Api\V1\dinersController@getOldDiners');
        $api->get('/3first', '\App\Http\Controllers\Api\V1\dinersController@get3FistDiner');
        $api->get('/3firstInCat/{id}/{idtheme}', '\App\Http\Controllers\Api\V1\dinersController@get3FistDinerSameCat');
        $api->post('/myOwnDiners', '\App\Http\Controllers\Api\V1\dinersController@getMyOwnDiners');

        $api->post('/myDiners', '\App\Http\Controllers\Api\V1\dinersController@getMyDiners');
        $api->post('/create', '\App\Http\Controllers\Api\V1\dinersController@createDiner');
        $api->post('/update', '\App\Http\Controllers\Api\V1\dinersController@updateDiner');
        $api->post('/delete', '\App\Http\Controllers\Api\V1\dinersController@deleteDiner');

    });

    // Actions spécifiques aux Réservation
    $api->group(['prefix' => 'usersdiners'], function ($api){

            $api->get('getAllUsersdiners', '\App\Http\Controllers\Api\V1\UsersdinersController@getUsersdiners');
            $api->get('getOneUsersdiners', '\App\Http\Controllers\Api\V1\UsersdinersController@getOneUsersdiners');
            $api->get('myReservation/{id}', '\App\Http\Controllers\Api\V1\UsersdinersController@myReservation');
            $api->get('myOldReservation/{id}', '\App\Http\Controllers\Api\V1\UsersdinersController@myOldReservation');
            $api->get('getAllUsersdiners/diner/{id}', '\App\Http\Controllers\Api\V1\UsersdinersController@getAllUsersdinersByDiners');
            $api->post('create', '\App\Http\Controllers\Api\V1\UsersdinersController@createUsersdiners');
            $api->post('update', '\App\Http\Controllers\Api\V1\UsersdinersController@updateUsersdiners');
            $api->post('delete', '\App\Http\Controllers\Api\V1\UsersdinersController@deleteUsersdiners');

    });


    $api->group(['prefix' => 'auth'], function ($api){
        $api->get('', '\App\Http\Controllers\Api\V1\dinersController@getDiners');
    });

    // Actions spécifiques aux lieux (restaurant)
    $api->group(["prefix" => 'places'], function ($api){
        $api->get('/getAllPlaces', '\App\Http\Controllers\Api\V1\PlacesController@getPlaces');
        $api->get('/getPlace/{id}', '\App\Http\Controllers\Api\V1\PlacesController@getPlace');
        $api->post('/create', '\App\Http\Controllers\Api\V1\PlacesController@createPlace');
        $api->post('/update', '\App\Http\Controllers\Api\V1\PlacesController@updatePlace');
        $api->post('/delete', '\App\Http\Controllers\Api\V1\PlacesController@deletePlace');
    });

    // Actions spécifiques aux thèmes
    $api->group(["prefix" => 'themes'], function ($api){
        $api->get('getAllThemes', '\App\Http\Controllers\Api\V1\ThemesController@getThemes');
        $api->get('getOneThemes/{id}', '\App\Http\Controllers\Api\V1\ThemesController@getOneTheme');
        $api->post('delete', '\App\Http\Controllers\Api\V1\ThemesController@deleteThemes');
        $api->post('create', '\App\Http\Controllers\Api\V1\ThemesController@createThemes');
        $api->post('update', '\App\Http\Controllers\Api\V1\ThemesController@updateThemes');

    });

    // Actions spécifiques aux thèmes
    $api->group(["prefix" => 'userstypes'], function ($api){
        $api->get('getAllUserstypes', '\App\Http\Controllers\Api\V1\UserstypesController@getUserstypes');
        $api->get('getOneUserstypes/{id}', '\App\Http\Controllers\Api\V1\UserstypesController@getOneUserstypes');
        $api->post('delete', '\App\Http\Controllers\Api\V1\UserstypesController@deleteUserstypes');
        $api->post('create', '\App\Http\Controllers\Api\V1\UserstypesController@createUserstypes');
        $api->post('update', '\App\Http\Controllers\Api\V1\UserstypesController@updateUserstypes');

    });

    $api->group(["prefix" => 'contacts'], function ($api){
        $api->get('/getAllContacts', '\App\Http\Controllers\Api\V1\ContactController@getContacts');
        $api->get('/getOneContact/{id}', '\App\Http\Controllers\Api\V1\ContactController@getOneContact');
        $api->post('/create', '\App\Http\Controllers\Api\V1\ContactController@createContact');
        $api->post('/update', '\App\Http\Controllers\Api\V1\ContactController@updateContact');
        $api->post('/delete', '\App\Http\Controllers\Api\V1\ContactController@deleteContact');

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


