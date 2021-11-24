import React, { useState } from 'react'
// import { SocialMedia } from '../../fetchMessage/SocialMedia';
import Footer from '../../Footer/Footer'
import './contact.css'
import emailjs from 'emailjs-com'

const Contact = () => {
  const [formData, setFormData] = useState({})
  const [thankMsg, setThankMsg] = useState(false)

  const handleInput = (e) => {
    const copyFormData = { ...formData }
    copyFormData[e.target.name] = e.target.value
    setFormData(copyFormData)
  }

  const sendData = async (e) => {
    e.preventDefault()
    // email
    // stella
    // emailjs
    //   .sendForm(
    //     "service_8wvri2s",
    //     "template_l28p8xt",
    //     e.target,
    //     "user_A0rfHSP2yohzhMSJ4oDEU"
    //   )
    // Amutha
    setThankMsg(true)

    emailjs
      .sendForm(
        'service_1lpa9id',
        'template_n6n6r8p',
        e.target,
        'user_etuc4QBUGfJPQyWZealTj'
      )
      .then((res) => {
        console.log(res)
      })
      .catch((err) => console.log(err))
    // googlesheet
    const myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')
    const requestOptions = {
      method: 'post',
      headers: myHeaders,
      redirect: 'follow',
      body: JSON.stringify([
        [
          formData.name,
          formData.email,
          formData.message,
          new Date().toLocaleString(),
        ],
      ]),
    }
    // Amutha'sgit
    fetch(
      'https://v1.nocodeapi.com/amutha/google_sheets/sDBpXXCxMheMRxIY?tabId=Feedback',
      requestOptions
    )
      // STELLA'S
      // fetch(
      //   "https://v1.nocodeapi.com/stellak/google_sheets/ibmNMYYgtHKNLrwp?tabId=Clients",
      //   requestOptions
      // )
      .then((response) => response.text())
      .catch((error) => console.log('error', error))
    setFormData({})
    reset()
  }
  const reset = () => {
    formData.name = ''
    formData.email = ''
    formData.message = ''
  }
  return (
    <div>
      <div className='contact-main '>
        <div className='bg-image'></div>
        <header className='bg-text'>
          <p>Contact me</p>
        </header>
        {/* <div className='bg-text'>
          <h1>Commission an Artwork</h1>
          <p>Oil and/or acrylic on canvas or wood panel.</p>
          <p> FREE SHIPPING in Australia</p>
        </div> */}
        <div className='contact-note'>
          <p>Please fell free to contact me for any enquiries or comments.</p>
        </div>
        <div className='form-container'>
          <p id='contact-form-title'>Contact Stella</p>
          <form className='input-form' required onSubmit={sendData}>
            <div className='login'>
              {/* <label>Name:</label> */}

              <input
                name='name'
                type='text'
                required
                placeholder='Your Name'
                onChange={handleInput}
                className='input'
              />
            </div>
            {/* <div className='required-astrick-name'>*</div> */}
            <div className='login'>
              {/* <label>E-mail :</label> */}

              <input
                name='email'
                type='email'
                required
                placeholder='Your Email Address'
                onChange={handleInput}
                className='input'
              />
            </div>
            {/* <div className='required-astrick-email'>*</div> */}

            {/* <div className="subject">
            <input type="text" placeholder="Subject" className="input" />
          </div> */}

            <div className='msg'>
              <label>Message :</label>
              <textarea
                name='message'
                required
                className='area'
                placeholder='Leave a Message'
                onChange={handleInput}
              ></textarea>
              {/* <div className='required-astrick-message'>*</div> */}
            </div>

            <div id='thank-you-container'>
              {!thankMsg ? (
                <div className='btn'>
                  <input
                    className='btn'
                    name='submit'
                    type='submit'
                    value='Send'
                  />
                </div>
              ) : (
                <p id='thank-you'> Submited Thank you!</p>
              )}
            </div>

            {/* social media */}
            {/* <div>
              <div className='social-media'>
                <p>Follow me ⤵️ </p>
                <div className='icons'>
                  <a href='https://www.facebook.com/search/top?q=stellas_art'>
                    <div className='layer'>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span className='fab fa-facebook-f'>
                        
                      </span>
                    </div>
                    <div className='text'>Facebook</div>
                  </a>
                  <a href='https://twitter.com/KypriotisStella'>
                    <div className='layer'>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span className='fab fa-twitter'></span>
                    </div>
                    <div className='text'>Twitter</div>
                  </a>
                  <a href='https://www.instagram.com/stellas_art3/'>
                    <div className='layer'>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span className='fab fa-instagram'></span>
                    </div>
                    <div className='text'>Instagram</div>
                  </a>
                  <a href='https://www.linkedin.com/in/stella-kypriotis-949101206/'>
                    <div className='layer'>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span className='fab fa-linkedin-in'></span>
                    </div>
                    <div className='text'>Linkedin</div>
                  </a>
                 
                </div> */}
            {/* </div> */}
            {/* </div> */}
            {/* <SocialMedia /> */}
          </form>
        </div>

        {/* <p>
          Copyright
          {''}
          <i className='far fa-copyright contact-icons' id='contact-copyright'>
            {' '}
          </i>
          {''} 2021 All Right Reserved.
        </p> */}
        <Footer />
      </div>
    </div>
  )
}
export default Contact
