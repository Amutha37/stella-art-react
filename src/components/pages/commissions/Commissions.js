import React from 'react'
// import peacefuljourney from './peacefuljourney.jpg'
import Footer from '../Footer/Footer'
import './commission.css'

function Commissions() {
  return (
    // <div classNameName='ui inverted vertical masthead center aligned segment'>
    //   <div className='ui text container'>
    //     <p className='ui inverted header'>My name</p>
    //     <h2>My role</h2>
    //     <div className='ui huge primary button' id='note2'>
    //       Get Started
    //     </div>
    //   </div>
    //   <Footer />
    // </div>
    <>
      <div
        className='hero-image'
        // style={{ backgroundImage: `url(${peacefuljourney})` }}
      >
        <div className='hero-text'>
          <h1>I am Stella Krypriotis</h1>
          <p>And I'm an Artist</p>
          {/* <button>Hire me</button> */}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Commissions
