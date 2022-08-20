<?php

namespace App\Http\Controllers;

use App\Models\Doctor;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
  public  function PostsAPI()
  {
    $posts = Doctor::Join('posts', 'posts.doctor_id', '=', 'doctors.id')
      ->get(['*']);

    // $posts = Post::all();
    return $posts;
  }

  public function singlePostsAPI($id)
  {

    $singlePost = Post::Join('doctors', 'doctors.id', '=', 'posts.doctor_id')->find($id);
    return $singlePost;
  }
}
