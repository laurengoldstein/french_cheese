import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../TerroirLogoNoBackground.svg";
// import "./NavBar.css";

function NavBar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img src={logo} width="80" height="80" alt="Terroir Logo" />
        </NavLink>
        <button
          className="btn navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item pt-0">
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/cheeses"
              >
                Cheeses
              </NavLink>
            </li>
            <li className="nav-item pt-0">
              <NavLink className="nav-link" to="/profile/:id">
                Profile
              </NavLink>
            </li>
          </ul>

          <NavLink className="btn btn-outline me-3" type="button" to="/login">
            Login/Register
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
