@extends('master')
@section('content')
<div class="panel-header panel-header-sm">
</div>
<div class="content">
  <div class="row">
    <div class="col-md-12">
      <div class="card">
        <div class="card-header">
          <h4 class="card-title"> Messages</h4>
          <div class="pull-left">
            {{-- <a class="btn btn-success" href="{{ route('message.create') }}"> Add New Message</a> --}}
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
                  Name
                </th>
                <th>
                   Email
                </th>
                <th>
                   Message
                </th>
                <th>
                   Date
                </th>
                
                <th >
                  Action
                </th>
              </thead>
              <tbody>
               @foreach ($messages as $message)
                  
                
                <tr>
                  <td>
                    {{$message->id;}}
                  </td>
                  <td>
                    {{$message->name;}}
                  </td>
                    <td>
                      {{$message->message;}}
                    </td>
                  
                  <td>
                   <address> <a href="mailto:{{$message->email;}}" > {{$message->email;}}</address>
                  </td>
                 <td>
                  {{$message->created_at ;}}
                 </td>
                  <td>
                    <form action=" {{ route('message.destroy',$message->id) }}" method="POST"> 
                      <a class="btn btn-info" href="mailto:{{$message->email;}}">Replay</a>
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