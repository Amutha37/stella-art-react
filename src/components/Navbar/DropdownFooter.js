import { Link } from "react-router-dom";
import React, { useState } from "react";
import DropdownFooterPanting from "./DropdownFooterPainting";

export const DropdownFooter = () => {
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

  //   const handleClick = () => setToggleShut(!toggleShut);
  //   const closeMobileMenu = () => setToggleShut(false);

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
    <>
      <ul onClick={handleClick}>
        <li
          className="nav-item"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <Link to="/" className="nav-links">
            <p>Painting</p>

            <i className="fas fa-caret-down" />
          </Link>
          {dropdown && (
            <DropdownFooterPanting
              closeDropdownMenu={closeDropdownMenu}
              closeMobileMenu={closeMobileMenu}
              shutDropdown={shutDropdown}
              handleSelect={handleSelect}
            />
          )}
          {/* {dropdown && <Dropdown closeMobileMenu={closeMobileMenu} />} */}
        </li>
      </ul>
    </>
  );
};
