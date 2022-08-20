<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Comment;
use App\Models\User;
use Illuminate\Http\Request;

class AdminCController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $comments = User::Join('comments', 'comments.user_id_comment', '=', 'users.id')
            ->Join('posts', 'posts.id', '=', 'comments.post_id_comment')
            ->get(['users.name', 'posts.title', 'comments.comment', 'comments.id', 'comments.created_at','comments.state']);


        // $comments = User::latest()->paginate(20);
        return view('comments', compact('comments'))
            ->with(request()->input('page'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        // $comment = User::Join('comments', 'comments.user_id_comment', '=', 'users.id')
        //     ->Join('posts', 'posts.id', '=', 'comments.post_id_comment') ->where('comments.id',$id)->first()
        //    ;
        $comment=Comment::find($id);
        return view('editComment', compact('comment'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        
        $request->validate([
           // 'title' => 'required',
            'body' => 'required',
            'state' => 'required'
        ]);
     

        Comment::where('id',$id)->update([
            //'title'=>$request->title,
            'comment'=>  $request->body,
           'state'=> $request->state
        ]);
        
         return redirect()->route('comment.index')->with('success','Comment updateded successfully.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $delete = Comment::find($id);
        $delete->delete();
        return redirect()->route('comment.index')
            ->with('success', 'Comment deleted successfully');
    }
}
