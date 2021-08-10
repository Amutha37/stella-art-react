import IMAGES from "./Images/Images";
import Footer from "./Footer/Footer";
import "./homestyles.css";

const Home = () => {
  return (
    <div>
      <header>
        {/* <h1 className="home">EPIC</h1> */}
        <div className="landing_Container">
          <div className="landing_Image">
            <p>Captivated by Nature</p>

            {/* <img src={IMAGES.hummingbird1} alt="lily flower" /> */}
            {/* <img src={IMAGES.lily5} alt="lily flower" /> */}
            <img src={IMAGES.lily4} alt="lily flower" />
            {/* <img src={IMAGES.lily3} alt="lily flower" /> */}
            <Footer />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;
