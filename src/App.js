import "./App.css";
import IMAGES from "./Images/Images";
// import Picture1 from "./img/slider/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg";

// import Picture2 from "./img/slider/Fuji_TallHero_Computers_1x._CB432469755_.jpg";

// import Picture3 from "./img/slider/Fuji_TallHero_Currency_v2_en_US_2x._CB428993290_.jpg";
// import Picture4 from "./img/slider/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Stella Kypriotis Fine Art Jeff</p>

        <div className="landing_Image">
          <div className="landing_Container">
            <p>Captivated by Nature</p>

            {/* <img src={IMAGES.beachWaves} alt="crashing waves" /> */}
            <img src={IMAGES.lily} alt="crashing waves" />
          </div>
        </div>
      </header>
      {/* slide  */}
      {/* <!-- slide show starts here --> */}
      <div id="slider1">
        <figure>
          <img src={IMAGES.lily} alt="" />
          <img src={IMAGES.majesty} alt="" />
          <img src={IMAGES.lilyy} alt="" />
          <img src={IMAGES.crashingwaves} alt="" />
        </figure>
      </div>
      {/* <!-- slide show ends here --> */}
    </div>
  );
}

export default App;
