<?php

use App\Http\Controllers\CinemaWorldMoviesController;
use App\Http\Controllers\FilmWorldMoviesController;
use Illuminate\Http\Request;

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->group(['prefix' => 'api/{provider}', 'middleware' => 'auth'], function () use ($router) {


    $router->get('movies', function ($provider) {
        if ($provider == 'cinemaworld') {
            $controller = new CinemaWorldMoviesController;
        }

        if ($provider == 'filmworld') {
            $controller = new FilmWorldMoviesController;
        }
        return $controller->showAllMovies();
    });


    $router->get('movie/{id}', function ($provider, $id) {
        if ($provider == 'cinemaworld') {
            $controller = new CinemaWorldMoviesController;
        }

        if ($provider == 'filmworld') {
            $controller = new FilmWorldMoviesController;
        }
        return $controller->showOneMovie($id);
    });

    $router->post('movie', function ($provider, Request $request) {
        if ($provider == 'cinemaworld') {
            $controller = new CinemaWorldMoviesController;
        }

        if ($provider == 'filmworld') {
            $controller = new FilmWorldMoviesController;
        }
        return $controller->create($request);
    });
});
