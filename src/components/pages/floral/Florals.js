import React, { Fragment } from "react";
import { MessageForSale } from "../../fetchContent/FetchMessage";
import { QuotesFlorals } from "../../fetchContent/FetchMessage";
import { FloralImages } from "../../../components/Images/Images";
import SlideControler from "../SlideControler";
import Footer from "../../Footer/Footer";

const Florals = () => {
  const PrintMessage = MessageForSale();
  const PrintQuotes = QuotesFlorals();

  return (
    <Fragment>
      <SlideControler
        slideImages={FloralImages}
        PrintMessage={PrintMessage}
        PrintQuotes={PrintQuotes}
      />

      <Footer />
    </Fragment>
  );
};

export default Florals;
