@extends('master')
@section('content')
<div class="panel-header panel-header-sm">
</div>
<div class="content" style="padding-left: 90px; width: 1500px">
  <div class="row">
    <div class="col-md-8" >
      <div class="card">
        <div class="card-header">
          <h5 class="title">Edit Post</h5>
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

          <form action="{{ route('comunityPost.update',$post->id) }}" method="POST" enctype="multipart/form-data">
            @csrf
            @method('PUT')
              {{-- <div class="row">
                <div class="col-md-6 pr-1">
                  <div class="form-group">
                    <label>User Name</label>
                    <input type="text" class="form-control" value='{{$comment->name}}' name='name'>
                  </div>
                </div>
              </div>--}}
              <div class="row">
                <div class="col-md-6 pr-1">
                  <div class="form-group">
                    <label>Post Subject</label>
                    <input type="text" class="form-control" value='{{$post->subject}}' name='subject'>
                  </div>
                </div>
              </div> 
              <div class="row">
                <div class="col-md-6 pr-1">
                  <div class="form-group">
                    <label>Post </label>
                    <textarea class="form-control" style="height:100px" name="body" placeholder=".....">{{$post->comment_comunity_posts}}</textarea>
                  </div>
                </div>
              </div>
              {{-- <div class="row">
                <div class="col-md-6 pr-1">
                  <div class="form-group">
                    <label>Doctor</label>
                    <select class="form-select" aria-label="Default select example" name="doctor" value='{{$post->name_doctor}}'>
                        <option selected>Choose Doctor Name..</option>
                        @foreach ($doctors as $doctor)
                        <option value="{{$doctor->id}}">{{$doctor->name_doctor}}</option>
                       @endforeach
                      </select>
                  </div>
                </div>
              </div> --}}
              <div class="row">
                <div class="col-md-6 pr-1">
                  <div class="form-group">
                    <label>Status   </label>
              <select class="form-select"  name="state">
                <option value="0">Piending</option>
                <option value="1">Accept</option>
               
              </select>
                  </div>
                </div>
              </div>
        <div class="row">
            {{-- <div class="col-md-6 pr-1">
              <div class="form-group">
                <label>Image</label>
                <input type="file" class="form-control"  name='image'>
              </div>
            </div> --}}
        <div class="col-xs-12 col-sm-12 col-md-12 text-left" style="padding-left: 40px">
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
       
        </div>
      </div>
    </div>
  </div>
    
  <form>
  </div>
  </div>

@endsection