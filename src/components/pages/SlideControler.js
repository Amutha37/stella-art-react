import React, { useState } from "react";
import ThumbNailImages from "../carousel/ThumbNailImages";
import WholeImageView from "../carousel/WholeImageView";
import "../carousel/carousel.css";

const SlideControler = ({
  slideImages,
  PrintMessage,
  PrintQuotes,
  blueThumb,
}) => {
  const imgarrlength = slideImages.length;

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
        <WholeImageView
          slideIndex={imageIndex}
          slides={slideImages}
          status={status}
          plusSlides={plusSlides}
          PrintMessage={PrintMessage}
          PrintBlueThumb={blueThumb}
        />

        <ThumbNailImages
          slides={slideImages}
          currentSlide={currentSlide}
          status={status}
          slideIndex={imageIndex}
          PrintQuotes={PrintQuotes}
        />
      </div>
    </div>
  );
};

export default SlideControler;
