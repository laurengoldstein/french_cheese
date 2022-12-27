import React from "react";
import { NavLink, Link } from "react-router-dom";
// import "./NavBar.scss";

function NavBar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Terroir
        </NavLink>
        <button
          className="navbar-toggler"
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
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Cheeses
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Default
              </a>
            </li>
          </ul>

          <NavLink
            className="btn btn-outline-success"
            type="button"
            to="/login"
          >
            Login/Register
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
