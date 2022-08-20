import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../redux/userSlice";
import { addUser } from "../../redux/userLoginSlice";
import axios from "axios";
import "./style.css";

import { SignInWithGoogle, SignInWithFacebook } from "../firebase/config";

const Sign_up = () => {
  const [userData, setUser] = useState({ name: "", email: "", password: "" });
  const [goData, setgo] = useState({});

  // setUser({...userData, name : });
  // setUser({...userData, email : });
  // setUser({...userData, password : });
  const [conferm, setconferm] = useState("");

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [conferm2, setconferm2] = useState("");

  const [all, setall] = useState("");
  const [done, setdone] = useState(false);
  const [done2, setdone2] = useState(false);
  const [done3, setdone3] = useState(false);
  const [done4, setdone4] = useState(false);

  let navigate = useNavigate();
  const user = useSelector((state) => state.user.isLogged);
  const dispatch = useDispatch();

  // /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/

  const passPattern = /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/;
  const namePattern = /(^[a-zA-Z][a-zA-Z\s]{2,20}[a-zA-Z]$)/;
  const emailPattern =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  //console.log(userData.name);
  //console.log(namePattern.test(userData.name));

  async function handelSubmet(e) {
    e.preventDefault();
    setname("");
    setemail("");
    setpass("");
    setconferm2("");
    setall("");
    setdone(false);
    setdone2(false);
    setdone3(false);
    setdone4(false);

    //console.log(namePattern.test(userData.name));

    if (
      userData.name != "" &&
      userData.email != "" &&
      userData.password != "" &&
      conferm != ""
    ) {
      if (namePattern.test(userData.name)) {
        setdone(true);
      } else {
        setdone(false);
        setname(
          <h6 style={{ color: "red", textAlign: "center" }}>
            * just use liters (a-z)&&(A-Z) <br></br>*name must be at least 3
            liters{" "}
          </h6>
        );
      }

      if (emailPattern.test(userData.email)) {
        setdone2(true);
      } else {
        setdone2(false);
        setemail(
          <h6 style={{ color: "red", textAlign: "center" }}>
            * Enter correct email
          </h6>
        );
      }

      if (passPattern.test(userData.password)) {
        setdone3(true);
      } else {
        setdone3(false);
        setpass(
          <h6 style={{ color: "red", textAlign: "center" }}>
            - Minimum 6 characters
            <br></br>- At least 1 upper case English letter <br></br> - At least
            1 letter<br></br>- At least 1 special character{" "}
          </h6>
        );
      }

      if (pass == conferm2) {
        setdone4(true);
      } else {
        setdone4(false);
        setconferm2(
          <h6 style={{ color: "red", textAlign: "center" }}>
            conferm password mush match password
          </h6>
        );
      }

      if (done && done2 && done3 && done4) {
        axios
          .post(`http://127.0.0.1:8000/api/register`, { ...userData })
          .then((res) => {
            console.log(user);
            console.log(res.data);
            dispatch(signup(res.data.name));
            localStorage.setItem("id", res.data.id);
          });
      }
    } else {
      setall(
        <h5 style={{ color: "red", textAlign: "center" }}>
          
          *** you have to fill all fields ***
        </h5>
      );
    }
  }



















  const GoogleAuth = () => {
    SignInWithGoogle();
    setTimeout(function () {
      go();
    }, 10000);
  };

  const FacebookAuth = () => {
    SignInWithFacebook();
    setTimeout(function () {
      go();
    }, 10000);
  };

  function go() {
    const godata = {
      name: localStorage.getItem("name"),
      email: localStorage.getItem("email"),
      password: "admin1@regexpattern.COM",
    };
    // console.log("************************");
    // console.log(godata);

    if(godata.name !="" && godata.email!="")
    {
    axios
      .post(`http://127.0.0.1:8000/api/register`, { ...godata })
      .then((res) => {
        console.log(user);
        console.log(res.data);
        dispatch(signup(res.data.name));
        localStorage.setItem("id", res.data.id);
      });
    }
  }

  useEffect(() => {
    if (user) {
      navigate("/", { replace: true });
    } else {
      navigate("/Sign_Up", { replace: true });
    }
  }, [user]);

  return (
    <>
      <section class="login-area ptb-100">
        <div class="container">
          <div class="login-form">
            <h2>Sign Up</h2>

            <form onSubmit={handelSubmet}>
              <div className="goo">
                <button
                  type="button"
                  class="login-with-google-btn"
                  onClick={GoogleAuth}
                >
                  Sign in with Google
                </button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button
                  type="button"
                  class="login-with-facebook-btn"
                  onClick={FacebookAuth}
                >
                  Sign in with Facebook
                </button>
              </div>
              <br></br> <h5 style={{ textAlign: "center" }}>OR</h5> <br></br>
              <div class="form-group">
                {/* <label>Username</label> */}
                <input
                  type="text"
                  class="form-control"
                  placeholder="Username"
                  // value={name}
                  // onChange={(e) => setname(e.target.value)}/>

                  onChange={(e) =>
                    setUser((prev) => ({ ...prev, name: e.target.value }))
                  }
                />
              </div>
              {name}
              <div class="form-group">
                {/* <label>Email or phone</label> */}
                <input
                  type="email"
                  class="form-control"
                  placeholder="Email"
                  // value={email}
                  //  onChange={(e) => setemail(e.target.value)}/>

                  onChange={(e) =>
                    setUser((prev) => ({ ...prev, email: e.target.value }))
                  }
                />
              </div>
              {email}
              <div class="form-group">
                {/* <label>Password</label> */}
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                  //   value={password}
                  //   onChange={(e) => setpassword(e.target.value)}/>

                  onChange={(e) =>
                    setUser((prev) => ({ ...prev, password: e.target.value }))
                  }
                />
              </div>
              {pass}
              <div class="form-group">
                {/* <label>Password</label> */}
                <input
                  type="password"
                  class="form-control"
                  placeholder="Confirm Password"
                  //   value={confirm_password}
                  onChange={(e) => setconferm(e.target.value)}
                />
              </div>
              {conferm2}
              {all}
              <div class="row align-items-center">
                <div class="col-lg-6 col-md-6 col-sm-6">
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="checkme"
                    />
                    <label class="form-check-label" for="checkme">
                      Remember me
                    </label>
                  </div>
                </div>

                <div class="col-lg-6 col-md-6 col-sm-6 lost-your-password">
                  <a href="#" class="lost-your-password">
                    Forgot your password?
                  </a>
                </div>
              </div>
              <button type="submit">Sign Up</button>
            </form>

            <div class="important-text">
              <p>
                Already have account?{" "}
                <Link to="/Login">
                  <a href="register.html">Login now!</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Sign_up;
