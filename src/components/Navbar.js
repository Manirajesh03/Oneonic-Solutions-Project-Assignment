import React from "react";
import Button from "./Button";
import "./components.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white d-flex justify-content-start mt-3">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav my-nav">
            <li className="nav-item">
              <a className="nav-link text-dark" aria-current="page" href="#">
                News
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" aria-current="page" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" aria-current="page" href="#">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark " aria-current="page" href="#">
                Account
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" aria-current="page" href="#">
                Wholesale
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link  text-dark" aria-current="page" href="#">
                Vape
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" aria-current="page" href="#">
                THC-O
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" aria-current="page" href="#">
                HHC-O
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" aria-current="page" href="#">
                HHC
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" aria-current="page" href="#">
                Delta 8
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" aria-current="page" href="#">
                Delta 9
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" aria-current="page" href="#">
                Delta 10
              </a>
            </li>
            <li className="nav-item">
              <Button name={"All Products"} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
