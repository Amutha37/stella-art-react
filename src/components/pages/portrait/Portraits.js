import React, { Fragment } from 'react';
import SlideControler from '../SlideControler';
// import { MessagePortrait } from "../../../components/fetchMessage/FetchMessage";
import { PortraitImages } from '../../../components/Images/Images';
import Footer from '../../Footer/Footer';

const Portraits = () => {
  // const PrintMessage = MessagePortrait();

  return (
    <Fragment>
      <SlideControler
        slideImages={PortraitImages}
        // PrintMessage={PrintMessage}
      />
      <Footer />
    </Fragment>
  );
};

export default Portraits;
