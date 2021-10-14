import React, { Fragment } from "react";
import { FloralImages } from "../../../components/Images/Images";
import SlideControler from "../SlideControler";
import Footer from "../Footer/Footer";

const Florals = () => {
  return (
    <Fragment>
      <SlideControler slideImages={FloralImages} />
      <Footer />
    </Fragment>
  );
};

export default Florals;
