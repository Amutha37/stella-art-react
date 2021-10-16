import React, { useState, Fragment } from "react";

import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./Dropdown";

function Navbar() {
  const [shutDropdown, setShutDropdown] = useState(false);
  const [toggleShut, setToggleShut] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setToggleShut(!toggleShut);
  const closeMobileMenu = () => setToggleShut(false);

  const onMouseEnter = () => {
    setDropdown(true);
  };

  const onMouseLeave = () => {
    setDropdown(false);
    setShutDropdown(false);
  };

  // dropdown menu control
  const handleSelect = () => setShutDropdown(!shutDropdown);
  const closeDropdownMenu = () => {
    setShutDropdown(false);
  };

  return (
    <Fragment>
      <div className="appheader">
        <p>Stella Kypriotis Fine Art </p>
      </div>
      <nav className="navbar">
        <div className="menu-icon" onClick={handleClick}>
          <i className={toggleShut ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={toggleShut ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              🏠 HOME
            </Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link to="/" className="nav-links">
              🖼 PAINTINGS SALE/MORE
              <i className="fas fa-caret-down" />
            </Link>
            {dropdown && (
              <Dropdown
                closeDropdownMenu={closeDropdownMenu}
                closeMobileMenu={closeMobileMenu}
                shutDropdown={shutDropdown}
                handleSelect={handleSelect}
              />
            )}
            {/* {dropdown && <Dropdown closeMobileMenu={closeMobileMenu} />} */}
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
              🙍‍♀️ THE ARTIST
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
              📩 CONTACT
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/faq" className="nav-links" onClick={closeMobileMenu}>
              ❓ FAQ
            </Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
}

export default Navbar;
