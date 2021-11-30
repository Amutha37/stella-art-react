import React from 'react'
import Buttons from './Buttons'

const Fullimageview = ({
  status,
  slides,
  slideIndex,
  plusSlides,
  PrintMessage,
}) => {
  return (
    <>
      {slides.map((item, index) => (
        <div
          className='mySlides'
          style={status[index] ? { display: 'block' } : { display: 'none' }}
          key={index}
        >
          {<img src={item.image} alt={item.name} />}
          {/* {index === slides.length - 1 ? null : (
            <img src={item.image} alt={item.name} />
          )} */}

          {/* contact note */}
          {/* {PrintMessage && slideIndex === slides.length && (
            <div className='contactnote'>{PrintMessage}</div>
          )} */}
        </div>
      ))}

      <Buttons plusSlides={plusSlides} />
      {/* <div className='caption-container'> */}
      <div id='caption'>
        <p>{slides[slideIndex - 1].name} </p>{' '}
        <p className='imagesize'>{slides[slideIndex - 1].size}</p>
      </div>

      {/* <img src={item.image} alt={item.name} /> */}
      {/* </div> */}
    </>
  )
}

export default Fullimageview
