<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateComunityPostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('comunity_posts', function (Blueprint $table) {
            $table->id();
              $table->unsignedBigInteger('user_id_ComunityPost');
            $table->string('comment_comunity_posts')->nullable();
            $table->string('subject')->nullable();
              $table->string('state')->nullable();
             $table->string('image_comunity_posts')->nullable();
            $table->foreign('user_id_ComunityPost')->on('users')->references('id')->onDelete('CASCADE')->onUpdate('CASCADE');
           
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('comunity_posts');
    }
}
