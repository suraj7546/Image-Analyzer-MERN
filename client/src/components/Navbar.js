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
              <NavLink to="/">Home</NavLink>a
            </li>
            <li>
              <NavLink to="/about">about</NavLink>b
            </li>
            <li>
              <NavLink to="/service">services</NavLink>c
            </li>
            <li>
              <NavLink to="/contact">contact</NavLink>d
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
