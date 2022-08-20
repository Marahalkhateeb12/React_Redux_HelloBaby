<?php

namespace App\Http\Controllers;

use App\Models\ComunityComment;
use Illuminate\Http\Request;

class ComunityCommentController extends Controller
{
      public  function CommunityCommentAPI($id)
    {
   


        $com = ComunityComment::Join('users', 'comunity_comments.user_id_ComunityComment', '=', 'users.id')
        ->Join('comunity_posts','comunity_comments.post_id_ComunityComment' ,'=','comunity_posts.id')->where('comunity_comments.post_id_ComunityComment',$id)->select('comunity_comments.*', 'users.name', 'users.image')->get();
        return $com;
    }





    public function addComunityComment(Request $request)
    {
        
   $comment = new ComunityComment();
   $comment->comment_comunity_comments = $request->get('comment_comunity_comments');    
   $comment->date = $request->get('date');  
   $comment->state = false;     
   $comment->user_id_ComunityComment = $request->get('user_id_ComunityComment');      
   $comment->post_id_ComunityComment = $request->get('post_id_ComunityComment');       
   $comment->save();      
  return response()->json($comment);
   


    }


//       public function updateComment(Request $request,$id )
//     {


//         $comment = Comment::find($id);
//         $comment->comment = $request->comment;
//         $comment->date = $request->date;
//         // $comment->create_at->format('d/m/Y') ;
//         $comment->user_id_comment = $request->user_id_comment;
//         $comment->post_id_comment = $request->post_id_comment;


//         $comment->update();

// return $comment;
//     }



//     public function deleteComment($id)
//     {
//         $comment = Comment::find($id);
//         $delete = $comment;
//         $comment->delete();
//         return $delete;
        
//     }
}
