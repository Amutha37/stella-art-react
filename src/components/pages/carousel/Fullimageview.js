import React from "react";
import Buttons from "./Buttons";
// import Caption from "./Caption";

const Fullimageview = ({ status, slides, slideIndex, plusSlides }) => {
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
          {/* <img src={item.image} alt={item.name} /> */}
          {/* contact note */}
          {slideIndex === slides.length && (
            <div className="contactnote">
              {/* <i class="fas fa-quote-right"></i> */}
              <p>
                These paintings are available for sale through my personal
                account on{" "}
                <a href="https://bluethumb.com.au/stella-kypriotis">
                  Bluethumb{" "}
                </a>{" "}
                online gallery.
              </p>

              <br></br>
              <p>
                If you would like further assistance, fill in the contact form
                and I will get back to you as soon as possible.
              </p>
              <br></br>
              <br></br>
              <p>Thank you</p>
              <br></br>
              <p>Stella</p>
            </div>
          )}
        </div>
      ))}
      <Buttons plusSlides={plusSlides} />
      <div id="caption">
        <p>{slides[slideIndex - 1].name} </p>{" "}
        <p className="imagesize">{slides[slideIndex - 1].size}</p>
      </div>
      {/* { slideIndex === slides.length ? null : <div id="caption">
        <p>{slides[slideIndex - 1].name} </p>  </div>
     } */}
      {/* <Caption slides={slides} slideIndex={slideIndex} /> */}
    </>
  );
};

export default Fullimageview;
