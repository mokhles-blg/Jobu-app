import React from "react";
import { Navbar, Nav } from "react-bootstrap";
const NavbarX = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Profile</Nav.Link>
        <Nav.Link href="#pricing">Sign In</Nav.Link>
        <Nav.Link href="#pricing">Sign Up</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavbarX;
