import { Link } from "react-router-dom";
import React, { useState } from "react";
import DropdownFooterPanting from "./DropdownFooterPainting";

export const DropdownFooter = () => {
  const [shutDropdownn, setShutDropdownn] = useState(false);
  const [toggleShut, setToggleShut] = useState(false);
  const [dropdownn, setDropdownn] = useState(false);
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

  // const handleClick = () => setToggleShut(!toggleShut);
  const closeMobileMenuu = () => setToggleShut(!toggleShut);

  const onMouseEnterr = () => {
    setDropdownn(true);
  };

  const onMouseLeavee = () => {
    setDropdownn(false);
    setShutDropdownn(false);
  };

  // dropdown menu control
  const handleSelectt = () => setShutDropdownn(!shutDropdownn);
  const closeDropdownMenuu = () => {
    setShutDropdownn(false);
  };

  return (
    <>
      <ul onClick={onMouseEnterr}>
        <li
          className="nav-item"
          // onMouseEnter={onMouseEnter}
          onClick={onMouseEnterr}
          onMouseLeave={onMouseLeavee}
        >
          <Link to="/" className="nav-links">
            <p>Painting{""}⏩</p>
            {/* <i class="fa-solid fa-chevron-right"></i> */}
            {/* <i className="fas fa-caret-arrow" /> */}
          </Link>
          {dropdownn && (
            <DropdownFooterPanting
              closeDropdownMenu={closeDropdownMenuu}
              closeMobileMenu={closeMobileMenuu}
              shutDropdown={shutDropdownn}
              handleSelect={handleSelectt}
            />
          )}
        </li>
      </ul>
    </>
  );
};
