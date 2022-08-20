@extends('master')
@section('content')
<div class="panel-header panel-header-sm">
</div>
<div class="content">
  <div class="row">
    <div class="col-md-12">
      <div class="card">
        <div class="card-header">
          <h4 class="card-title"> Doctors</h4>
          <div class="pull-left">
            <a class="btn btn-success" href="{{ route('doctor.create') }}"> Add New Doctor</a>
        </div>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            @if ($message = Session::get('success'))
            <div class="alert alert-success">
                <p>{{ $message }}</p>
            </div>
        @endif
            <table class="table">
              <thead class=" text-primary">
                <th>
                  ID
                </th>
                <th>
                  Image
                </th>
                <th>
                  Name
                </th>
                <th >
                  Email
                </th>
                <th >
                  Clinic Mobile 
                </th>
                <th >
                    Clinic Address 
                  </th>
                  <th >
                   Expereince 
                  </th>
                  <th >
                    Specialization 
                  </th>
                  <th >
                    About 
                  </th>
                <th >
                  Action
                </th>
              </thead>
              <tbody>
                @foreach ($doctors as $doctor)
                  
                
                <tr>
                  <td>
                    {{$doctor->id;}}
                  </td>
                  <td>
                    <img src="  {{asset('upload/'.$doctor->image_doctor);}}" width="70px" height="70px" alt="Image">
                   
                  </td> 
                  <td>
                    {{$doctor->name_doctor;}}
                  </td>
                  <td >
                    {{$doctor->email_doctor;}}
                  </td>
                
                  <td >
                    {{$doctor->clinic_mobile;}}
                  </td>
                  <td >
                    {{$doctor->clinic_address;}}
                  </td>
                  <td >
                    {{$doctor->experience;}}
                  </td>
                  <td >
                    {{$doctor->specialization;}}
                  </td>
                  <td >
                    {{Str::limit($doctor->description,100);}}
                  </td>
                  <td>
                    <form action=" {{ route('doctor.destroy',$doctor->id) }}" method="POST"> 
                      <a class="btn btn-info" href="{{ route('doctor.edit' ,$doctor->id) }}">Edit</a>
                      @csrf
                      @method('DELETE')
                      
                      <button type="submit" class="btn btn-danger">Delete</button>
                  </form>
                  </td>
                </tr>
                @endforeach
                
              </tbody>

            </table>
           
          </div>
        </div>
      </div>
    </div>
   
  </div>
</div>


      @endsection