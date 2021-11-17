import React, { Fragment } from "react";
import Footer from "../../Footer/Footer";
import { MessageForSale } from "../../../components/fetchMessage/FetchMessage";
import { NatureImages } from "../../../components/Images/Images";
import SlideControler from "../SlideControler";

const Nature = () => {
  const PrintMessage = MessageForSale();

  return (
    <Fragment>
      <SlideControler slideImages={NatureImages} PrintMessage={PrintMessage} />
      <Footer />
    </Fragment>
  );
};

export default Nature;
