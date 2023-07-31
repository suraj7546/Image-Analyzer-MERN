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
              <NavLink to="/about">Object recognition</NavLink>
            </li>
            <li>
              <NavLink to="/color">Color</NavLink>
            </li>
            <li>
              <NavLink to="/Safe-Search">Safe Search</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
