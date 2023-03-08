import React from "react";
import "../css/navbar.css";
import Logo from "../../img/logonavbar.png";
import { Link } from "react-router-dom";
import { Carrito } from "./Carrito.jsx";

export const Navbar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary navbar bg-dark"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">
            <img src={Logo} height="50" alt="CVJS" />
          </a>
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
            {/*Link NavBar*/}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/"
                >
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/Api"
                >
                  Catálogo
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/Team"
                >
                  Team
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="https://punkapi.com/documentation/v2"
                  target="_blank"
                >
                  API
                </Link>
              </li>
            </ul>
            {/*Carrito de compras*/}
            <Link>
              <Carrito
                className="btn btn-dark fa-solid fa-cart-shopping text-white"
                type="submit"
              />
              <button></button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
