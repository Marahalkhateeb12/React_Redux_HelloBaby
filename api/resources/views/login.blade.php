
<!DOCTYPE html>
<html lang="en">

<head>
 
  <title>
    Admin Dashboard
  </title>
 

<style>
    @import url("https://fonts.googleapis.com/css?family=Lato:400,700");
#bg {
  background-image: url('img/background.jpg');
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  filter: blur(5px);
}

body {
  font-family: 'Lato', sans-serif;
  color: #4A4A4A;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  overflow: hidden;
  margin: 0;
  padding: 0;
}

form {
  width: 350px;
  position: relative;
}
form .form-field::before {
  font-size: 20px;
  position: absolute;
  left: 15px;
  top: 17px;
  color: #888888;
  content: " ";
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
}
form .form-field:nth-child(3)::before {
  background-image: url(https://th.bing.com/th/id/OIP.qQy9SbRfiS7Mz-CJF6uwsQHaHa?pid=ImgDet&rs=1);
  width: 20px;
  height: 20px;
  top: 15px;
}
form .form-field:nth-child(4)::before {
  background-image: url(https://th.bing.com/th/id/R.b606d0285fb5b0be5770d0117653be2c?rik=oHKfigT5N7vlaA&pid=ImgRaw&r=0);
  width: 16px;
  height: 16px;
}
form .form-field {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 1rem;
  position: relative;
}
form input {
  font-family: inherit;
  width: 100%;
  outline: none;
  background-color: #fff;
  border-radius: 4px;
  border: none;
  display: block;
  padding: 0.9rem 0.7rem;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  font-size: 17px;
  color: #4A4A4A;
  text-indent: 40px;
}
form .btn {
  outline: none;
  border: none;
  cursor: pointer;
  display: inline-block;
  margin: 0 auto;
  padding: 0.9rem 2.5rem;
  text-align: center;
  background-color: #ea512e;
  color: #fff;
  border-radius: 4px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  font-size: 17px;
}
    </style>
</head>
<div id="bg" style=" background: linear-gradient(to right, #0c2646 0%, #204065 60%, #2a5788 100%);
"></div>
<body class="hold-transition login-page">
    {{-- <div style="color: #ea512e; text-align: center">
        <h1>Admin Login</h1>
    </div> --}}
      <div class="login-box">
            

             <div class="card">
                    @if ($message = Session::get('error'))
                    <div class="alert alert-danger alert-block">
                           <button type="button" class="close" data-dismiss="alert">×</button>
                           <strong>{{ $message }}</strong>
                    </div>
                    @endif
                    <div class="card-body login-card-body" style="text-align: center;">

                           

                           <form action="" method="post">
                                  {{ csrf_field() }}
                                  <div class="login-logo">
                                    <h1  style="color: white; text-align: center">Admin Login</h1>
                                 </div>
                                  <div class="form-field">
                                         <input type="email" class="form-control" name="email" id="email" placeholder="Email" required="">
                                         <div class="input-group-append">
                                                <div class="input-group-text">
                                                       <span class="fas fa-envelope"></span>
                                                </div>
                                         </div>
                                  </div>
                                  <div class="form-field">
                                         <input type="password" class="form-control" name="password" id="password" placeholder="Password" required="">
                                         <div class="input-group-append">
                                                <div class="input-group-text">
                                                       <span class="fas fa-lock"></span>
                                                </div>
                                         </div>
                                  </div>
                                  <div class="row">

                                         <!-- /.col -->
                                         <div class="form-field">
                                                <button type="submit"  class="btn btn-primary btn-block" style="margin-left: 109px;">Log In</button>
                                         </div>
                                         <!-- /.col -->
                                  </div>
                           </form>

                    </div>
                    <!-- /.login-card-body -->
             </div>
      </div>
      <!-- /.login-box -->

    

</body