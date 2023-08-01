import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

// Functional component 'Navbar' responsible for rendering the navigation bar
const Navbar = () => {
  return (
    <>
      {/* Navigation bar */}
      <nav className="main-nav-bar">
        <div className="list">
          <ul>
            {/* Home link */}
            <li>
              <NavLink to="/">Home</NavLink>
            </li>

            {/* Object recognition link */}
            <li>
              <NavLink to="/about">Object recognition</NavLink>
            </li>

            {/* Color link */}
            <li>
              <NavLink to="/color">Color</NavLink>
            </li>

            {/* Safe Search link */}
            <li>
              <NavLink to="/safe">Safe Search</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
