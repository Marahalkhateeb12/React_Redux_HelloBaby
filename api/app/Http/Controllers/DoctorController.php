<?php

namespace App\Http\Controllers;

use App\Models\AskDoctor;
use App\Models\Doctor;
use Illuminate\Http\Request;

class DoctorController extends Controller
{

    public  function getDoctors()
    {
        $doctors = Doctor::all();
        return $doctors;
    }


    public  function getDoctorDetail($id)
    {
        $doctor = Doctor::find($id);

        return $doctor;
    }

    public function updateDoctorDetails(Request $request, $id)
    {


        $doctor = Doctor::find($id);
        $doctor->name = $request->name;
        $doctor->email = $request->email;
        $doctor->image = $request->image;
        $doctor->clinic_address = $request->clinic_address;
        $doctor->clinic_mobile = $request->clinic_mobile;
        $doctor->experience = $request->experience;
        $doctor->specialization = $request->specialization;
        $doctor->description = $request->description;


        $doctor->save();
    }





    // /**
    //  * Display a listing of the resource.
    //  *
    //  * @return \Illuminate\Http\Response
    //  */
    // public function index()
    // {
    //     //
    // }

    // /**
    //  * Show the form for creating a new resource.
    //  *
    //  * @return \Illuminate\Http\Response
    //  */
    // public function create()
    // {
    //     //
    // }

    // /**
    //  * Store a newly created resource in storage.
    //  *
    //  * @param  \Illuminate\Http\Request  $request
    //  * @return \Illuminate\Http\Response
    //  */
    // public function store(Request $request)
    // {
    //     //
    // }

    // /**
    //  * Display the specified resource.
    //  *
    //  * @param  \App\Models\Doctor  $doctor
    //  * @return \Illuminate\Http\Response
    //  */
    // public function show(Doctor $doctor)
    // {
    //     //
    // }

    // /**
    //  * Show the form for editing the specified resource.
    //  *
    //  * @param  \App\Models\Doctor  $doctor
    //  * @return \Illuminate\Http\Response
    //  */
    // public function edit(Doctor $doctor)
    // {
    //     //
    // }

    // /**
    //  * Update the specified resource in storage.
    //  *
    //  * @param  \Illuminate\Http\Request  $request
    //  * @param  \App\Models\Doctor  $doctor
    //  * @return \Illuminate\Http\Response
    //  */
    // public function update(Request $request, Doctor $doctor)
    // {
    //     //
    // }

    // /**
    //  * Remove the specified resource from storage.
    //  *
    //  * @param  \App\Models\Doctor  $doctor
    //  * @return \Illuminate\Http\Response
    //  */
    // public function destroy(Doctor $doctor)
    // {
    //     //
    // }
}
