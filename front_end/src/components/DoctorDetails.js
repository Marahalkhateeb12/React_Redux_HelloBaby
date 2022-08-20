import React, { useState, useRef } from "react";
import { getDoctorDetail } from "../redux/doctorSlice";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { getDoctors } from "../redux/doctorSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";



const DoctorDetails = () => {
    //  const dispatch = useDispatch();
    //const { id } = useParams();
    // useEffect(() => {
    //     dispatch(getDoctorDetail(id));

    // }, [dispatch]);

    // const doctor = useSelector((state) => state.doctor.doctors.find((doctor)=>doctor.id=== +id));
    // console.log(doctor.name);

    //const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch1(getDoctors());

    // }, [dispatch1]);
    // const doctor = useSelector((state) =>  state.doctor.doctors.find((doctor)=>doctor.id === +id));

    // console.log(doctor);

    // useEffect(() => {
    //     dispatch(getDoctorDetail(1));

    // }, [dispatch]);
    // const doctors = useSelector((state) => state.doctor);
    // console.log(doctors);

    // useEffect(() => {
    //     dispatch(getDoctorDetail(id));

    // }, [dispatch]);
    // const doctor = useSelector((state) => state.doctor);
    // console.log(doctor);
    // console.log(doctor.doctors.name);




    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDoctorDetail(id));
    }, [dispatch]);
    const doctor = useSelector((state) => state.doctor);

    console.log(doctor.doctors.name);

    const [name ,setName]=useState('');
    const [email ,setEmail]=useState('');
    const [message ,setMessage]=useState('');
    const [loading, setLoading] = useState(false);
