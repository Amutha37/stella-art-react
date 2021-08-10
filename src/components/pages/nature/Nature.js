import React from "react";
import IMAGES from "../Images/Images";
import NatureDescriptions from "./Descriptions";
import Footer from "../Footer/Footer";

function Nature() {
  return (
    <div>
      <div className="landing_Image">
        <p>Captivated by Nature</p>

        <img src={IMAGES.threesisters} alt="Three sisters" />

        <NatureDescriptions />
        <Footer />
      </div>
    </div>
  );
}

export default Nature;
