import React, { Fragment } from "react";
import SlideControler from "../SlideControler";
import { PortraitImages } from "../../../components/Images/Images";
import Footer from "../Footer/Footer";

const Portraits = () => {
  return (
    <Fragment>
      <SlideControler slideImages={PortraitImages} />
      <Footer />
    </Fragment>
  );
};

export default Portraits;
