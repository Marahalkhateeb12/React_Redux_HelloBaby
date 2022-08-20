<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\ComunityComment;
use App\Models\User;
use Illuminate\Http\Request;

class AdminCCController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $comments = User::Join('comunity_comments', 'comunity_comments.user_id_ComunityComment', '=', 'users.id')
        ->Join('comunity_posts', 'comunity_posts.id', '=', 'comunity_comments.post_id_ComunityComment')
        ->get(['users.name', 'comunity_posts.subject', 'comunity_comments.comment_comunity_comments', 'comunity_comments.id', 'comunity_comments.created_at','comunity_comments.state']);


        return view('comunityComments', compact('comments'))
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
        $comment= ComunityComment::find($id);
       return view('editCommunityCommentt',compact('comment'));
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
            
            'body' => 'required',
            'state' => 'required'
        ]);
     

        ComunityComment::where('id',$id)->update([
            
            'comment_comunity_comments'=>  $request->body,
           'state'=> $request->state
        ]);
        
         return redirect()->route('comunityComment.index')->with('success','Comment updateded successfully.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
