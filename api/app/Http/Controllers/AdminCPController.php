<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\ComunityPost;
use App\Models\User;
use Illuminate\Http\Request;

class AdminCPController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $posts = User::Join('comunity_posts', 'comunity_posts.user_id_ComunityPost', '=', 'users.id')
        ->get(['*']);
        return view('comunityPosts', compact('posts'))
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
       $post= ComunityPost::find($id);
       return view('editComunityPosts',compact('post'));
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
             'subject' => 'required',
             'body' => 'required',
             'state' => 'required'
         ]);
      
 
         ComunityPost::where('id',$id)->update([
             'subject'=>$request->subject,
             'comment_comunity_posts'=>  $request->body,
            'state'=> $request->state
         ]);
         
          return redirect()->route('comunityPost.index')->with('success','Post updateded successfully.');
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
