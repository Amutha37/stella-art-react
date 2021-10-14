import React, { Fragment } from "react";
// import Slidepetportraits from "./Slidepetportraits";
import SlideControler from "../SlideControler";
import { PetportraitsImages } from "../../../components/Images/Images";
import Footer from "../Footer/Footer";

const Petportraits = () => {
  return (
    <Fragment>
      <SlideControler slideImages={PetportraitsImages} />
      {/* <Slidepetportraits /> */}
      <Footer />
    </Fragment>
  );
};

export default Petportraits;
