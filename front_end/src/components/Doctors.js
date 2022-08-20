import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDoctors } from "../redux/doctorSlice";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Doctors = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDoctors());

    }, [dispatch]);
    const doctors = useSelector((state) => state.doctor);
    console.log(doctors);





    return (

        <>

            <div class="page-banner-area item-bg1">
                <div class="d-table">
                    <div class="d-table-cell">
                        <div class="container">
                            <div class="page-banner-content">
                                <h2>Doctors</h2>
                                <ul>
                                    <li>
                                        <a href="/">Home</a>
                                    </li>
                                    <li>Doctors</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Page Banner -->

        <!-- Start Teacher Area --> */}


            <section class="teacher-area pt-100 pb-70">
                <div class="container-fluid">
                    <div class="row">

                        {doctors.doctors.map((doctor) => {
                            return (
                                <div class="col-lg-3 col-md-6">
                                    <div class="single-teacher">
                                        <div class="image">
                                            <img style={{height:'300px',width:'550px'}} src={"http://localhost:8000/upload/" + doctor.image_doctor} alt="image" />

                                            <ul class="social">
                                                <li>
                                                    <a href="#" target="_blank">
                                                        <i class='bx bxl-facebook'></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" target="_blank">
                                                        <i class='bx bxl-twitter'></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" target="_blank">
                                                        <i class='bx bxl-linkedin'></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" target="_blank">
                                                        <i class='bx bxl-instagram'></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div class="content">

                                            <a href={`DoctorDetails/${doctor.id}`}> <h3>{doctor.name_doctor}</h3></a>
                                            <span>{doctor.specialization}</span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                        {/* <div class="col-lg-3 col-md-6">
                        <div class="single-teacher">
                            <div class="image">
                                <img src="assets/img/teacher/teacher-2.jpg" alt="image"/>

                                <ul class="social">
                                    <li>
                                        <a href="#" target="_blank">
                                            <i class='bx bxl-facebook'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i class='bx bxl-twitter'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i class='bx bxl-linkedin'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i class='bx bxl-instagram'></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div class="content">
                                <h3>Sherlock Bin</h3>
                                <span>Art Teacher</span>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6">
                        <div class="single-teacher">
                            <div class="image">
                                <img src="assets/img/teacher/teacher-3.jpg" alt="image"/>

                                <ul class="social">
                                    <li>
                                        <a href="#" target="_blank">
                                            <i class='bx bxl-facebook'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i class='bx bxl-twitter'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i class='bx bxl-linkedin'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i class='bx bxl-instagram'></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div class="content">
                                <h3>Priestly Herbart</h3>
                                <span>Math Teacher</span>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6">
                        <div class="single-teacher">
                            <div class="image">
                                <img src="assets/img/teacher/teacher-4.jpg" alt="image"/>

                                <ul class="social">
                                    <li>
                                        <a href="#" target="_blank">
                                            <i class='bx bxl-facebook'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i class='bx bxl-twitter'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i class='bx bxl-linkedin'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i class='bx bxl-instagram'></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div class="content">
                                <h3>Smith Broke</h3>
                                <span>English Teacher</span>
                            </div>
                        </div>
                    </div> */}

                        {/* <div class="col-lg-3 col-md-6">
                        <div class="single-teacher">
                            <div class="image">
                                <img src="assets/img/teacher/teacher-8.jpg" alt="image"/>

                                <ul class="social">
                                    <li>
                                        <a href="#" target="_blank">
                                            <i class='bx bxl-facebook'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i class='bx bxl-twitter'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i class='bx bxl-linkedin'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i class='bx bxl-instagram'></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div class="content">
                                <h3>David Beckham</h3>
                                <span>Music Teacher</span>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6">
                        <div class="single-teacher">
                            <div class="image">
                                <img src="assets/img/teacher/teacher-9.jpg" alt="image"/>

                                <ul class="social">
                                    <li>
                                        <a href="#" target="_blank">
                                            <i class='bx bxl-facebook'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i class='bx bxl-twitter'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i class='bx bxl-linkedin'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i class='bx bxl-instagram'></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div class="content">
                                <h3>Jacinda Meri</h3>
                                <span>Art Teacher</span>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6">
                        <div class="single-teacher">
                            <div class="image">
                                <img src="assets/img/teacher/teacher-10.jpg" alt="image"/>

                                <ul class="social">
                                    <li>
                                        <a href="#" target="_blank">
                                            <i class='bx bxl-facebook'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i class='bx bxl-twitter'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i class='bx bxl-linkedin'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i class='bx bxl-instagram'></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div class="content">
                                <h3>Alex Maxwel</h3>
                                <span>Math Teacher</span>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6">
                        <div class="single-teacher">
                            <div class="image">
                                <img src="assets/img/teacher/teacher-11.jpg" alt="image"/>

                                <ul class="social">
                                    <li>
                                        <a href="#" target="_blank">
                                            <i class='bx bxl-facebook'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i class='bx bxl-twitter'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i class='bx bxl-linkedin'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i class='bx bxl-instagram'></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div class="content">
                                <h3>Carl Anderson</h3>
                                <span>English Teacher</span>
                            </div>
                        </div>
                    </div> */}
                    </div>
                </div>
            </section>
        </>

    );
};
export default Doctors;