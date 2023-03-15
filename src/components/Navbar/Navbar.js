import React from "react";
// import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="n-wrapper navbar navbar-expand-lg" id="Navbar">
      <div className="n-left">
        <div className="n-name">EasyFind</div>
      </div>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="n-right collapse navbar-collapse" id="navbarSupportedContent">
        <div className="n-list">
          <ul className="navbar-nav" style={{ listStyleType: "none"}}>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" style={{ textDecoration: "none" }} href="home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" style={{ textDecoration: "none" }} href="/about">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
