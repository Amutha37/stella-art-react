import React from "react";
import Buttons from "./Buttons";

const Fullimageview = ({
  status,
  slides,
  slideIndex,
  plusSlides,
  PrintMessage,
}) => {
  return (
    <>
      {slides.map((item, index) => (
        <div
          className="mySlides"
          style={status[index] ? { display: "block" } : { display: "none" }}
          key={index}
        >
          {index === slides.length - 1 ? null : (
            <img src={item.image} alt={item.name} />
          )}

          {/* contact note */}
          {slideIndex === slides.length && (
            <div className="contactnote">
              {PrintMessage}
              <br></br>
              <p>Thank you</p>
            </div>
          )}
        </div>
      ))}
      <Buttons plusSlides={plusSlides} />
      <div id="caption">
        <p>{slides[slideIndex - 1].name} </p>{" "}
        <p className="imagesize">{slides[slideIndex - 1].size}</p>
      </div>
    </>
  );
};

export default Fullimageview;
