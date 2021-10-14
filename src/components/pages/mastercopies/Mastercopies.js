import React, { Fragment } from "react";
import Footer from "../Footer/Footer";
import { MastercopiesImages } from "../../../components/Images/Images";
import SlideControler from "../SlideControler";

const Nature = () => {
  return (
    <Fragment>
      <SlideControler slideImages={MastercopiesImages} />
      <Footer />
    </Fragment>
  );
};

export default Nature;
