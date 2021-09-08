import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import "./Dropdown.css";
import { Link } from "react-router-dom";
//

function Dropdown() {
  // const [toggleShut, setToggleShut] = useState(false);
  const [toggleShut, setToggleShut] = useState(false);

  // const [select, setSelect] = useState(false);

  // const handleSelect = () => setSelect(!select);
  const handleSelect = () => setToggleShut(!toggleShut);
  const closeMobileMenu = () => {
    // setSelect(false);
    setToggleShut(false);
  };
  return (
    <>
      <ul
        onClick={handleSelect}
        className={toggleShut ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                // onClick={() => setSelect(false)}
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
