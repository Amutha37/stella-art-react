import React, { Fragment } from "react";
import { SoldImages } from "../../../components/Images/Images";
import SlideControler from "../SlideControler";
import Footer from "../Footer/Footer";

const Sold = () => {
  return (
    <Fragment>
      <SlideControler slideImages={SoldImages} />
      {/* <SlideSold /> */}
      <Footer />
    </Fragment>
  );
};

export default Sold;
