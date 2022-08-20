import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { logout } from "../../redux/userSlice";

const Nav = () => {
  let navigate = useNavigate();
  const status = useSelector((state) => state.user.isLogged);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/home", { replace: true });
  };

  let id = localStorage.getItem('id');

  return (
    <>
      <div class="navbar-area">
        <div class="main-responsive-nav">
          <div class="container">
            <div class="main-responsive-menu">
              <div class="logo">
                <a href="/">
                  <img
                    src="assets/img/logo.png"
                    class="black-logo"
                    alt="image"
                  />
                  <img
                    src="assets/img/logo-2.png"
                    class="white-logo"
                    alt="image"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="main-navbar">
          <div class="container">
            <nav class="navbar navbar-expand-md navbar-light">
              <a class="navbar-brand" href="/">
                <img src={"http://localhost:8000/upload/logo2.png" } class="black-logo" alt="image" style={{width:"88px"}} />
                <img
                  src="assets/img/logo-2.png"
                  class="white-logo"
                  alt="image"
                  href="/"
                />
              </a>

              <div
                class="collapse navbar-collapse mean-menu"
                id="navbarSupportedContent"
              >
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <NavLink exact to ="/"  class="nav-link " ActiveClassName="active-link">
                    Home
                    </NavLink>
                  </li>
                  <li class="nav-item">
                  <NavLink exact to ="/Doctors"  class="nav-link " ActiveClassName="active-link">
                  Doctors
                    </NavLink>
                  </li>

                  <li class="nav-item">
                  <NavLink exact to ="/News"  class="nav-link " ActiveClassName="active-link">
                  News
                    </NavLink>
                  </li>

                  <li class="nav-item">
                  <NavLink exact to ="/Comunity"  class="nav-link " ActiveClassName="active-link">
                  Community
                    </NavLink>
                   
                  </li>
                  <li class="nav-item">
                  <NavLink exact to ="/About"  class="nav-link " ActiveClassName="active-link">
                  About us
                    </NavLink>
                    
                  </li>
                  <li class="nav-item">
                  <NavLink exact to ="/Contact"  class="nav-link " ActiveClassName="active-link">
                  Contact
                    </NavLink>
                   
                  </li>
                </ul>

                <div class="others-options d-flex align-items-center">
                  {/* <div class="option-item">
                                    <div class="dropdown language-switcher d-inline-block">
                                        <button class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span>Language <i class='bx bx-chevron-down'></i></span>
                                        </button>
    
                                        <div class="dropdown-menu">
                                            <a href="#" class="dropdown-item d-flex align-items-center">
                                                <img src="assets/img/english.png" class="shadow-sm" alt="flag"/>
                                                <span>English</span>
                                            </a>
                                            <a href="#" class="dropdown-item d-flex align-items-center">
                                                <img src="assets/img/arab.png" class="shadow-sm" alt="flag"/>
                                                <span>العربيّة</span>
                                            </a>
                                            <a href="#" class="dropdown-item d-flex align-items-center">
                                                <img src="assets/img/germany.png" class="shadow-sm" alt="flag"/>
                                                <span>Deutsch</span>
                                            </a>
                                            <a href="#" class="dropdown-item d-flex align-items-center">
                                                <img src="assets/img/portugal.png" class="shadow-sm" alt="flag"/>
                                                <span>Português</span>
                                            </a>
                                            <a href="#" class="dropdown-item d-flex align-items-center">
                                                <img src="assets/img/china.png" class="shadow-sm" alt="flag"/>
                                                <span>简体中文</span>
                                            </a>
                                        </div>
                                    </div>
                                </div> */}

                  {!id && (
                    <div class="option-item">
                      <Link to="/login">
                        {" "}
                        <a href="#" class="default-btn">
                          Login
                        </a>
                      </Link>
                    </div>
                  )}
                  {!id && (
                    <div class="option-item">
                      <Link to="/sign_up">
                        <a href="#" class="default-btn">
                          Sign Up
                        </a>
                      </Link>
                    </div>
                  )}

                  {id>0 && (
                    <div class="option-item">
                      <Link to="/Profile">
                        <a href="#" class="default-btn">
                          Profile
                        </a>
                      </Link>
                    </div>
                  )}

                  {id>0 && (
                    <div class="option-item">
                      <Link to="/" onClick={handleLogout}>
                        <a href="#" class="default-btn">
                          Logout
                        </a>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </nav>
          </div>
        </div>

        <div class="others-option-for-responsive">
          <div class="container">
            <div class="dot-menu">
              <div class="inner">
                <div class="circle circle-one"></div>
                <div class="circle circle-two"></div>
                <div class="circle circle-three"></div>
              </div>
            </div>

            <div class="container">
              <div class="option-inner">
                <div class="others-options d-flex align-items-center">
                  <div class="option-item">
                    <div class="dropdown language-switcher d-inline-block">
                      <button
                        class="dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span>
                          Language <i class="bx bx-chevron-down"></i>
                        </span>
                      </button>

                      <div class="dropdown-menu">
                        <a
                          href="#"
                          class="dropdown-item d-flex align-items-center"
                        >
                          <img
                            src="assets/img/english.png"
                            class="shadow-sm"
                            alt="flag"
                          />
                          <span>English</span>
                        </a>
                        <a
                          href="#"
                          class="dropdown-item d-flex align-items-center"
                        >
                          <img
                            src="assets/img/arab.png"
                            class="shadow-sm"
                            alt="flag"
                          />
                          <span>العربيّة</span>
                        </a>
                        <a
                          href="#"
                          class="dropdown-item d-flex align-items-center"
                        >
                          <img
                            src="assets/img/germany.png"
                            class="shadow-sm"
                            alt="flag"
                          />
                          <span>Deutsch</span>
                        </a>
                        <a
                          href="#"
                          class="dropdown-item d-flex align-items-center"
                        >
                          <img
                            src="assets/img/portugal.png"
                            class="shadow-sm"
                            alt="flag"
                          />
                          <span>Português</span>
                        </a>
                        <a
                          href="#"
                          class="dropdown-item d-flex align-items-center"
                        >
                          <img
                            src="assets/img/china.png"
                            class="shadow-sm"
                            alt="flag"
                          />
                          <span>简体中文</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class="option-item">
                    <a href="#" class="default-btn">
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
