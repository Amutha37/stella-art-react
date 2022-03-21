import React from "react";
import { BannerImage } from "../../../components/Images/Images";
import { QuotesHome } from "../../fetchContent/FetchMessage";
import Footer from "../../Footer/Footer";
import { Link } from "react-router-dom";
import "./homestyles.css";

const Home = () => {
  const PrintQuotes = QuotesHome();
  return (
    <>
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
      <div id="class_details">
        <h2>ART CLASSES</h2>
        <p>
          Starting in TERM 2 for children aged 8+ in Sydney south-west
          (Campbelltown area).
        </p>
        <div>
          <p>
            I will be running children's art classes from my ART-STUDIO located
            in Sydney south-west (Campbelltown) area.
          </p>
          <p>More information will be posted here on </p>
          <p>
            <em>31st MARCH 2022.</em>
          </p>
          <p>Enquire</p>
          <Link to="/contact" className="enquire_now">
            NOW
          </Link>
        </div>{" "}
      </div>
      {/* temporary add ends */}

      <Footer />
    </>
  );
};

export default Home;
