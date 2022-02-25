import React from 'react'
// import { CommissionSamples } from '../../Images/Images'
import { MastercopiesImages } from '../../Images/Images'
import { NatureImages } from '../../Images/Images'
import { PetportraitsImages } from '../../Images/Images'
import { PortraitImages } from '../../Images/Images'
import { WildLifeImages } from '../../Images/Images'
import { FloralImages } from '../../../components/Images/Images'
// import './galery.css'
import GaleryImages from '../../GaleryImages/GaleryImages'
import Footer from '../../Footer/Footer'

const Galery = () => {
  return (
    <div className='galery-container'>
      {/* blury background */}
      <div className='hero-image-container'>
        <div className='bg-image'>
          <div className='bg-text'>
            <h1>Commission an Artwork</h1>
            <p>Oil and/or acrylic on canvas or wood panel.</p>
            <p> FREE SHIPPING in Australia</p>
          </div>
        </div>
      </div>
      {/* <GaleryImages galImages={CommissionSamples} /> */}
      <GaleryImages galImages={MastercopiesImages} />
      <GaleryImages galImages={NatureImages} />
      <GaleryImages galImages={PortraitImages} />
      <GaleryImages galImages={PetportraitsImages} />
      <GaleryImages galImages={WildLifeImages} />
      <GaleryImages galImages={FloralImages} />

      <Footer />
    </div>
  )
}

export default Galery
