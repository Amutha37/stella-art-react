import React from "react";
import { MenuItems } from "./MenuItems";
import "./Dropdown.css";
import { Link } from "react-router-dom";
//

function Dropdown({ shutDropdown, handleSelect, closeMobileMenu }) {
  // const [shutDropdown, setToggleShut] = useState(false);
  // const [shutDropdown, setShutDropdown] = useState(false);

  // const [select, setSelect] = useState(false);

  // const handleSelect = () => setSelect(!select);
  // const handleSelect = () => setShutDropdown(!shutDropdown);
  // const closeDropdownMenu = () => {
  //   // setSelect(false);
  //   setShutDropdown(false);
  // };
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
                // onClick={() => setSelect(false)}
                // onClick={closeDropdownMenu}
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