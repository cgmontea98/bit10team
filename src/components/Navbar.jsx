import React, { useState } from "react";
import "../css/navbar.css";
import Logo from "../../img/logonavbar.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav fluid
        className="btn navbar navbar-expand-lg bg-body-tertiary navbar bg-dark p-4 "
        data-bs-theme="dark"
        
      >
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">
            <img src={Logo} height="80" alt="CVJS" />
          </a>
          <button
            className="navbar-toggler menu"
            id=""
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
            {/*Link NavBar*/}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active text-white fs-3 mx-3"
                  aria-current="page"
                  to="/"
                >
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-white fs-3 mx-3"
                  aria-current="page"
                  to="/Catalogo"
                >
                  Catálogo
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-white fs-3 mx-3"
                  aria-current="page"
                  to="/Team"
                >
                  Equipo
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-white fs-3 mx-3"
                  aria-current="page"
                  to="https://punkapi.com/documentation/v2"
                  target="_blank"
                >
                  API
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
