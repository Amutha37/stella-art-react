import React, { Fragment } from "react";
// import { SlideControler } from "../../../components/SlideControler/SlideControler";
import SlideControler from "../SlideControler";
import {
  MessageForSale,
  QuotesWildLife,
} from "../../fetchContent/FetchMessage";
import { WildLifeImages } from "../../../components/Images/Images";
// import Footer from "../../Footer/Footer";

const BirdAnimal = () => {
  const PrintMessage = MessageForSale();
  const PrintQuotes = QuotesWildLife();

  return (
    <Fragment>
      <SlideControler
        slideImages={WildLifeImages}
        PrintMessage={PrintMessage}
        PrintQuotes={PrintQuotes}
      />

      {/* <Footer /> */}
    </Fragment>
  );
};

export default BirdAnimal;
