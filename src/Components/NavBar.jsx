import React from "react";
import logo from "../Media/logo.png";
import "./Nav.css";
import { Link, animateScroll as scroll } from "react-scroll";
const NavBar = () => {
  return (
    <div className="head">
      <Link
        activeClass="active"
        to="who"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <img src={logo} className="logo" alt="" />
      </Link>
      <input type="checkbox" id="nav-toggle" className="nav-toggle" />
      <nav>
        <ul>
          <li>
            <Link
              activeClass="active"
              to="who"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <a href="#/">Who are we?</a>
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <a href="#/">Our services</a>
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="contact-us"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <a href="#/">Contact us</a>
            </Link>
          </li>
        </ul>
      </nav>
      <label for="nav-toggle" className="nav-toggle-label">
        <span></span>
      </label>
    </div>
  );
};

export default NavBar;
