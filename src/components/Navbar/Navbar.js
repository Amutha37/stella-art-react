import React, { useState } from "react";

import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./Dropdown";

function Navbar() {
  const [toggleShut, setToggleShut] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setToggleShut(!toggleShut);
  const closeMobileMenu = () => setToggleShut(false);

  const onMouseEnter = () => {
    // if (window.innerWidth < 768) {
    setDropdown(true);
    // } else {
    // setDropdown(true);
    // }
  };

  const onMouseLeave = () => {
    // if (window.innerWidth < 768) {
    setDropdown(false);
    // } else {
    // setDropdown(false);
    // }
  };

  return (
    <>
      <nav className="navbar">
        <div className="menu-icon" onClick={handleClick}>
          <i className={toggleShut ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={toggleShut ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              HOME
            </Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              PAINTINGS <i className="fas fa-caret-down" />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
              THE ARTIST
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
              CONTACT
            </Link>
          </li>
          {/* <li>
            <Link
              to="/sign-up"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li> */}
        </ul>
        {/* <Button /> */}
      </nav>
    </>
  );
}

export default Navbar;
