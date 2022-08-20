@extends('master')
@section('content')
<div class="panel-header panel-header-sm">
</div>
<div class="content">
  <div class="row">
    <div class="col-md-12">
      <div class="card">
        <div class="card-header">
          <h4 class="card-title"> News</h4>
          <div class="pull-left">
            <a class="btn btn-success" href="{{ route('post.create') }}"> Add New News</a>
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
                  Doctor Name
                </th>
                <th>
                    Title
                  </th>
                <th >
                  Sub Title
                </th>
                <th >
                 Body
                </th>
                <th>
                    Date
                  </th>
                <th >
                  Action
                </th>
              </thead>
              <tbody>
                @foreach ($posts as $post)
                  
                
                <tr>
                  <td>
                    {{$post->id;}}
                  </td>
                  <td>
                    <img src="  {{asset('upload/'.$post->main_image);}}" width="70px" height="70px" alt="Image">
                   
                  </td> 
                  <td>
                    {{$post->name_doctor;}}
                  </td>
                  <td >
                    {{$post->title;}}
                  </td>
                
                  <td >
                    {{$post->subtitle;}}
                  </td>
                  <td >
                    {{Str::limit($post->body,100)}}
                  </td>
                  <td >
                    {{$post->created_at;}}
                  </td>
                  <td>
                    <form action=" {{ route('post.destroy',$post->id) }}" method="POST"> 
                      <a class="btn btn-info" href="{{ route('post.edit' ,$post->id) }}">Edit</a>
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