import ImageService from "./Images/Images";
import Footer from "./Footer/Footer";
import "./homestyles.css";

const Home = () => {
  return (
    <div>
      <header>
        {/* home page */}
        <div className="landing_Container">
          <div className="landing_Image">
            <p>Captivated by Nature</p>

            <img
              src={ImageService.BannerImage[0].image}
              alt={ImageService.BannerImage[0].name}
            />
            <Footer />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;
