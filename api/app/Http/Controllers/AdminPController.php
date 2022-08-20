<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Doctor;
use App\Models\Post;
use Illuminate\Http\Request;

class AdminPController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $posts = Doctor::Join('posts', 'posts.doctor_id', '=', 'doctors.id')
        ->get(['*']);
        return view('posts', compact('posts'))
            ->with(request()->input('page'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $doctors=Doctor::all();
        return view('addPost',compact('doctors'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
         //validate the input 
         $request->validate([
            'title' => 'required',
            'subtitle' => 'required',
            'doctor' => 'required',
            'body' => 'required',
            'image' => 'required|image|mimes:jpg,png,jpeg,gif,svg,jfif|max:2048'
           
        ]);


        $post = new Post();
   
        $post->title = $request->input('title');
        $post->subtitle = $request->input('subtitle');
        $post->doctor_id = $request->input('doctor');
        $post->body = $request->input('body');
      
        if ($request->hasfile('image')) {
            $file = $request->file('image');
            $extention = $file->getClientOriginalExtension();
            $filename = time() . '.' . $extention;
            $file->move('upload/', $filename);
            $post->main_image = $filename;
        }

      
        $post->save();

        return redirect()->route('post.index')->with('success', 'News added successfully.');
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
        $post = Doctor::Join('posts', 'posts.doctor_id', '=', 'doctors.id')->where('posts.id', $id)->first();
        $doctors=Doctor::all();
        return view('editPost',compact('post','doctors'));
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
            'title' => 'required',
            'subtitle' => 'required',
            'doctor' => 'required',
            'body' => 'required',
            'image' => 'required|image|mimes:jpg,png,jpeg,gif,svg,jfif|max:2048'
        ]);
        $post = new Post();
        if ($request->hasfile('image')) {
            $file = $request->file('image');
            $extention = $file->getClientOriginalExtension();
            $filename = time() . '.' . $extention;
            $file->move('upload/', $filename);
            $post->main_image = $filename;
        }

        Post::where('id',$id)->update([
            'title'=>$request->title,
            'subtitle'=>$request->subtitle,
            'doctor_id'=>  $request->doctor,
            'body'=>$request->body,
           'main_image'=>$post->main_image
        ]);
        
         return redirect()->route('post.index')->with('success','News updateded successfully.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $delete = Post::find($id);
        $delete->delete();
        return redirect()->route('post.index')
                        ->with('success','News deleted successfully');
    }
}
