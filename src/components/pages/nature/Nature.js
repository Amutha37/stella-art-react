import React, { Fragment } from "react";
import Footer from "../Footer/Footer";
import { NatureImages } from "../../../components/Images/Images";
import SlideControler from "../SlideControler";

const Nature = () => {
  const Printnotes = (
    <div>
      <p>
        These paintings are available for sale through my personal account on{" "}
        <a href="https://bluethumb.com.au/stella-kypriotis">Bluethumb</a> online
        gallery.
      </p>

      <br></br>
      <p>
        If you would like further information, please leave you details in the
        contact section provided and I will get back to you as soon as possible.
      </p>
    </div>
  );
  console.log(Printnotes);
  return (
    <Fragment>
      <SlideControler slideImages={NatureImages} printnotes={Printnotes} />
      <Footer />
    </Fragment>
  );
};

export default Nature;
