import { NavLink } from "react-router-dom";
import React from "react";
import Logo from "../images/Group 1.svg";
import "./NavBar.css";

const Navbar = () => {
  return (
    <header className="NavContainer">
      <nav className="first-nav">
        <img src={Logo} alt="Not-Youtube-logo" />
        <p>NotYouTube</p>
      </nav>

      <nav className="sec-nav">
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink to="/about" className="about">
          About Us
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
