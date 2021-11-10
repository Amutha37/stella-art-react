import React from 'react'
// import peacefuljourney from './peacefuljourney.jpg'
// import Footer from '../Footer/Footer'
import './commission.css'

function Commissions() {
  return (
    <div className='commission-container'>
      {/* blury background */}
      <div className='hero-image-container'>
        <div className='bg-image'></div>

        <div className='bg-text'>
          <h1>I am Stella Krypriotis</h1>
          <p>And I'm an Artist</p>
        </div>
      </div>

      <div className='testimonials'>
        <h1>Testimonials</h1>
        <br></br>
        <p>
          "Watching Stella evolve as a person, as a woman and as an artist,
          through her artwork, has been an absolute delight. For me, it was not
          a matter of whether I would own one of Stella's paintings, there was
          never any doubt about that. The only question I had, was which one I
          would connect with, so I waited while, feeling my way to the one for
          me. As soon as I saw the old turtle painting, I knew! It jumped out of
          the computer screen and it seemed that it actually did speak to me,
          and I immediately connected!"
        </p>
        <br></br>

        <p>
          "Stella's art has a kind of extra magic, a way of speaking out as
          though tellling a story, and I love that one can feel the painting as
          though it's breathing, filed with life. Love the art, love the
          artist."
          <br></br>
          <br></br>~ Themis Thomas ~
        </p>
      </div>
      <hr />
      {/* hero image text */}
      {/* <div
        className='hero-image'
      >
        <div className='hero-text'>
          <h1>I am Stella Krypriotis</h1>
          <p>And I'm an Artist</p>
        </div>
      </div> */}

      {/* <Footer /> */}
    </div>
  )
}

export default Commissions
