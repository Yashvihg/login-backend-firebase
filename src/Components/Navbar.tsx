import { useState } from "react";
import { NavLink } from "react-router-dom";
import YourSvg from "../assets/hamburger.svg";
import "./Navbar.css";

import logo from "../assets/logo.png";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container navContainer">
        <div className="logo">
          <img src={logo} width={"100px"} height={"auto"} alt="Logo" />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <img src={YourSvg} alt="Your SVG" />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul className="navbarUl">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/how-it-works">How it Works</NavLink>
            </li>
            <li>
              <NavLink to="/homestays">Home Stays</NavLink>
            </li>
            <li>
              <NavLink to="/buy-pass">Buy Pass</NavLink>
            </li>
            <li>
              <NavLink to="/faq">FAQ's</NavLink>
            </li>

            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
