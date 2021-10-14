import React from "react";
import { MenuItems } from "./MenuItems";
import "./Dropdown.css";
import { Link } from "react-router-dom";
//

function Dropdown({ shutDropdown, handleSelect, closeMobileMenu }) {
  return (
    <>
      <ul
        onClick={handleSelect}
        className={shutDropdown ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={closeMobileMenu}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
