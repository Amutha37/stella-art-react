import React from 'react'
import stella from '../../../components/Images/globalimages/StellaArtist.jpg'
import Footer from '../../Footer/Footer'
import '../../../App.css'
// "./Images/globalimages/stellaoutdoor.jpg";
const About = () => {
  return (
    <div>
      <div className='stellaimg'>
        <h3 id='about'>About Stella</h3>
        <div className='image-box'>
          <img className='center-fit' src={stella} alt='Stella' />
        </div>
        <h3>Biography</h3>
        <br></br> <br></br>
        <p>
          Stella Kypriotis is a contemporary realist artist based in Sydney
          {/* Australia. She loves painting a variety of subjects including florals,
          wildlife, landscapes, seascapes and portraits. She paints mainly in
          artists grade oil paints such as Windsor and Newton paints, Michael
          Harding and Art Spectrum on canvas or wooden board ensuring her
          surface is well prepared and varnished for longevity. Putting her
          heart and soul into every painting, she desires that the viewer/
          collector feels connected to her paintings and wants them to feel as
          though they are stepping into another world. */}
        </p>
        <br></br>
        <p>
          As a young child, Stella had a longing to create anything, she enjoyed
          making something out of nothing and gave her a sense of satisfaction.
          She would sit at her mothers sewing machine for hours at a time, and
          try to design a dress for her dolls with the left over material her
          mum was ready to scrap. Her favourite subject in school was Arts, and
          Stella loved listening to the teachers stories from the previous
          artist history. Her teacher asked the students to paint something
          which they felt connected to. Stella went on to paint a large canvas
          of Crying Girl, by Roy Lichtenstein, which was her 1st ever painting.
          She hoped one day she will become an artist but noone around her
          thought there couldn't possible be a career in that, so she put it in
          the back of her mind.
          <br></br> <br></br>
          During her career life she worked in various office roles, which
          didn't leave room for her creativity. She then decided to work in an
          art-shop to help her further explore that field. Then she decided to
          enrol in art-classes with Artist Christopher Vidal to learn to draw
          and paint in oils. She hasn't stopped since, and is grateful for the
          step she chose to take that was her desire.
          <br></br> <br></br>
        </p>
        {/* ARTIST STATEMENT */}
        <h3>Artist's statement</h3>
        <p>
          <br></br> <br></br>I love painting a variety of subjects such as
          florals, wildlife, landscapes, seascapes and portraits. I use artist
          grade oil paints such as Michael Harding, Windsor and Newton,
          Masterclass and Art Spectrum or acrylics on a well prepares primed
          canvas or wooden panel.
          <br></br> <br></br>I love to put my heart and sould into every
          painting I do, my goal is that the viewer/collector feel connected to
          my paintings and love having them displayed in their home for
          generations to come. I paint or draw in my home studio mostly every
          day and whenever possible go plein-air painting in the beautiful
          country Australia where I live and staying connected to other artists.
          <br></br> <br></br>
          "Art is as vital as sunshine and as natural as breathing" - Stella
          Kypriotis
          <br></br> <br></br>
          "Art speaks where words are unable to explain." - Mathiole
          <br></br> <br></br>
        </p>
        <div id='exhibitionNote'>
          <h3>Exhibitions</h3>
          <p>Solo Exhibition,</p>
          <p>Art House Cafe,</p>
          <p>Narellan.</p>
          <p>January 2021.</p>
          <br></br>

          <p>Blue Mountains Art Prize</p>
          <p>Budgies in love</p>
          <p>August 2019.</p>
          <br></br>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About
