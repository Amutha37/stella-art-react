import React, { Fragment } from "react";
import SlideControler from "../SlideControler";
// import { MessagePetPortrait } from "../../../components/fetchMessage/FetchMessage";
import { PetportraitsImages } from "../../../components/Images/Images";
// import Footer from '../../Footer/Footer';
// import Footer from "../../../components/Footer/Footer";

const Petportraits = () => {
  // const PrintMessage = MessagePetPortrait();

  return (
    <Fragment>
      <SlideControler
        slideImages={PetportraitsImages}
        PrintMessage={""}
        blueThumb={""}
      />
      {/* <Footer /> */}
    </Fragment>
  );
};

export default Petportraits;
