import { NavLink } from "react-router-dom";
import "./NavBar.css";
import React from "react";
import Logo from "../images/Group 1.svg";

const Navbar = () => {
  return (
    <header className="NavContainer">
      <nav className="first-nav">
        <img src={Logo} alt="Not-Youtube-logo" />
        <p>NotYouTube</p>
      </nav>

      <nav className="sec-nav">
        <NavLink exact to="/Home">
          Home
        </NavLink>
        <NavLink to="/about" className="about">About Us</NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
