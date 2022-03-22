import React, { Fragment } from "react";
// import { SlideControler } from "../../../components/SlideControler/SlideControler";
import SlideControler from "../SlideControler";
import {
  MessageForSale,
  QuotesWildLife,
} from "../../fetchContent/FetchMessage";
import { WildLifeImages, blueThumb } from "../../../components/Images/Images";
import Footer from "../../../components/Footer/Footer";
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
        blueThumb={blueThumb}
      />

      <Footer />
    </Fragment>
  );
};

export default BirdAnimal;
