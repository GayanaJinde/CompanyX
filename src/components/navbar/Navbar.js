import React, { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
import { SiDatadog } from "react-icons/si";
import "../UI/Button/Button.css";
import Register from "../Register/Register.js";
import Company from "../Company/Company";
import View from "../NonAssigned/View";
import "./Navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav className="navbar container">
      <div className="logo">
        <SiDatadog color="#fff" size={35} />
        <p className="logo-text">
          Company<span>X</span>
        </p>
      </div>
      <menu>
        <ul
          className="nav-links"
          id={showMenu ? "nav-links-mobile" : "nav-links-mobile-hide"}
        >
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/register" onClick={Register}>Register</a>
          </li>
          <li>
            <a href="/employees" onClick={Company}>View Employees</a>
          </li>
          <li>
            <a href="/view" onClick={View}>People</a>
          </li>
        </ul>
      </menu>
      <div className="menu-icons" onClick={toggleMenu}>
        {showMenu ? (
          <RiCloseLine color="#fff" size={25} />
        ) : (
          <AiOutlineBars color="#fff" size={25} />
        )}
      </div> 
    </nav>
  );
};

export default Navbar;
