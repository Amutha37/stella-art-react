import React, { useState } from 'react'
// import peacefuljourney from './peacefuljourney.jpg'
import Footer from '../Footer/Footer'
import { CommissionSamples } from '../../../components/Images/Images'
import { Testimonial } from '../../../components/fetchMessage/Testimonial'
import { PrintPrice } from '../../../components/fetchMessage/PriceTable'
import './commission.css'

function Commissions() {
  const [hover, setHover] = useState(false)
  const onHover = () => {
    setHover(!hover)
  }
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
      <div className='image-container'>
        <div className='commission-samples'>
          {CommissionSamples.map((sampleImg, i) => (
            <div
              key={i}
              className='portrai-sample'
              // data-content={sampleImg.name}
              // eslint-disable-next-line react/jsx-no-duplicate-props
              // data-content={sampleImg.size}
            >
              <img
                // className='portrai-sample'
                // data-content={sampleImg.size}
                src={sampleImg.image}
                alt={sampleImg.name}
                onMouseEnter={onHover}
                onMouseLeave={onHover}
              />
              {/* {hover && (
                <div className='overlay'>
                  <div className='text'>
                    <p>{sampleImg.name}</p>
                    <p>{sampleImg.size}</p>
                    <p>{sampleImg.info}</p>
                  </div>
                </div>
              )} */}
            </div>
          ))}
        </div>
      </div>
      <PrintPrice />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default Commissions
