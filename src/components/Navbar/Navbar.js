// import React, { useState, Fragment, useEffect } from 'react'
import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./Dropdown";
// import hamBurger from ".././Images/icons/hamburgerBarCross/hamburger-bar.svg";
// import crossBar from ".././Images/icons/hamburgerBarCross/cross.svg";
// import { MdClose } from "react-icons/md"
// import { FiMenu } from "react-icons/fi"

// const hamburger = (
//   <svg viewBox="0 0 100 80" width="40" height="40">
//   <rect width="100" height="20"></rect>
//   <rect y="30" width="100" height="20"></rect>
//   <rect y="60" width="100" height="20"></rect>
// </svg>
// )

function Navbar() {
  const [shutDropdown, setShutDropdown] = useState(false);
  const [toggleShut, setToggleShut] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  // const [show, setHandleShow] = useState(false)
  // using string template nav class always but if the show is true set class to nav-black
  // useEffect(() => {
  //   window.addEventListener('scroll', () => {
  //     if (window.scrollY > 150) {
  //       setHandleShow(true)
  //     } else setHandleShow(false)
  //   })
  //   return () => {
  //     window.removeEventListener('scroll')
  //   }
  // }, [])

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
        <p id="captivated-by-nature">Captivated by Nature</p>
      </div>
      {/* <nav className={`navbar ${show && 'nav_black'}`}> */}
      <nav className="navbar">
        <div className="menu-icon" onClick={handleClick}>
          {/* <i className={toggleShut ? "fas fa-times" : "fas fa-bars"} /> */}
          {/* <button onClick={handleToggle}>
  {navbarOpen ? (
    <MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />
  ) : (
    <FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
  )}
</button> */}
          {/* {toggleShut ? (
            <img src={crossBar} alt="cross" />
          ) : (
            // <crossBar />
            <img src={hamBurger} alt="cross" />
            // <humBurger />
          )} */}
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
              PAINTINGS
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
            <Link to="/Artist" className="nav-links" onClick={closeMobileMenu}>
              THE ARTIST
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/testimonial"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              TESTIMONIAL
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/commissions"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              COMMISSIONS
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/classes" className="nav-links" onClick={closeMobileMenu}>
              CLASSES
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/faquestions"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              FAQ
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
}

export default Navbar;
