import {NavLink} from "react-router-dom";
import "./NavBar.css";

const Navbar = () =>{
    return(
        <nav className="NavContainer">
            <NavLink to={"/"}>

            </NavLink>
            <NavLink to="/Home">Home</NavLink>
            <NavLink to="/about">About Us</NavLink>
        </nav>
    );
};

export default Navbar;