const form=useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_m9uvmef', 'template_djal5dp', form.current, 'C4DISeGB_9kK7EqvD')
          .then((result) => {
              console.log(result.text);
              Swal.fire({
                title: "",
                text: "Your Message Sent Successfully",
                type: "success",
                confirmButtonColor: "#ea512e"
            });
          }, (error) => {
              console.log(error.text);
          });
      };

    return (

        <>


            <div class="page-banner-area item-bg4">
                <div class="d-table">
                    <div class="d-table-cell">
                        <div class="container">
                            <div class="page-banner-content">
                                <h2>Doctor Details</h2>
                                <ul>
                                    <li>
                                        <a href="/">Home</a>
                                    </li>
                                    <li>Doctor Details</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Page Banner -->

        <!-- Start Teacher Details Area --> */}
            <section class="teacher-details-area ptb-100">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-12">
                            <div class="teacher-details-desc">
                                <div class="teacher-desc-image">
                                    <img src={ "http://localhost:8000/upload/" + doctor.doctors.image_doctor } alt="image" style={{height:'450px'}}/>
                                </div>

                                <div class="teacher-desc-content">
                                    <h3>Personal Information and Biography</h3>
                                    <p>{doctor.doctors.description}</p>
                                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> */}

                                    {/* <h3>Teacher Skills</h3> */}
                                    {/* <p>Lorem ipsum dolor sitamet , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> */}

                                    {/* <div class="skill-bar" data-percentage="95%">
                                    <p class="progress-title-holder">
                                        <span class="progress-title">Teaching Skills</span>
                                        <span class="progress-number-wrapper">
                                            <span class="progress-number-mark">
                                                <span class="percent"></span>
                                                <span class="down-arrow"></span>
                                            </span>
                                        </span>
                                    </p>
                                    <div class="progress-content-outter">
                                        <div class="progress-content"></div>
                                    </div>
                                </div> */}

                                    {/* <div class="skill-bar" data-percentage="85%">
                                    <p class="progress-title-holder">
                                        <span class="progress-title">Speaking</span>
                                        <span class="progress-number-wrapper">
                                            <span class="progress-number-mark">
                                                <span class="percent"></span>
                                                <span class="down-arrow"></span>
                                            </span>
                                        </span>
                                    </p>
                                    <div class="progress-content-outter">
                                        <div class="progress-content two"></div>
                                    </div>
                                </div>
         */}
                                    {/* <div class="skill-bar" data-percentage="75%">
                                    <p class="progress-title-holder">
                                        <span class="progress-title">Communication Skill</span>
                                        <span class="progress-number-wrapper">
                                            <span class="progress-number-mark">
                                                <span class="percent"></span>
                                                <span class="down-arrow"></span>
                                            </span>
                                        </span>
                                    </p>
                                    <div class="progress-content-outter">
                                        <div class="progress-content three"></div>
                                    </div>
                                </div> */}

                                    {/* <div class="skill-bar" data-percentage="65%">
                                    <p class="progress-title-holder">
                                        <span class="progress-title">Follow The Rules</span>
                                        <span class="progress-number-wrapper">
                                            <span class="progress-number-mark">
                                                <span class="percent"></span>
                                                <span class="down-arrow"></span>
                                            </span>
                                        </span>
                                    </p>
                                    <div class="progress-content-outter">
                                        <div class="progress-content four"></div>
                                    </div>
                                </div> */}

                                    {/* <div class="skill-bar" data-percentage="70%">
                                    <p class="progress-title-holder">
                                        <span class="progress-title">Child Care Skills</span>
                                        <span class="progress-number-wrapper">
                                            <span class="progress-number-mark">
                                                <span class="percent"></span>
                                                <span class="down-arrow"></span>
                                            </span>
                                        </span>
                                    </p>
                                    <div class="progress-content-outter">
                                        <div class="progress-content five"></div>
                                    </div>
                                </div> */}
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-12">
                            <div class="teacher-details-information">
                                <h3>Profile Details</h3>

                                <ul>
                                    <li>
                                        <span>Name:  </span>
                                        {doctor.doctors.name_doctor}
                                    </li>
                                    <li>
                                        <span>Email:  </span>
                                        {doctor.doctors.email_doctor}
                                    </li>
                                    <li>
                                        <span>Clinic Mobile:  </span>
                                        {doctor.doctors.clinic_mobile}
                                    </li>
                                  
                                    <li>
                                        <span>Clinic Address:  </span>
                                        {doctor.doctors.clinic_address}
                                    </li>
                                    <li>
                                        <span>Designation:</span>
                                        {doctor.doctors.specialization}
                                    </li>
                                    <li>
                                        <span>Experience:</span>
                                        {doctor.doctors.experience}
                                    </li>
                                    <li>
                                        <span>Contact:</span>

                                        <a href="#"><i class='bx bxl-facebook'></i></a>
                                        <a href="#"><i class='bx bxl-twitter'></i></a>

                                        <a href="#"><i class='bx bxl-instagram'></i></a>
                                    </li>
                                    {/* <li>
                                    <div class="col-lg-12 col-md-12">
                                        <button type="submit" class="default-btn" style={{borderColor:'#ea512e'}} >Edit </button>
                                        <div id="msgSubmit" class="h3 text-center hidden"></div>
                                        <div class="clearfix"></div>
                                    </div>
                                    </li> */}
                                </ul>
                               
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-7 col-md-12 " style={{marginTop:'100px'}}>
                        <div class="contact-form">
                            <h3>Send Email To <span style={{color:'#ea512e'}}>Dr. {doctor.doctors.name_doctor}</span></h3>

                            <form id="contactForm" ref={form} onSubmit={sendEmail }>
                                <div class="row">
                                    <div class="col-lg-12 col-md-6">
                                        <div class="form-group">
                                            <lable>Your Name: </lable>
                                            <input type="text" name="name" id="name" class="form-control" required data-error="Please enter your name" placeholder="name" onChange={(e) => setName(e.target.value)}/>
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>

                                    <div class="col-lg-12 col-md-6">
                                        <div class="form-group">
                                            <lable>Your Email: </lable>
                                            <input type="email" name="email" id="email" class="form-control" required data-error="Please enter your email" placeholder="example@mail.com" onChange={(e) => setEmail(e.target.value)}/>
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>

                                    <div class="col-lg-12 col-md-12">
                                        <div class="form-group">
                                        <lable>Message: </lable>
                                            <textarea name="message" id="message" cols="30" rows="5" required data-error="Please enter your message" class="form-control" placeholder="Write your message..." onChange={(e) => setMessage(e.target.value)}></textarea>
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>

                                    <div class="col-lg-12 col-md-12">
                                        <button type="submit" class="default-btn"> Send</button>
                                        <div id="msgSubmit" class="h3 text-center hidden"></div>
                                        <div class="clearfix"></div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};
export default DoctorDetails;