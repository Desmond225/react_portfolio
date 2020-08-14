import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar expand="lg">
      <Navbar.Brand href="/">
        <img
          src="https://www.w3schools.com/w3images/avatar2.png"
          alt="avatar"
          className="avatar-image"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Link className="mr-3" to="/MyWork">
            My work
          </Link>
          <Link className="mr-3" to="/contact">
            Contact
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;