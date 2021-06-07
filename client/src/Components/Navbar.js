import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../JS/actions/user";
import { useHistory } from "react-router-dom";

const appendScript = (src, async = false) => {
  const script = document.createElement("script");
  script.src = src;
  script.async = async;
  document.body.appendChild(script);
};

const NavbarX = () => {
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();

  const history = useHistory();

  useEffect(() => {
    appendScript("/assets/js/jquery-2.1.0.min.js");
    appendScript("/assets/js/popper.js");
    appendScript("/assets/js/bootstrap.min.js");
    appendScript("/assets/js/scrollreveal.min.js");
    appendScript("/assets/js/waypoints.min.js");
    appendScript("/assets/js/jquery.counterup.min.js");
    appendScript("/assets/js/imgfix.min.js");
    appendScript("/assets/js/mixitup.js");
    appendScript("/assets/accordions.js");
    appendScript("/assets/js/custom.js");
  }, []);

  const logoutAndRedirect = (e) => {
    e.preventDefault();
    history.push("/signin");
    dispatch(logout());
  };

  return (
    <>
      {/* ***** Header Area Start ***** */}
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                {/* ***** Logo Start ***** */}
                <a href="/" className="logo">
                  JOB<em>U</em>
                </a>
                {/* ***** Logo End ***** */}
                {/* ***** Menu Start ***** */}
                {isAuth ? (
                  <ul className="nav">
                    <li>
                      <a href="/" className="active">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="/aboutus">About Us</a>
                    </li>

                    <li>
                      <a href="/profile">Profile</a>
                    </li>
                    <li>
                      <a href="/jobs">Jobs</a>
                    </li>
                    {user && user.role === "Employer" ? (
                      <li>
                        <a href="/createPost">Create Job</a>
                      </li>
                    ) : (
                      ""
                    )}
                    <li>
                      <a href="/signin" onClick={logoutAndRedirect}>
                        Logout
                      </a>
                    </li>
                  </ul>
                ) : (
                  <ul className="nav">
                    <li>
                      <a href="/" className="active">
                        {" "}
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="/aboutus">About Us</a>
                    </li>
                    <li>
                      <a href="/jobs">Jobs</a>
                    </li>
                    <li>
                      <a href="/signin">Sign In</a>
                    </li>
                    <li>
                      <a href="/signup">Sign Up</a>
                    </li>
                  </ul>
                )}
                <a className="menu-trigger">
                  <span>Menu</span>
                </a>
                {/* ***** Menu End ***** */}
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/* ***** Header Area End ***** */}
    </>
  );
};

export default NavbarX;
