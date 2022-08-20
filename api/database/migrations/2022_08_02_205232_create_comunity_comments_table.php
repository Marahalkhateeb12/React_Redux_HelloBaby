<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateComunityCommentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('comunity_comments', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id_ComunityComment');
            $table->unsignedBigInteger('post_id_ComunityComment');
              $table->string('state')->nullable();
            $table->string('comment_comunity_comments')->nullable();
            $table->string('date')->nullable();
            $table->foreign('user_id_ComunityComment')->on('users')->references('id')->onDelete('CASCADE')->onUpdate('CASCADE');
            $table->foreign('post_id_ComunityComment')->on('comunity_posts')->references('id')->onDelete('CASCADE')->onUpdate('CASCADE');
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
        Schema::dropIfExists('comunity_comments');
    }
}
