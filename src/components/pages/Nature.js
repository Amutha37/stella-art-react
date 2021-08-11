import React from "react";
import ImageService from "./Images/Images";

import NatureDescriptions from "./NatureDescriptions";
import Footer from "./Footer/Footer";

const Nature = () => {
  return (
    <div>
      <div className="landing_Image">
        <p>Captivated by Nature</p>

        <img
          src={ImageService.BannerImage[1].image}
          alt={ImageService.BannerImage[1].name}
        />

        <NatureDescriptions />
        <Footer />
      </div>
    </div>
  );
};

export default Nature;
