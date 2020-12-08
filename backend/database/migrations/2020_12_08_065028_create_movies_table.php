<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMoviesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cinema_world_movies', function (Blueprint $table) {
            $table->id();
            $table->string('Name');
            $table->string('Genre')->default('')->nullable(true);
            $table->string('Description')->default('')->nullable(true);
            $table->float('Price');
            $table->date('ReleaseDate');
            $table->integer('RunningTime')->default(0);
            $table->string('Director')->default('')->nullable(true);
            $table->string('Cast')->default('')->nullable(true);
            $table->string('Image')->default('')->nullable(true);
            $table->timestamps();
        });

        // Initial Movie data
        DB::table('cinema_world_movies')->insert(
            array(
                'Name' => 'The War with Grandpa',
                'Genre' => 'Mild themes and coarse language',
                'Description' => 'Peter is thrilled that Grandpa is coming to live with his family. That is, until Grandpa moves into Peter\'s room, 
                    forcing him upstairs into the creepy attic. ',
                "Price" => 10.2,
                'ReleaseDate' => '2020-12-30',
                'RunningTime' => 98,
                'Director' => 'Tim Hill',
                'Cast' => 'Uma Thurman, Rob Riggle',
                'Image' => 'https://cdn.eventcinemas.com.au/cdn/resources/movies/15246/images/largeposter.jpg'
            )
        );

        Schema::create('film_world_movies', function (Blueprint $table) {
            $table->id();
            $table->string('Name');
            $table->string('Genre')->default('')->nullable(true);
            $table->string('Description')->default('')->nullable(true);
            $table->float('Price');
            $table->date('ReleaseDate');
            $table->integer('RunningTime')->default(0);
            $table->string('Director')->default('')->nullable(true);
            $table->string('Cast')->default('')->nullable(true);
            $table->string('Image')->default('')->nullable(true);
            $table->timestamps();
        });


        DB::table('film_world_movies')->insert(
            array(
                'Name' => 'Happiest Season',
                'Genre' => 'Occasional coarse language',
                'Description' => 'Meeting your girlfriend’s family for the first time can be tough. 
                    Planning to propose at her family’s annual Christmas dinner - until you realize that they don’t even know she’s gay - is even harder. ',
                "Price" => 13.00,
                'ReleaseDate' => '2020-11-26',
                'RunningTime' => 102,
                'Director' => 'Clea DuVall',
                'Cast' => 'Kristen Stewart, Mackenzie Davis',
                'Image' => 'https://cdn.eventcinemas.com.au/cdn/resources/movies/15202/images/largeposter.jpg'
            )
        );
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cinema_world_movies');
        Schema::dropIfExists('film_world_movies');
    }
}
