import { BannerImage } from '../../../components/Images/Images'
import { QuotesHome } from '../../../components/fetchMessage/FetchMessage'
// import Footer from '../../Footer/Footer'
import './homestyles.css'

const Home = () => {
  const PrintQuotes = QuotesHome()
  return (
    <>
      <header>
        {/* home page */}
        <div className='landing_Container'>
          <div className='landing_Image'>
            <p>Captivated by Nature</p>
            <img src={BannerImage[0].image} alt={BannerImage[0].name} />
          </div>
          <div>{PrintQuotes}</div>
        </div>
      </header>
      <div className='footertext-home'>
        <p>
          Copyright <i className='far fa-copyright'> </i> Stella Kypriotis 2021
          All Right Reserved.
        </p>
        {/* <hr /> */}
      </div>
    </>
  )
}

export default Home
