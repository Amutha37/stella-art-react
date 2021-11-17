import React, { Fragment } from "react";
import { MessageMasterCopy } from "../../../components/fetchMessage/FetchMessage";
import { SoldImages } from "../../../components/Images/Images";
import SlideControler from "../SlideControler";
import Footer from "../../Footer/Footer";

const Sold = () => {
  const PrintMessage = MessageMasterCopy();

  return (
    <Fragment>
      <SlideControler slideImages={SoldImages} PrintMessage={PrintMessage} />
      <Footer />
    </Fragment>
  );
};

export default Sold;
