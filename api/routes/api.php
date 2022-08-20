<?php

use App\Http\Controllers\AskDoctorController;
use App\Http\Controllers\DoctorController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ComunityPostController;
use App\Http\Controllers\ComunityCommentController;
use App\Http\Controllers\ContactController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\User;
use App\Http\Controllers\UserController;
use App\Models\ComunityComment;
use App\Models\ComunityPost;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('apiposts',[PostController::class , 'PostsAPI']);
Route::get('apiposts/{id}',[PostController::class , 'singlePostsAPI']);

Route::get('apicomment/{id}',[CommentController::class , 'CommentAPI']);
Route::post('addComment',[CommentController::class , 'addComment']);
Route::post('deleteComment/{id}',[CommentController::class , 'deleteComment']);
Route::post('updateComment/{id}',[CommentController::class , 'updateComment']);



Route::get('apiCommunityPost',[ComunityPostController::class , 'CommunityPostAPI']);
Route::get('apiCommunityPost/{id}',[ComunityPostController::class , 'SingleCommentAPI']);
Route::post('addComunityPost',[ComunityPostController::class , 'addComunityPost']);
Route::post('deleteComunityPost/{id}',[ComunityPostController::class , 'deleteComunityPost']);
Route::post('updateComunityPost/{id}',[ComunityPostController::class , 'updateComunityPost']);


Route::get('apiCommunityComment/{id}',[ComunityCommentController::class , 'CommunityCommentAPI']);
Route::post('addComunityComment',[ComunityCommentController::class , 'addComunityComment']);
Route::post('deleteComunityComment/{id}',[ComunityCommentController::class , 'deleteComunityComment']);
Route::post('updateComunityComment/{id}',[ComunityCommentController::class , 'updateComunityComment']);




Route::get('doctors', [DoctorController::class, 'getDoctors']);
Route::get('doctorDetails/{id}', [DoctorController::class, 'getDoctorDetail']);
Route::post('updateDoctorDetails/{id}', [DoctorController::class, 'updateDoctorDetails']);
Route::post('askDoctor', [AskDoctorController::class, 'addAsk']);

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();

// });
Route::get('apicontact',[ContactController::class , 'ContactAPI']);
Route::post('addContact',[ContactController::class , 'addContact']);


//login and register
Route::post('/register', [UserController::class, 'registerAPI']);
Route::post('/login', [UserController::class, 'loginAPI']);


Route::get('get/{id}', [UserController::class, 'getUser']);
Route::post('update/{id}', [UserController::class, 'updateAPI']);


Route::get('/users',function(){
    $users = User::get();
    return response()->json($users);
});

// Route::get('apiuser/{id}',[ComunityPostController::class , 'addUserAPI']);



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
