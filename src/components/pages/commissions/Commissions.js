import React from 'react'
import { CommissionSamples } from '../../../components/Images/Images'
import { Testimonial } from '../../../components/fetchMessage/Testimonial'
// import { PrintPrice } from '../../../components/fetchMessage/PriceTable'
import './commission.css'
import Footer from '../../Footer/Footer'

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
      {/* notes for commission */}
      <div className='commission-note'>
        {/* <p className='commission-text'>
          If you are interested in commissioning me to do a custom painting for
          you or a loved one, please leave your details in the contact section
          provided. I would then get in the contact with you to discuss what
          your preferences are like the size of your painting, the colour scheme
          to match the decor of your home, your budget and how long your
          painting should roughly take.
        </p> */}
        <p>
          If you are interested in commissioning me to do a custom painting for
          you or a loved one, please leave your details in the contact section
          provided. I would contact you to discuss what you are considering for
          a painting, the size of your canvas, your budget and how long it
          should roughly take, (depending if I have other commission work needed
          to be completed first).
          {/* I would then get in contact with you to discuss what your
          preferences are like the size of your painting, the colour scheme to
          match the decor of your home, your budget and how long your painting
          should roughly take. */}
        </p>
        {/* <a href='/contact' component={Contact}>
            {' '}
            contact
          </a> */}
        <br></br>
        <p>
          If you and I are both happy with the duscussion and you would like to
          go ahead, I will then start on the exciting journey of your painting.
          I will keep you informed on the progress painting and will send you
          development photos along the way. On the final photo if there are any
          minor adjustments we will look at that too.
          {/* I will send you development photos of your painting to keep you
          informed of the process.  */}
        </p>
        <br></br>
        <p>
          Upon completion, I will varnish your work (minimum 2 - 4 weeks) when
          dry for longevity and then mail it to you once the final payment is
          received.
        </p>
        <br></br>
      </div>
      {/* <div className='image-container'> */}
      <div className='commission-images-row'>
        {CommissionSamples.map((sampleImg, i) => (
          <div
            key={i}
            className='commission-image-column'
            // data-content={sampleImg.name}
            // eslint-disable-next-line react/jsx-no-duplicate-props
            // data-content={sampleImg.size}
          >
            <img
              // data-content={sampleImg.size}
              src={sampleImg.image}
              alt={sampleImg.name}
            />

            {/* <div className='overlay'>
              <div className='text'>
                <p>{sampleImg.name}</p>
                <p>{sampleImg.size}</p>
                <p>{sampleImg.info}</p>
              </div>
            </div> */}
          </div>
        ))}
      </div>
      {/* </div> */}
      {/* <PrintPrice /> */}
      <Testimonial />
      <Footer />
    </div>
  )
}

export default Commissions
