import React from "react";
import logo from "../Media/logo.png";
import "./Nav.css";

const NavBar = () => {
  return (
    <header className="head">
      <img src={logo} className="logo" alt="" />
      <input type="checkbox" id="nav-toggle" className="nav-toggle" />
      <nav>
        <ul>
          <li>
            <a href="#/">Who are we?</a>
          </li>
          <li>
            <a href="#/">Our services</a>
          </li>
          <li>
            <a href="#/">Contact us</a>
          </li>
        </ul>
      </nav>
      <label for="nav-toggle" className="nav-toggle-label">
        <span></span>
      </label>
    </header>
  );
};

export default NavBar;
