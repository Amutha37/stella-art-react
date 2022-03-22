import React from "react";
import { Link } from "react-router-dom";
import { BannerImage } from "../../../components/Images/Images";
import { QuotesHome } from "../../fetchContent/FetchMessage";
import Artist from "../Artist/Artist";
import Testimonial from "../testimonial/Testimonial";
// import Footer from "../../../components/Footer/Footer";
import "./homestyles.css";

const Home = () => {
  const PrintQuotes = QuotesHome();
  return (
    <div>
      <header>
        {/* home page */}
        <div className="landing_Container">
          <div className="landing_Image">
            <img src={BannerImage[0].image} alt={BannerImage[0].name} />
            <p>{PrintQuotes}</p>
          </div>
        </div>
      </header>
      {/* <Classes /> */}
      {/* temporary add */}
      <div>
        <div id="class_details1">
          <h2>ART CLASSES TERM 2, 2022</h2>
          <h3>NEW & EXCITING ANNOUNCEMENT</h3>
          <div>
            <p>
              Stell'a Fine Art Now Teaching Children's Art Classes age 8 - 14
              yrs.
            </p>
            <p>
              Click on this{" "}
              <em>
                <Link to="/classes" className="enquire_now">
                  LINK
                </Link>{" "}
              </em>{" "}
              for further information.
            </p>

            <p>* Limited spaces available. *</p>
          </div>
        </div>
        {/* temporary add ends */}
        <Testimonial />
        <Artist />
        {/* <Footer />{" "} */}
      </div>
    </div>
  );
};

export default Home;
