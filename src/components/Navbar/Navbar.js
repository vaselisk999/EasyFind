import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
// import FaBars from "@fortawesome/react-fontawesome";
// import FaTimes from "@fortawesome/react-fontawesome";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo py-lg-0">
            EasyFind
            {/* <i className="fas fa-code"></i> */}
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                style={(isActive) => ({
                  color: isActive ? "green" : "blue",
                })}
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                style={(isActive) => ({
                  color: isActive ? "green" : "blue",
                })}
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
