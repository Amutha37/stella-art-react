import React, { useState } from "react";

import Thumbnailimages from "../carousel/Thumbnailimages";
import Fullimageview from "../carousel/Fullimageview";
import { NatureImages } from "../Images/Images";
import "../carousel/carousel.css";

const SlideNature = () => {
  const imgarrlength = NatureImages.length;

  const [imageIndex, setImageIndex] = useState(1);
  const [status, setStatus] = useState(
    new Array(imgarrlength).fill().map((item, idx) => idx === 0)
  );

  // Next/previous controls
  function plusSlides(event) {
    let ind = Number(event.target.value);
    let newind = imageIndex + ind;
    let nex;

    if (newind < 1) {
      nex = imgarrlength;
    } else if (newind > imgarrlength) {
      nex = 1;
    } else {
      nex = newind;
    }
    statusUpdate(nex);
  }

  // Thumbnail image controls
  const currentSlide = (e) => {
    const num = Number(e.target.id);
    statusUpdate(num);
  };

  // boolean status update
  const statusUpdate = (n) => {
    const copy = [...status];
    copy.fill(false);

    copy[n - 1] = !copy[n - 1];
    setStatus(copy);
    setImageIndex(n);
  };

  return (
    //  <!-- Container for the image gallery -->
    <div className="natureContainer">
      <div className="containernature">
        <Fullimageview
          plusSlides={plusSlides}
          slideIndex={imageIndex}
          slides={NatureImages}
          status={status}
        />

        <Thumbnailimages
          slides={NatureImages}
          currentSlide={currentSlide}
          status={status}
          slideIndex={imageIndex}
        />
      </div>
    </div>
  );
};

export default SlideNature;
