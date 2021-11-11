import React from 'react'
// import peacefuljourney from './peacefuljourney.jpg'
import Footer from '../Footer/Footer'
import { CommissionSamples } from '../../../components/Images/Images'
import { Testimonial } from '../../../components/fetchMessage/Testimonial'
import { PrintPrice } from '../../../components/fetchMessage/PriceTable'
import './commission.css'

function Commissions() {
  return (
    <div className='commission-container'>
      {/* blury background */}
      <div className='hero-image-container'>
        <div className='bg-image'></div>

        <div className='bg-text'>
          <h1>Commission an Artwork</h1>
          <p>Artist Stella Kypriotis</p>
        </div>
      </div>
      <div className='commission-samples'>
        {CommissionSamples.map((sampleImg, i) => (
          <div
            key={i}
            className='portrai-sample image space'
            data-content={sampleImg.name}
            // eslint-disable-next-line react/jsx-no-duplicate-props
            // data-content={sampleImg.size}
          >
            <img
              // className='portrai-sample'
              // data-content={sampleImg.size}
              src={sampleImg.image}
              alt={sampleImg.name}
            />
            {/* <div className='overlay'>
              <p className='text'>{sampleImg.name}</p>
              <p className='text'>{sampleImg.size}</p>
              <p className='text'>{sampleImg.info}</p>
            </div> */}
          </div>
        ))}
      </div>
      <PrintPrice />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default Commissions
