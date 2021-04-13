import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav } from "react-bootstrap";
import { logout } from "../JS/actions/user";
import { useHistory } from "react-router-dom";

const NavbarX = () => {
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const dispatch = useDispatch();

  const history = useHistory();

  const logoutAndRedirect = () => {
    history.push("/");
    dispatch(logout());
  };

  return (
    <Navbar bg="dark" variant="dark">
      {isAuth ? (
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/profile">Profile</Nav.Link>
          <Nav.Link onClick={logoutAndRedirect}>Logout</Nav.Link>
        </Nav>
      ) : (
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/signin">Sign In</Nav.Link>
          <Nav.Link href="/signup">Sign Up</Nav.Link>
        </Nav>
      )}
    </Navbar>
  );
};

export default NavbarX;
