import IMAGES from "./Images/Images";
import "./homestyles.css";

const Home = () => {
  return (
    <div>
      <header>
        {/* <h1 className="home">EPIC</h1> */}
        <div className="landing_Container">
          <div className="landing_Image">
            <p>Captivated by Nature</p>

            <img src={IMAGES.hummingbird} alt="lily flower" />
            <div className="copyright">
              <hr></hr>
              <div className="footertext">
                <div className="left">
                  <p>
                    Art work by Stella Kypriotis {""}
                    <i class="far fa-copyright"> </i>
                    {""} 2022 All Right Reserved.
                  </p>
                </div>
                <div className="right">
                  <p>share</p>
                  <i class="fab fa-facebook-f"></i>
                  <i class="fab fa-instagram"></i>
                  <i class="fab fa-linkedin-in"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;
