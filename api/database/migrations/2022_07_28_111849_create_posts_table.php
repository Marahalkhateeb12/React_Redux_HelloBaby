<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            
            $table->unsignedBigInteger('doctor_id');
            $table->string('title')->nullable();
            $table->string('subtitle')->nullable();
            $table->string('main_image')->nullable();
            $table->string('body')->nullable();
            $table->string('date')->nullable();
            $table->string('images_post')->nullable();
            $table->foreign('doctor_id')->on('doctors')->references('id')->onDelete('CASCADE')->onUpdate('CASCADE');
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
        Schema::dropIfExists('posts');
    }
}
