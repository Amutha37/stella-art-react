import React, { useState } from "react";
import data from "./menudata.json";
// import { DropDownItems } from "../Navbar/dropDownItems";
import { Link } from "react-router-dom";
import { NatureImages } from "../Images/Images";
import { FloralImages } from "../Images/Images";
import { WildLifeImages } from "../Images/Images";
import { MastercopiesImages } from "../Images/Images";
import { PortraitImages } from "../Images/Images";
import { PetportraitsImages } from "../Images/Images";
import { SoldImages } from "../Images/Images";
import SlideControler from "../pages/SlideControler";

// styling
import "./menu.css";

const Menu = () => {
  // conditionally render dropdown affect based on this boolean
  const [optionSelected, SetOptionSelected] = useState({ NatureImages });
  const [slideName, SetSlideName] = useState("Painting");
  const [openMenu, setOpenMenu] = useState(false);
  //   SetSlideName(data.menu.name);
  // const useEffect(() => {
  //     <SlideControler
  //     slideImages={optionSelected}
  //     PrintMessage={""}
  //     PrintQuotes={""}
  //   />;

  // }, [third])

  // takes route string as parameter
  const pushToRoute = (name) => {
    // props.history.push(route);
    console.log("slideName", slideName);
    switch (name) {
      case "Nature":
        <p>
          <em>
            <Link to="/nature">Nature</Link>
          </em>
        </p>;

        SetOptionSelected({ NatureImages });
        SetSlideName(name);
        break;
      case "Florals":
        SetOptionSelected({ FloralImages });
        SetSlideName(name);
        break;
      case "Wild-Life":
        SetOptionSelected({ WildLifeImages });
        SetSlideName(name);
        break;
      case "Master-Copy":
        SetOptionSelected({ MastercopiesImages });
        SetSlideName(name);
        break;
      case "Portraits":
        SetOptionSelected({ PortraitImages });
        SetSlideName(name);
        break;
      case "Pet Portraits":
        SetOptionSelected({ PetportraitsImages });
        SetSlideName(name);
        break;
      case "Sold":
        SetOptionSelected({ SoldImages });
        SetSlideName(name);
        // Object.values(data.menu[7]).push("NATURE");
        break;
      default:
        SetOptionSelected({ NatureImages });
    }

    <SlideControler
      slideImages={{ optionSelected }}
      PrintMessage={""}
      PrintQuotes={""}
    />;
    setOpenMenu(false);
  };

  // <SlideControler
  //   slideImages={FloralImages}
  //   PrintMessage={""}
  //   PrintQuotes={""}
  // />;
  console.log("optionSelected", optionSelected);
  // render each menu item after initial Menu button
  const renderMenuItems = (data) => {
    const colorArr = [
      "#00ced1",
      "#7b68ee",
      "#6495ed",
      "#6495ed",
      "#6495ed",
      "#6495ed",
      "#6495ed",
    ];
    // const dataBackup = data.menu.length - 1;
    return data.menu.map((item, index) => {
      // if counter is over 2, resets to 0
      // for colorArr bracket notation to get sequence of colors

      // dynamic styles for each menu item
      const itemStyle = {
        top: `${index * 1.6}em`,
        backgroundColor: colorArr[index % colorArr.length],
        boxShadow: `2px 3px 3px #a77dda`,
      };

      return (
        <div
          className="m-item"
          key={index}
          style={openMenu ? itemStyle : null}
          onClick={() => pushToRoute(item.name)}
        >
          {item.name}
        </div>
      );
    });
  };

  return (
    <div className="menucontainer">
      <div className="Menu">
        <div className={"m-item m-logo"} onClick={() => setOpenMenu(!openMenu)}>
          {slideName}
        </div>

        {renderMenuItems(data)}
      </div>
    </div>
  );
};

export default Menu;
