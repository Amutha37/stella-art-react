import React, { Fragment } from "react";
import SlideControler from "../SlideControler";
import { MessageForSale } from "../../../components/fetchMessage/FetchMessage";
import { WildLifeImages } from "../../../components/Images/Images";
import Footer from "../Footer/Footer";

const BirdAnimal = () => {
  const PrintMessage = MessageForSale();

  return (
    <Fragment>
      <SlideControler
        slideImages={WildLifeImages}
        PrintMessage={PrintMessage}
      />

      <Footer />
    </Fragment>
  );
};

export default BirdAnimal;
