import React from "react";
import Buttons from "./Buttons";
// import Caption from "./Caption";

const Fullimageview = ({ status, slides, slideIndex, plusSlides, message }) => {
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
          {slideIndex === slides.length &&
            (message[0] ? (
              <div className="contactnote">
                <p>
                  These paintings are available for sale through my personal
                  account on{" "}
                  <a href="https://bluethumb.com.au/stella-kypriotis">
                    Bluethumb
                  </a>{" "}
                  online gallery.
                </p>

                <br></br>
                <p>
                  If you would like further assistance, fill in the contact form
                  and I will get back to you as soon as possible.
                </p>
                <br></br>
              </div>
            ) : (
              <div className="contactnote">
                <p>
                  Would you like to commission me to paint a portrait painting
                  of you or a loved one?
                </p>

                <br></br>
                <p>
                  Just attach me some good quality photos in the contact details
                  and I will get back to you to discuss which photos will make
                  the best portrait, prices and size appropriate.
                </p>
                <br></br>
              </div>
            ))}
          <br></br>
          <p>Thank you</p>
          <br></br>
          <p>Stella</p>
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
