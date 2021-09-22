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
                These paintings are now available through{" "}
                <a href="https://bluethumb.com.au/stella-kypriotis">
                  Bluethumb{" "}
                </a>{" "}
                online gallery.
              </p>

              <br></br>
              <p>
                Contact me if you would like more information. If interested in
                commissioning me a painting through my contact form.
              </p>
              <p>
                Please feel free to contact me if you have any enquiries or
                comments.
                <br></br>
                If you need me to contact me over the phone, please leave your
                details in the message & I will call you back.
              </p>
              <br></br>
              <p>
                * There are no additional charges for deliveries in Australia.
              </p>
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
