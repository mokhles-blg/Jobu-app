import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../JS/actions/user";
import { useHistory } from "react-router-dom";

const NavbarX = () => {
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const dispatch = useDispatch();

  const history = useHistory();

  const logoutAndRedirect = (e) => {
    e.preventDefault();
    history.push("/");
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
                <a href="index.html" className="logo">
                  JOB<em>U</em>
                </a>
                {/* ***** Logo End ***** */}
                {/* ***** Menu Start ***** */}
                {isAuth ? (
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
                      <a href="/profile">Profile</a>
                    </li>
                    <li>
                      <a onClick={logoutAndRedirect}>Logout</a>
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
