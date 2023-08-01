import React, { useState } from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import HamburgerMenu from "react-hamburger-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleHamburgerClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Navigation bar */}
      <nav className={`main-nav-bar ${isOpen ? "open" : ""}`}>
        <div className="list">
          <ul>
            {/* Home link */}
            <li>
              <NavLink exact to="/" ClassName="active">
                Home
              </NavLink>
            </li>

            {/* Object recognition link */}
            <li>
              <NavLink to="/about" ClassName="active">
                Object recognition
              </NavLink>
            </li>

            {/* Color link */}
            <li>
              <NavLink to="/color" ClassName="active">
                Color
              </NavLink>
            </li>

            {/* Safe Search link */}
            <li>
              <NavLink to="/safe" ClassName="active">
                Safe Search
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
