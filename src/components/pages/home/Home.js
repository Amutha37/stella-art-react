import { BannerImage } from '../../../components/Images/Images';
import Footer from '../../Footer/Footer';
import './homestyles.css';

const Home = () => {
  return (
    <>
      <header>
        {/* home page */}
        <div className='landing_Container'>
          <div className='landing_Image'>
            <p>Captivated by Nature</p>
            <img src={BannerImage[0].image} alt={BannerImage[0].name} />
          </div>
        </div>
      </header>
      <div className='quotePeace'>
        <h3>Peaceful Destination</h3>
        <p>
          " A commission painting - on the journey heading towards their
          heavently destination (the Light) with the Dove (Holy-Spirit) guiding
          them along the way."
        </p>
      </div>

      <Footer />
    </>
  );
};

export default Home;
