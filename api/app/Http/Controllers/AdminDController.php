<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Doctor;
use Illuminate\Http\Request;

class AdminDController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $doctors = Doctor::latest()->paginate(20);
        return view('doctors', compact('doctors'))
            ->with(request()->input('page'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('addDoctor');
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
            'fname' => 'required',
            'email' => 'required',
            'clinic_address' => 'required',
            'clinic_mobile' => 'required|regex:/[07]{2,3}[7-9]{1,2}[0-9]{7,8}/|min:10',
            'image' => 'required|image|mimes:jpg,png,jpeg,gif,svg,jfif|max:2048',
            'experience' => 'required',
            'specialization' => 'required',
            'description' => 'required',

        ]);


        $doctor = new Doctor();



        $doctor->name_doctor = $request->input('fname');
        $doctor->email_doctor = $request->input('email');
        $doctor->description = $request->input('description');
        $doctor->clinic_mobile = $request->input('clinic_mobile');
        $doctor->clinic_address = $request->input('clinic_address');
        $doctor->description = $request->input('description');
        $doctor->experience = $request->input('experience');

        if ($request->hasfile('image')) {
            $file = $request->file('image');
            $extention = $file->getClientOriginalExtension();
            $filename = time() . '.' . $extention;
            $file->move('upload/', $filename);
            $doctor->image_doctor = $filename;
        }



        $doctor->save();



        return redirect()->route('doctor.index')->with('success', 'Doctor added successfully.');
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
        $doctor = Doctor::where('id', $id)->first();
        return view('editDoctor', compact('doctor'));
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
            'name' => 'required',
            'email' => 'required',
            'clinic_address' => 'required',
            'clinic_mobile' => 'required|regex:/[07]{2,3}[7-9]{1,2}[0-9]{7,8}/|min:10',
            'image' => 'required|image|mimes:jpg,png,jpeg,gif,svg,jfif|max:2048',
            'experience' => 'required',
            'specialization' => 'required',
            'description' => 'required',
        ]);;
        $doctor = new Doctor();
        if ($request->hasfile('image')) {
            $file = $request->file('image');
            $extention = $file->getClientOriginalExtension();
            $filename = time() . '.' . $extention;
            $file->move('upload/', $filename);
            $doctor->image_doctor = $filename;
        }

        Doctor::where('id', $id)->update([
            'name_doctor' => $request->name,
            'email_doctor' => $request->email,
            'clinic_address' => $request->clinic_address,
            'clinic_mobile' => $request->clinic_mobile,
            'experience' => $request->experience,
            'specialization' => $request->specialization,
            'description' => $request->description,
            'image_doctor' => $doctor->image_doctor
        ]);



        return redirect()->route('doctor.index')
            ->with('success', 'Doctor updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $delete = Doctor::find($id);
        $delete->delete();
        return redirect()->route('doctor.index')
            ->with('success', 'Doctor deleted successfully');
    }
}
