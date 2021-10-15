import React, { Fragment } from "react";
import Footer from "../Footer/Footer";
import { MessageMasterCopy } from "../../../components/fetchMessage/FetchMessage";
import { MastercopiesImages } from "../../../components/Images/Images";
import SlideControler from "../SlideControler";

const Mastercopies = () => {
  const PrintMessage = MessageMasterCopy();

  return (
    <Fragment>
      <SlideControler
        slideImages={MastercopiesImages}
        PrintMessage={PrintMessage}
      />
      <Footer />
    </Fragment>
  );
};

export default Mastercopies;
