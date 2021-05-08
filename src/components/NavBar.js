import React from "react";
import Projects from "../containers/Projects.js";
import Pets from "../containers/Pets.js";
import Contact from "../containers/Contact.js";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="justify-content">
      <Navbar.Brand href="#">Jack Cole</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav className="justify-content-end">
          <Nav.Item>
            <Nav.Link href="#">About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#pets">Pets</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#resume">Resume</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
