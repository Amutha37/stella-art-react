import React, { Fragment } from "react";
import ImageService from "./Images/Images";

// import NatureDescriptions from "./NatureDescriptions";
import SlideNature from "./nature/SlideNature";
import Footer from "./Footer/Footer";

const Nature = () => {
  return (
    <Fragment>
      {/* <div className="landing_Image"> */}
      {/* <p>Captivated by Nature</p> */}

      {/* <img
          src={ImageService.BannerImage[1].image}
          alt={ImageService.BannerImage[1].name}
        /> */}

      <SlideNature />
      {/* <NatureDescriptions /> */}
      <Footer />
    </Fragment>
  );
};

export default Nature;
