<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\Comment;
use App\Models\User;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public  function CommentAPI($id)
    {
        // $com = Comment::select('comments.*' , 'posts.*')->join('users', 'comments.user_id_comment', '=', 'users.id')
        // ->Join('posts','comments.post_id_comment' ,'=','posts.id')->where('comments.user_id_comment',1)
        // ->get(['*']);


        $com = Comment::Join('users', 'comments.user_id_comment', '=', 'users.id')
            ->Join('posts', 'comments.post_id_comment', '=', 'posts.id')->where('comments.post_id_comment', $id)->select('comments.*', 'users.name', 'users.image')->get();
        return $com;
    }




    public function addComment(Request $request)
    {

        $comment = new Comment();
        $comment->comment = $request->get('comment');    
         $comment->date = $request->get('date');    
            $comment->state = false;   
             $comment->user_id_comment = $request->get('user_id_comment');      
                $comment->post_id_comment = $request->get('post_id_comment');       
                  $comment->save();      
                     return response()->json($comment);
   


    }


    public function updateComment(Request $request, $id)
    {


        $comment = Comment::find($id);
        $comment->comment = $request->comment;
        $comment->date = $request->date;
        // $comment->create_at->format('d/m/Y') ;
        $comment->user_id_comment = $request->user_id_comment;
        $comment->post_id_comment = $request->post_id_comment;


        $comment->update();

        return $comment;
    }



    public function deleteComment($id)
    {
        $comment = Comment::find($id);
        $delete = $comment;
        $comment->delete();
        return $delete;
    }
}
