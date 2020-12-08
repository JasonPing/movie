<?php

namespace App\Http\Controllers;

use App\FilmWorldMovies;
use Illuminate\Http\Request;


class FilmWorldMoviesController extends Controller
{



    public function showAllMovies()
    {
        $allMovies = FilmWorldMovies::all();
        return response()->json(['status' => 'success', 'data' => $allMovies]);
    }


    public function showOneMovie($id)
    {
        $movie = FilmWorldMovies::find($id);
        return response()->json(['status' => 'success', 'data' => $movie]);
    }

    public function create(Request $request)
    {

        $this->validate($request, [
            'Name' => 'required|max:100',
            'Description' => 'max:255',
            'ReleaseDate' => 'required|date',
            'Price' => 'required|between:0,99.99',
        ]);

        $movie = new FilmWorldMovies;

        $movie->Name = $request->Name;
        $movie->Genre = $request->Genre;
        $movie->Description = $request->Description;
        $movie->Price = $request->Price;
        $movie->ReleaseDate = $request->ReleaseDate;
        $movie->RunningTime = $request->RunningTime;
        $movie->Director = $request->Director;
        $movie->Cast = $request->Cast;
        $movie->Image = $request->Image;

        $movie->save();

        return response()->json(['status' => 'success', 'msg' => "Movie created!"]);
    }
}
