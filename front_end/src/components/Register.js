import React from "react";

const Register =()=>{
        return(

  <>

        <div class="page-banner-area item-bg4">
            <div class="d-table">
                <div class="d-table-cell">
                    <div class="container">
                        <div class="page-banner-content">
                            <h2>Register</h2>
                            <ul>
                                <li>
                                    <a href="\">Home</a>
                                </li>
                                <li>Register</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- End Page Banner -->

        <!-- Start Register Area --> */}
        <section class="register-area ptb-50">
            <div class="container">
                <div class="register-form">
                    <h2>Register</h2>

                    <form>
                        <div class="form-group">
                            <label>Name</label>
                            <input type="text" class="form-control" placeholder="Name"/>
                        </div>

                        <div class="form-group">
                            <label>Email</label>
                            <input type="text" class="form-control" placeholder="Email"/>
                        </div>

                        <div class="form-group">
                            <label>Phone</label>
                            <input type="text" class="form-control" placeholder="Phone"/>
                        </div>

                        <div class="form-group">
                            <label>Password</label>
                            <input type="text" class="form-control" placeholder="Password"/>
                        </div>

                        <div class="row align-items-center">
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="form-check">
                                    <input type="checkbox" class="form-check-input" id="checkme"/>
                                    <label class="form-check-label" for="checkme">Show password?</label>
                                </div>
                            </div>
                        </div>

                        <button type="submit">Register now</button>
                    </form>

                    <div class="important-text">
                        <p>Already have an account? <a href="login.html">Login now!</a></p>
                    </div>
                </div>
            </div>
        </section>
       
</>
);
};
export default Register ;