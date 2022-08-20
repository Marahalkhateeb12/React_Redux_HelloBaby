<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAskDoctorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ask_doctors', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id_ask');
            $table->unsignedBigInteger('doctor_id_ask');
            $table->string('question')->nullable();
            $table->foreign('user_id_ask')->on('users')->references('id')->onDelete('CASCADE')->onUpdate('CASCADE');
            $table->foreign('doctor_id_ask')->on('doctors')->references('id')->onDelete('CASCADE')->onUpdate('CASCADE');
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
        Schema::dropIfExists('ask_doctors');
    }
}
