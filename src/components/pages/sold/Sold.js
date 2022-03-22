import React, { Fragment } from "react";
import { SoldImages } from "../../../components/Images/Images";
import SlideControler from "../SlideControler";
// import Footer from "../../../components/Footer/Footer";
// import Footer from '../../Footer/Footer';

const Sold = () => {
  // const PrintMessage = MessageMasterCopy();

  return (
    <Fragment>
      <SlideControler
        slideImages={SoldImages}
        // PrintMessage={PrintMessage}
        blueThumb={""}
      />
      {/* <Footer /> */}
    </Fragment>
  );
};

export default Sold;
