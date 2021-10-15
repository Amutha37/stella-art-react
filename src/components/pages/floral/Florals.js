import React, { Fragment } from "react";
import { MessageForSale } from "../../../components/fetchMessage/FetchMessage";
import { FloralImages } from "../../../components/Images/Images";
import SlideControler from "../SlideControler";
import Footer from "../Footer/Footer";

const Florals = () => {
  const PrintMessage = MessageForSale();

  return (
    <Fragment>
      <SlideControler slideImages={FloralImages} PrintMessage={PrintMessage} />
      <Footer />
    </Fragment>
  );
};

export default Florals;
