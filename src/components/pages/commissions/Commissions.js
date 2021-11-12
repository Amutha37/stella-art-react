import React from 'react'
// import peacefuljourney from './peacefuljourney.jpg'
import Footer from '../Footer/Footer'
import { CommissionSamples } from '../../../components/Images/Images'
import { Testimonial } from '../../../components/fetchMessage/Testimonial'
import { PrintPrice } from '../../../components/fetchMessage/PriceTable'
import './commission.css'
// import './commission2.css'
import './commission2.css'

function Commissions() {
  // const [hover, setHover] = useState(false)
  // const onHover = () => {
  //   setHover(!hover)
  // }
  return (
    <div className='commission-container'>
      {/* blury background */}
      <div className='hero-image-container'>
        <div className='bg-image'></div>

        <div className='bg-text'>
          <h1>Commission an Artwork</h1>
          <p>Oil and/or acrylic on canvas or wood panel.</p>
          <p> FREE SHIPPING in Australia</p>
        </div>
      </div>
      {/* <div className='image-container'> */}
      <div className='commission-images-container'>
        {CommissionSamples.map((sampleImg, i) => (
          <div
            key={i}
            className='commision-single-image'
            // data-content={sampleImg.name}
            // eslint-disable-next-line react/jsx-no-duplicate-props
            // data-content={sampleImg.size}
          >
            <img
              // className='{sampleImg.class[i]}'
              // data-content={sampleImg.size}
              src={sampleImg.image}
              alt={sampleImg.name}
            />

            <div className='overlay-text' activeClassName='{sampleImg.clName}'>
              <p>{sampleImg.name}</p>
              <p>{sampleImg.size}</p>
              <p>{sampleImg.info}</p>
            </div>
          </div>
        ))}
      </div>
      {/* </div> */}
      <PrintPrice />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default Commissions
