@extends('master')
@section('content')
<div class="panel-header panel-header-sm">
</div>
<div class="content" style="padding-left: 90px; width: 1500px">
  <div class="row">
    <div class="col-md-8" >
      <div class="card">
        <div class="card-header">
          <h5 class="title">Add Post</h5>
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

          <form action="{{ route('post.store') }}" method="POST" enctype="multipart/form-data">
            @csrf
           
              <div class="row">
                <div class="col-md-6 pr-1">
                  <div class="form-group">
                    <label>Post Title</label>
                    <input type="text" class="form-control" placeholder="title" name='title'>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 pr-1">
                  <div class="form-group">
                    <label>Sub Title</label>
                    <input type="text" class="form-control" placeholder="sub_title" name='subtitle'>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 pr-1">
                  <div class="form-group">
                    <label>Body</label>
                    <textarea class="form-control" style="height:100px" name="body" placeholder="....."></textarea>
                    {{-- <input type="text" class="form-control" placeholder="body" name='body'> --}}
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 pr-1">
                  <div class="form-group">
                    <label>Doctor  </label>
                    <select class="form-select" aria-label="Default select example" name="doctor">
                        <option selected>Choose Doctor Name..</option>
                        @foreach ($doctors as $doctor)
                        <option value="{{$doctor->id}}">{{$doctor->name_doctor}}</option>
                       @endforeach
                      </select>
                  </div>
                </div>
              </div>
              {{-- <div class="row">
                <div class="col-md-6 pr-1">
                  <div class="form-group">
                    <label>Status   </label>
              <select class="form-select" aria-label="Default select example" name="status">
                <option value="1">Accept</option>
                <option value="0">Reject</option>
              </select>
                  </div>
                </div>
              </div> --}}
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

@endsection