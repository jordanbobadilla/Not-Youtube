import {NavLink} from "react-router-dom";
import "./NavBar.css";
import React from 'react';


const Navbar = () =>{
    return(
        <nav className="NavContainer">
            <NavLink to={"/"}>

            </NavLink>
            <NavLink exact to="/Home">Home</NavLink>
            <NavLink to="/about">About Us</NavLink>
        </nav>
    );
};

export default Navbar;