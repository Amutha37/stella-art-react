import React from "react";
import Buttons from "./Buttons";
// import Caption from "./Caption";

const Fullimageview = ({ status, slides, slideIndex, plusSlides, message }) => {
  // message page
  console.log(message);
  let Printnote;
  if (message[0]) {
    Printnote = (
      <div>
        <p>
          These paintings are available for sale through my personal account on{" "}
          <a href="https://bluethumb.com.au/stella-kypriotis">Bluethumb</a>{" "}
          online gallery.
        </p>

        <br></br>
        <p>
          If you would like further information, please leave you details in the
          contact section provided and I will get back to you as soon as
          possible.
        </p>
      </div>
    );
  } else if (message[1]) {
    Printnote = (
      <div>
        <p>
          Would you like to commission me to paint a portrait painting of you or
          a loved one?
        </p>
        <br></br>
        <p>
          Please leave you details in the contact section provided and I will
          then get in contact with you to discuss further.
        </p>
        <br></br>

        <p>
          If everything goes well and we are both happy with our discussion, we
          will then proceed with a secure payment of 50% deposit and I will then
          start in the creative journey of your portrait.
        </p>
        <br></br>
        <p>
          I will send you development photos of your painting to keep you
          informed of the process. On the final photo if there are any minor
          adjustments we will look at that too.
        </p>
        <br></br>
        <p>
          Upon completion, I will varnish your work (minimum 2 - 4 weeks) when
          dry for longevity and then mail it to you once the final payment is
          received.
        </p>
      </div>
    );
  } else if (message[2]) {
    Printnote = (
      <div>
        <p>
          Looking for that perfect special gift, either for a loved one or even
          yourself?
        </p>

        <br></br>
        <p>
          Why not consider a custom oil painting on a quality primed canvas of
          your favourite pet to hang on your walls for many years to come.
        </p>
        <br></br>
        <p>
          Please leave you details in the contact section provided and I will
          then get in contact with you to discuss further.
        </p>
        <br></br>

        <p>
          If everything goes well and we are both happy with our discussion, we
          will then proceed with a secure payment of 50% deposit and I will then
          start in the creative journey of your beautiful pet.
        </p>
        <br></br>
        <p>
          I will send you development photos of your painting to keep you
          informed of the process. On the final photo if there are any minor
          adjustments we will look at that too.
        </p>
        <br></br>
        <p>
          Upon completion, I will varnish your work (minimum 2 - 4 weeks) when
          dry for longevity and then mail it to you once the final payment is
          received.
        </p>
      </div>
    );
  } else if (message[3]) {
    Printnote = (
      <div>
        <p>
          If you are interested in commissioning me to do a custom painting for
          you or a loved one, please leave you details in the contact section
          provided and I will then get in contact with you to discuss further.
        </p>
        <br></br>
        <p>
          If everything goes well and we are both happy with our discussion, we
          will then proceed with a secure payment of 50% deposit and I will then
          start in the creative journey of your requested image.
        </p>
        <br></br>
        <p>
          I will send you development photos of your painting to keep you
          informed of the process. On the final photo if there are any minor
          adjustments we will look at that too.
        </p>
        <br></br>
        <p>
          Upon completion, I will varnish your work (minimum 2 - 4 weeks) when
          dry for longevity and then mail it to you once the final payment is
          received.
        </p>
        {/* <p>
          Once we are both happy with this arrangement, we will then proceed
          with a secure payment of 50% deposit and I will then start in the
          creative journey of your beautiful pet.
        </p>
        <br></br>
        <p>
          I will send you development photos of our design to keep you informed
          of the process, and on the final photo if there are any other
          adjustments needed to be made.
        </p>
        <br></br>
        <p>
          Once completed, I will varnish your work (minimum 2 - 4 weeks) when
          dry for longevity and then mail it to you once the final payment is
          received.
        </p> */}
      </div>
    );
  }

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
              {Printnote}
              <br></br>

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
