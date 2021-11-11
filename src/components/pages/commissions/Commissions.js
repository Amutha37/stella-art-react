import React from 'react'
// import peacefuljourney from './peacefuljourney.jpg'
import Footer from '../Footer/Footer'
import { CommissionSamples } from '../../../components/Images/Images'
import { Testimonial } from '../../../components/fetchMessage/Testimonial'
import './commission.css'

function Commissions() {
  return (
    <div className='commission-container'>
      {/* blury background */}
      <div className='hero-image-container'>
        <div className='bg-image'></div>

        <div className='bg-text'>
          <h1>Commission an Artwork</h1>
          <p></p>
        </div>
      </div>
      <div className='commission-samples'>
        {CommissionSamples.map((sampleImg, i) => (
          <div key={i} className='portrai-sample'>
            <img src={sampleImg.image} alt={sampleImg.name} />
          </div>
        ))}
      </div>
      <Testimonial />
      <Footer />
    </div>
  )
}

export default Commissions
