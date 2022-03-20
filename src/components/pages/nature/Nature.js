import React, { Fragment } from "react";
import Footer from "../../Footer/Footer";
import { MessageForSale, QuotesNature } from "../../fetchContent/FetchMessage";

import { NatureImages } from "../../../components/Images/Images";
import SlideControler from "../SlideControler";

const Nature = () => {
  const PrintMessage = MessageForSale();
  const PrintQuotes = QuotesNature();

  return (
    <Fragment>
      {/* <div className='quotes'>
        <h3>Nature</h3>
        <p>
          "It's the colours, the light and space thats really unique about
          Nature. The Australian bush and inland desert that provide health to
          the soul."
        </p>
      </div> */}
      <SlideControler
        slideImages={NatureImages}
        PrintMessage={PrintMessage}
        PrintQuotes={PrintQuotes}
      />

      <Footer />
    </Fragment>
  );
};

export default Nature;
