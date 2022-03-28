import React from "react";
import { Link } from "react-router-dom";
// import { BannerImage } from "../../../components/Images/Images";
import HomeBanner from "./peacefulJourney1.jpg";
import { QuotesHome } from "../../fetchContent/FetchMessage";
import Artist from "../Artist/Artist";
import Testimonial from "../testimonial/Testimonial";
import PaintBrush from "../.././Images/globalimages/smallbrushes.jpg";

import "./homestyles.css";
// const win = Dimensions.get('window');
// const paintStyle = StyleSheet.create({
//   image: {
//       flex: 1,
//       alignSelf: 'stretch',
//       width: win.width,
//       height: win.height,
//   }
// });
const Home = () => {
  const PrintQuotes = QuotesHome();
  return (
    <div>
      <header>
        {/* home page */}
        <div className="landing_Container">
          <div className="landing_Image">
            <img src={HomeBanner} alt="Peacefull Journey Painting" />
            {/* <img src={BannerImage[0].image} alt={BannerImage[0].name} /> */}
            <p>{PrintQuotes}</p>
          </div>
        </div>
      </header>

      <div>
        <div className="paintbrush_text">
          <div className="home-images-row">
            <div className="home-image-column">
              <img src={PaintBrush} alt="paintBrushes" />
            </div>
          </div>
          <div id="class_details1">
            <p id="home_paintTitle">ART CLASSES TERM 2, 2022</p>
            <p id="announcement_home">NEW & EXCITING ANNOUNCEMENT</p>

            <p id="ages_home">
              Stella's Fine-Art now teaching children's art classes age 8 - 14
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
