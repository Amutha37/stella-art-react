import React, { Fragment } from "react";
import SlideControler from "../SlideControler";
import { WildLifeImages } from "../../../components/Images/Images";
import Footer from "../Footer/Footer";

const BirdAnimal = () => {
  return (
    <Fragment>
      <SlideControler slideImages={WildLifeImages} />
      {/* <SlideWildlife /> */}

      <Footer />
    </Fragment>
  );
};

export default BirdAnimal;
