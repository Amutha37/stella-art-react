// import React, { useState } from "react";
// // import { Signin } from "./Button";
// import { Link } from "react-router-dom";
// import { Menuitems } from "./Menuitems";
// import "./Navapp.css";

// export const Navapp = () => {
//   const [clicked, setClicked] = useState(false);
//   // set the opposite icon on click hamburger or cross
//   const handleClicked = () => {
//     setClicked(!clicked);
//   };
//   return (
//     <nav className="Navbar-Item">
//       {/* <h1 className="navbar-log">
//         React<i class="fab fa-react"></i>
//       </h1> */}
//       {/* <Link exact to="/" className="navbar-log">
//         React
//         <i className="fab fa-react"></i>
//       </Link> */}
//       <div className="men-icon" onClick={handleClicked}>
//         <i className={clicked ? "fas fa-times" : "fas fa-bars"}> </i>
//       </div>
//       <ul className={clicked ? "nav-men active" : "nav-men"}>
//         {Menuitems.map((item, index) => {
//           return (
//             <li key={index}>
//               <Link exact to={item.to} className={item.cName}>
//                 {item.title}
//               </Link>
//             </li>
//           );
//         })}
//       </ul>
//     </nav>
//   );
// };

// new menu
import React, { useState } from "react";

import { Link } from "react-router-dom";
import "./Navapp.css";
import Dropdown from "./Dropdown";

function Navapp() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <div className="appheader">
        <p>Stella Kypriotis Fine Art</p>
      </div>
      <nav className="navbar">
        {/* <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          STELLA
          <i className="fab fa-firstdraft" />
        </Link> */}

        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
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
            <Link
              to="/paintingsale"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              PAINTINGS <i className="fas fa-caret-down" />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
              ARTIST
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

export default Navapp;
