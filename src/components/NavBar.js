import React from "react";
import Projects from "../containers/Projects.js";
import Pets from "../containers/Pets.js";
import Contact from "../containers/Contact.js";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const NavBar = () => {
  return (
    <Navbar>
      <Nav className="mr-auto">
        <Nav.Link href="#">Jack Cole</Nav.Link>
      </Nav>
      <Nav className="justify-content-end">
        <Nav.Link href="#">About</Nav.Link>
        <Nav.Link href="#projects">Projects</Nav.Link>
        <Nav.Link href="#pets">Pets</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
        <Nav.Link href="#resume">Resume</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
