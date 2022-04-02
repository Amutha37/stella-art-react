import React from "react";
// import { Link } from "react-router-dom";
// import { BannerImage } from "../../../components/Images/Images";
import HomeBanner from "./peacefulJourney1.jpg";
import { QuotesHome } from "../../fetchContent/FetchMessage";
import Artist from "../Artist/Artist";
import Testimonial from "../testimonial/Testimonial";
import PaintBrush from "../.././Images/globalimages/smallbrushes.jpg";
// import Img from "react-cloudinary-lazy-image";
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
    <>
      <header>
        {/* home page */}
        <div className="landing_Container">
          <div className="landing_Image">
            <img src={HomeBanner} alt="Peacefull Journey Painting" />
            {/* <Img
              cloudName={"cloud"}
              imageName={HomeBanner}
              alt="Peacefull Journey Painting"
            /> */}
            {/* // fluid={{
          //   maxWidth: 300,
          //   height: 300   }} */}
            {/* <img src={BannerImage[0].image} alt={BannerImage[0].name} /> */}
            <p>{PrintQuotes}</p>
          </div>
        </div>
      </header>
      <div className="paintbrush_text">
        <p id="home_paintTitle">NEW & EXCITING ANNOUNCEMENT</p>{" "}
        <p className="announcement_home">Children's Art Classes </p>{" "}
        <p className="announcement_home">Starting in TERM 2 </p>
        <div className="home-images-row">
          <div className="home-image-column">
            <img src={PaintBrush} alt="paintBrushes" />
          </div>
        </div>
        <div id="class_details1">
          <p id="home_paintTitle">
            {" "}
            Stella's Fine-Art now teaching Children's Art Classes ages 8 - 14
            years.
          </p>
          <div className="webpagelink">
            <p>
              For more information visit my website{" "}
              <em id="link">
                {/* <Link to="/classes" className="enquire_now">
                  LINK
                </Link>{" "} */}
                https://www.fineartstellakypriotis.com
              </em>
            </p>
          </div>

          <p>* Limited spaces available *</p>
        </div>
      </div>
      {/* <div>
        <div className="paintbrush_text">
          <div className="home-images-row">
            <div className="home-image-column">
              <img src={PaintBrush} alt="paintBrushes" />
            </div>
          </div> */}
      {/* <div id="class_details1">
            <p id="home_paintTitle">ART CLASSES TERM 2, 2022</p>
            <p id="announcement_home">NEW & EXCITING ANNOUNCEMENT</p>

            <p id="ages_home">
              Stella's Fine-Art now teaching children's art classes age 8 - 14
              yrs.
            </p>
            <p>
              For more information visit my website
              <em>
                <Link to="/classes" className="enquire_now">
                  LINK
                </Link>{" "}
                https://www.fineartstellakypriotis.com
              </em>{" "}
              .
            </p>

            <p>* Limited spaces available *</p>
          </div>
        </div> */}

      {/* temporary add ends */}
      <Testimonial />
      <Artist />
      {/* <Footer />{" "} */}
      {/* </div> */}
    </>
  );
};

export default Home;
