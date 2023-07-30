import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="main-nav-bar">
        <div className="list">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">about</NavLink>
            </li>
            <li>
              <NavLink to="/service">services</NavLink>
            </li>
            <li>
              <NavLink to="/contact">contact</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;