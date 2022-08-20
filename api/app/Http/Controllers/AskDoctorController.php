<?php

namespace App\Http\Controllers;

use App\Models\AskDoctor;
use Illuminate\Http\Request;

class AskDoctorController extends Controller
{

    public function addAsk(Request $request)
    {

        $ask = new AskDoctor();
        $ask->user_id_ask = $request->user_id_ask;
        $ask->doctor_id_ask = $request->doctor_id_ask;
        $ask->question = $request->question;

        $ask->save();
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
    //  * @param  \App\Models\AskDoctor  $askDoctor
    //  * @return \Illuminate\Http\Response
    //  */
    // public function show(AskDoctor $askDoctor)
    // {
    //     //
    // }

    // /**
    //  * Show the form for editing the specified resource.
    //  *
    //  * @param  \App\Models\AskDoctor  $askDoctor
    //  * @return \Illuminate\Http\Response
    //  */
    // public function edit(AskDoctor $askDoctor)
    // {
    //     //
    // }

    // /**
    //  * Update the specified resource in storage.
    //  *
    //  * @param  \Illuminate\Http\Request  $request
    //  * @param  \App\Models\AskDoctor  $askDoctor
    //  * @return \Illuminate\Http\Response
    //  */
    // public function update(Request $request, AskDoctor $askDoctor)
    // {
    //     //
    // }

    // /**
    //  * Remove the specified resource from storage.
    //  *
    //  * @param  \App\Models\AskDoctor  $askDoctor
    //  * @return \Illuminate\Http\Response
    //  */
    // public function destroy(AskDoctor $askDoctor)
    // {
    //     //
    // }
}
