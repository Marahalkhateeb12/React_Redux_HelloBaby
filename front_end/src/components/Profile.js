import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const Profile = () => {
  let id = localStorage.getItem("id");
  // console.log(id);
  const [data, setData] = useState({});

  const [img10, setimg10] = useState("");

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [num, setnum] = useState("");
  const [img, setimg] = useState("");
  const [size, setsize] = useState("");

  const [done, setdone] = useState(false);
  const [done2, setdone2] = useState(false);
  const [done3, setdone3] = useState(false);
  const [done4, setdone4] = useState(false);
  const [done5, setdone5] = useState(false);
  const [done6, setdone6] = useState(false);

  const [all, setall] = useState("");
  const [isimg, setis] = useState(false);

  const passPattern =
    /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/;
  const namePattern = /(^[a-zA-Z][a-zA-Z\s]{2,20}[a-zA-Z]$)/;
  const emailPattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const numpattern = /[07]{2,3}[7-9]{1,2}[0-9]{7,8}/;
  const imgpattern = /\.(jpg|jpeg|png|webp|avif|gif|jfif|svg)$/;
  // "([^\\s]+(\\.(?i)(jpe?g|png|gif|bmp))$)";
  // /^(.+\/)+.+(\.(gif|png|jpg|jpeg|webp|svg|psd|bmp|tif|jfif))$/i;

  const fetchProfile = async () => {
    const response = await fetch(`http://127.0.0.1:8000/api/get/${id}`);
    const myProfile = await response.json();

    setData(myProfile);

    // if (data.image == null) {
    //   setData({...data, image: "https://www.pngall.com/wp-content/uploads/5/Profile-Female.png"});
    //   // data.image = "https://www.pngall.com/wp-content/uploads/5/Profile-Female.png";
    // }
    // console.log("**********************");
    // console.log(data);
    // console.log(data.image);
  };

  useEffect(() => {
    fetchProfile();

    // if (data.image == null) {
    //   setimg10("Profile-Female.png");
    // } else {
    //   setimg10(data.image);
    // }
  }, []);

  // if(data.image == null)
  // {
  //   setimg10("Profile-Female.png");
  // }else{
  //   setimg10(data.image);
  // }

  function handelSubmet(e) {
    e.preventDefault();

    setname("");
    setemail("");
    setpass("");
    setnum("");
    setimg("");
    setsize("");

    setall("");

    setdone(false);
    setdone2(false);
    setdone3(false);
    setdone4(true);
    setdone5(true);
    setdone6(true);

    // console.log(data.name);
    // console.log(data.email);
    if (data.name != "" && data.email != "") {
      if (namePattern.test(data.name)) {
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

      if (emailPattern.test(data.email)) {
        setdone2(true);
      } else {
        setdone2(false);
        setemail(
          <h6 style={{ color: "red", textAlign: "center" }}>
            * Enter correct email
          </h6>
        );
      }

      if (passPattern.test(data.password)) {
        setdone3(true);
      } else {
        // console.log(data.password);
        setdone3(false);
        setpass(
          <h6 style={{ color: "red", textAlign: "center" }}>
            - Minimum 6 characters
            <br></br>- At least 1 upper case English letter <br></br> - At least
            1 letter<br></br>- At least 1 special character{" "}
          </h6>
        );
      }

      if (data.mobile != null) {
        if (data.mobile != "") {
          if (numpattern.test(data.mobile)) {
            setdone4(true);
          } else {
            setdone4(false);
            setnum(
              <h6 style={{ color: "red", textAlign: "center" }}>
                * Enter correct phone number
              </h6>
            );
          }
        }
      }

      if (data.image != null && isimg) {
        console.log(data.image);
        console.log(data.image.name);
        console.log(data.image.size);
        // imgpattern.test(data.image)
        // const i=data.image;
        if (imgpattern.test(data.image.name)) {
          setdone5(true);
        } else {
          setdone5(false);
          setimg(
            <h6 style={{ color: "red", textAlign: "center" }}>
              * the image shold be gif,png,jpg,jpeg,webp,svg
            </h6>
          );
        }

        if (data.image.size <= 1024000) {
          setdone6(true);
        } else {
          setdone6(false);
          setsize(
            <h6 style={{ color: "red", textAlign: "center" }}>
              * the image is very large try something smaller
            </h6>
          );
        }
      }

      if (done && done2 && done3 && done4 && done5 && done6) {
        setis(false);
        console.log(data);
        axios
          .post(`http://127.0.0.1:8000/api/update/` + id, { ...data })
          .then((res) => {
            // console.log(res.data);
            if (res.status == 200) {
              Swal.fire({
                title: "Profile",
                text: "Profile Updated Successfully",
                type: "success",
                confirmButtonColor: "#ea512e",
              });
            }
            //localStorage.setItem("id", res.data.id);
          });
      }
    } else {
      setall(
        <h5 style={{ color: "red", textAlign: "center" }}>
          *** Name and Email are required ***
        </h5>
      );
    }
  }

  const handleChangeImage = (e) => {
    setData({
      ...data,
      image: e.target.files[0],
    });

    setis(true);
  };

  return (
    <>
      <div class="page-banner-area item-bg3">
        <div class="d-table">
          <div class="d-table-cell">
            <div class="container">
              <div class="page-banner-content">
                <h2>Profile</h2>
                <ul>
                  <li>
                    <a href="\">Home</a>
                  </li>
                  <li>Profile</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Page Banner -->

        <!-- Start Apply Area --> */}
      <section class="apply-area ptb-100">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div
                class="quote-image"
                // styles={{ backgroundImage:`url(${data.image})` }}
              >
                <img
                  src={"http://localhost:8000/upload/" + data.image}
                  style={{ width: "75%", height: "75%" }}
                  alt="image"
                />
              </div>
            </div>

            <div class="col-lg-6">
              <div class="quote-item">
                <div class="content">
                  <span>You are welcome</span>
                  {/* <h3>Online Class Registration</h3> */}
                </div>
                {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////// */}



                <form onSubmit={handelSubmet} method="post" enctype="multipart/form-data">
                  <div class="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Full Name"
                      defaultValue={data.name}
                      onChange={(e) =>
                        setData((prev) => ({ ...prev, name: e.target.value }))
                      }
                    />
                    {name}
                  </div>
                  <br />

                  <div class="form-group">
                    <label>Email</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Email"
                      defaultValue={data.email}
                      onChange={(e) =>
                        setData((prev) => ({ ...prev, email: e.target.value }))
                      }
                    />
                    {email}
                  </div>
                  <br />

                  <div class="form-group">
                    <label>Phone Number</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Phone Number"
                      defaultValue={data.mobile}
                      onChange={(e) =>
                        setData((prev) => ({ ...prev, mobile: e.target.value }))
                      }
                    />
                    {num}
                  </div>
                  <br />

                  <div class="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      class="form-control"
                      placeholder="password"
                      //   defaultValue={data.password}
                      onChange={(e) =>
                        setData((prev) => ({
                          ...prev,
                          password: e.target.value,
                        }))
                      }
                    />
                    {pass}
                  </div>
                  <br />
                  <label>
                    Change your profile picture : &nbsp;&nbsp;&nbsp;
                  </label>
                  <input
                    type="file"
                    onChange={handleChangeImage}
                    name="image"
                  />
                  {img}
                  {size}
                  <br></br>
                  <br></br>
                  {all}
                  <button type="submit" class="default-btn">
                    UPDATE
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Profile;
