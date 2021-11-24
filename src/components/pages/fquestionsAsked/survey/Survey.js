import React, { useState } from 'react'
// import Footer from "../Footer/Footer";
import '../frequently_asked_questions.css'

const Survey = () => {
  const [countOption, setCountOption] = useState({})
  const [surveyThankMsg, setSurveyThankMsg] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSurveyThankMsg(true)
    // googlesheet
    const myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')
    const requestCountOptions = {
      method: 'post',
      headers: myHeaders,
      redirect: 'follow',
      body: JSON.stringify([
        [
          countOption.google,
          countOption.facebook,
          countOption.instagram,
          countOption.bluethumb,
          countOption.family,
          countOption.other,
          new Date().toLocaleString(),
        ],
      ]),
    }
    // Amutha'sgit

    fetch(
      'https://v1.nocodeapi.com/amutha/google_sheets/sDBpXXCxMheMRxIY?tabId=Survey',
      requestCountOptions
    )
      // STELLA'S
      // fetch(
      //   'https://v1.nocodeapi.com/stellak/google_sheets/ibmNMYYgtHKNLrwp?tabId=Survey',
      //   requestCountOptions
      // )
      .then((response) => response.text())
      .catch((error) => console.log('error', error))
    setCountOption({})
  }
  const handleSelect = (e) => {
    const copycountOption = { ...countOption }
    copycountOption[e.target.value] = 1
    setCountOption(copycountOption)
  }

  return (
    <div className='survey'>
      {/* <h3>A quick survey : </h3> */}
      {/* <p>How did you find my website?</p> */}
      <div className='wrapper'>
        <div className='title'>How did you find my website?</div>
        <form onSubmit={handleSubmit}>
          <div className='box'>
            <input
              type='radio'
              name='select'
              id='option-1'
              value='google'
              onChange={handleSelect}
            ></input>
            <input
              type='radio'
              name='select'
              id='option-2'
              value='facebook'
              onChange={handleSelect}
            ></input>
            <input
              type='radio'
              name='select'
              id='option-3'
              value='instagram'
              onChange={handleSelect}
            ></input>
            <input
              type='radio'
              name='select'
              id='option-4'
              value='bluethumb'
              onChange={handleSelect}
            ></input>
            <input
              type='radio'
              name='select'
              id='option-5'
              value='family'
              onChange={handleSelect}
            ></input>
            <input
              type='radio'
              name='select'
              id='option-6'
              value='other'
              onChange={handleSelect}
            ></input>

            <label for='option-1' type='radio' className='option-1'>
              <div className='dot'></div>
              <div className='text'>Google</div>
            </label>

            <label for='option-2' type='radio' className='option-2'>
              <div className='dot'></div>
              <div className='text'>Facebook</div>
            </label>

            <label for='option-3' type='radio' className='option-3'>
              <div className='dot'></div>
              <div className='text'>Instagram</div>
            </label>

            <label for='option-4' type='radio' className='option-4'>
              <div className='dot'></div>
              <div className='text'>Bluethumb</div>
            </label>

            <label for='option-5' type='radio' className='option-5'>
              <div className='dot'></div>
              <div className='text'>Family/friend</div>
            </label>

            <label for='option-6' type='radio' className='option-6'>
              <div className='dot'></div>
              <div className='text'>Other</div>
            </label>
          </div>
          <div className='form-group'>
            {!surveyThankMsg ? (
              <button type='submit' className='btn-count'>
                Submit
              </button>
            ) : (
              <p id='thank-you'> Thank you!</p>
            )}
          </div>
        </form>
      </div>
      {/* <Footer /> */}
    </div>
  )
}
export default Survey
