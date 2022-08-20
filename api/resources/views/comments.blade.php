@extends('master')
@section('content')
<div class="panel-header panel-header-sm">
</div>
<div class="content">
  <div class="row">
    <div class="col-md-12">
      <div class="card">
        <div class="card-header">
          <h4 class="card-title"> Comments</h4>
          <div class="pull-left">
            {{-- <a class="btn btn-success" href="{{ route('comment.create') }}"> Add New User</a> --}}
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
                  User Name
                </th>
                <th>
                  Comment
                </th>
                <th >
                  Post Title
                </th>
                <th >
                 Date
                </th>
                <th>

 State                </th>
                <th >
                  Action
                </th>
              </thead>
              <tbody>
                @foreach ($comments as $comment)
                  
                
                <tr>
                  <td>
                    {{$comment->id;}}
                  </td>
                  <td>
                    {{$comment->name}}
                   
                  </td> 
                  <td>
                    {{$comment->comment;}}
                  </td>
                  <td >
                    {{$comment->title;}}
                  </td>
                
                  <td >
                    {{$comment->created_at;}}
                  </td>
                  <td >
                    @if( $comment->state==0)
                  <p style="color: red" >Pending</p>
                    
                   @else 
                   <p style="color: green" >Accepted</p>
                   @endif
                  </td>
                  <td>
                    <form action=" {{ route('comment.destroy',$comment->id) }}" method="POST"> 
                        <a class="btn btn-info" href="{{ route('comment.edit' ,$comment->id) }}">Edit</a>
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