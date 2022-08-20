@extends('master')
@section('content')
<div class="panel-header panel-header-sm">
</div>
<div class="content" style="padding-left: 90px; width: 1500px">
  <div class="row">
    <div class="col-md-8" >
      <div class="card">
        <div class="card-header">
          <h5 class="title">Add Doctor</h5>
        </div>
        
        <div class="card-body" >
            @if ($errors->any())
    <div class="alert alert-danger">
        <strong>Whoops!</strong> There were some problems with your input.<br><br>
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif

          <form action="{{ route('doctor.store') }}" method="POST" enctype="multipart/form-data">
            @csrf
            <div class="row">
              <div class="col-md-6 pr-1">
                <div class="form-group">
                  <label> Name</label>
                  <input type="text" class="form-control" placeholder=" name" name='fname'>
                </div>
              </div><br>
            </div>
            <div class="row">
                <div class="col-md-6 pr-1">
                  <div class="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control" placeholder="example@mail.com" name='email'>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 pr-1">
                  <div class="form-group">
                    <label>Clinic Mobile </label>
                    <input type="number" class="form-control" placeholder="0777777777" name='clinic_mobile'>
                  </div>
                </div>
                <div class="col-md-6 pr-1">
                    <div class="form-group">
                      <label> Clinic Address</label>
                      <input type="text" class="form-control" placeholder=" " name='clinic_address'>
                    </div>
                  </div><br>
                  <div class="col-md-6 pr-1">
                    <div class="form-group">
                      <label> Expereince</label>
                      <input type="text" class="form-control" placeholder=" experience" name='experience'>
                    </div>
                  </div><br>
                  <div class="col-md-6 pr-1">
                    <div class="form-group">
                      <label> Specialization</label>
                      <input type="text" class="form-control" placeholder=" specialization" name='specialization'>
                    </div>
                  </div><br>
                  <div class="col-md-6 pr-1">
                    <div class="form-group">
                      <label>About</label>
                      <input type="text" class="form-control" placeholder=" about " name='description'>
                    </div>
                  </div><br>
               
        </div>
        <div class="row">
            <div class="col-md-6 pr-1">
              <div class="form-group">
                <label>Image</label>
                <input type="file" class="form-control"  name='image'>
              </div>
            </div>
        <div class="col-xs-12 col-sm-12 col-md-12 text-left" style="padding-left: 40px">
            <button type="submit" class="btn btn-primary">Submit</button>
    </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</div>

@endsection