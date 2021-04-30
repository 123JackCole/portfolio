import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom">
      <NavLink className="navbar-brand d-none d-lg-inline-block" to="/" exact>
        AC Planner
      </NavLink>

      <div className="navbar-nav ml-auto flex-nowrap" id="myNavbar">
        <NavLink className="nav-link" to="/bugs" exact>
          Resume
        </NavLink>

        <NavLink className="nav-link" to="/fish" exact>
          Projects
        </NavLink>

        <NavLink className="nav-link" to="/fossils" exact>
          About Me
        </NavLink>

        <NavLink className="nav-link" to="/villagers" exact>
          Villagers
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
