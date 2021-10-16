import { BannerImage } from "../../../components/Images/Images";
import Footer from "../Footer/Footer";
import "./homestyles.css";

const Home = () => {
  return (
    <>
      <header>
        {/* home page */}
        <div className="landing_Container">
          <div className="landing_Image">
            <p>Captivated by Nature 🌴</p>
            <img src={BannerImage[0].image} alt={BannerImage[0].name} />
          </div>
        </div>
      </header>
      <Footer />
    </>
  );
};

export default Home;
