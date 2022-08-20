<?php

use App\Http\Controllers\AdminCCController;
use App\Http\Controllers\AdminCController;
use App\Http\Controllers\AdminCPController;
use App\Http\Controllers\AdminDController;
use App\Http\Controllers\AdminLoginController;
use App\Http\Controllers\AdminMController;
use App\Http\Controllers\AdminPController;
use App\Http\Controllers\AdminUController;
use App\Http\Controllers\DoctorController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('dashboard');
});
 Route::resource('doctor', AdminDController::class);
 Route::resource('user', AdminUController::class);
 Route::resource('post', AdminPController::class);
 Route::resource('message', AdminMController::class);
 Route::resource('comment', AdminCController::class);
 Route::resource('login', AdminLoginController::class);
 Route::resource('comunityPost', AdminCPController::class);
 
 //Route::resource('comunityComment', AdminCCController::class);
//Route::get('/', [UserController::class, 'registerAPI']);