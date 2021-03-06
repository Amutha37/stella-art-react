import React from 'react'
import './gallery_images.css'
// import Footer from '../../Footer/Footer'

const GalleryImages = ({ galImages }) => {
  console.log('galimages', galImages)
  return (
    <div className='galery-container'>
      <div className='galery-images-row'>
        {galImages.map((galImg, i) => (
          <div key={i} className='galery-image-column'>
            <img src={galImg.image} alt={galImg.name} />
          </div>
        ))}
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default GalleryImages
