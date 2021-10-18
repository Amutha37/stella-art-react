import React, { useState } from "react";
import "./contact.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({});

  const handleInput = (e) => {
    const copyFormData = { ...formData };
    copyFormData[e.target.name] = e.target.value;
    setFormData(copyFormData);
  };

  const sendData = async (e) => {
    e.preventDefault();
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
    emailjs
      .sendForm(
        "service_1lpa9id",
        "template_n6n6r8p",
        e.target,
        "user_etuc4QBUGfJPQyWZealTj"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    // googlesheet
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
      method: "post",
      headers: myHeaders,
      redirect: "follow",
      body: JSON.stringify([
        [
          formData.name,
          formData.email,
          formData.message,
          new Date().toLocaleString(),
        ],
      ]),
    };
    // Amutha'sgit
    fetch(
      "https://v1.nocodeapi.com/amutha/google_sheets/sDBpXXCxMheMRxIY?tabId=Feedback",
      requestOptions
    )
      // STELLA'S
      // fetch(
      //   "https://v1.nocodeapi.com/stellak/google_sheets/ibmNMYYgtHKNLrwp?tabId=Clients",
      //   requestOptions
      // )
      .then((response) => response.text())
      .catch((error) => console.log("error", error));
    setFormData({});
  };

  return (
    <div>
      {/* <div> */}
      <div className="contact-main ">
        {/* <h1>Under construction ⚠️ </h1> */}

        <div className="form-container">
          <p id="contact-form-title">Contact Stella</p>
          <form
            className="input-form"
            // id="feedback"
            // name="feedback"
            required
            onSubmit={sendData}
          >
            <div className="login">
              {/* <label>Name:</label> */}
              <input
                name="name"
                type="text"
                required
                placeholder="Your Name"
                onChange={handleInput}
                className="input"
              />
            </div>
            <div className="login">
              {/* <label>E-mail :</label> */}
              <input
                name="email"
                type="email"
                required
                placeholder="Your Email Address"
                onChange={handleInput}
                className="input"
              />
            </div>

            {/* <div className="subject">
            <input type="text" placeholder="Subject" className="input" />
          </div> */}

            <div className="msg">
              <label>Message :</label>
              <textarea
                name="message"
                className="area"
                placeholder="Leave a Message"
                onChange={handleInput}
              ></textarea>
            </div>

            <div className="btn">
              <input className="btn" name="submit" type="submit" value="Send" />
            </div>

            {/* social media */}
            <div>
              <div className="social-media">
                <p>Follow me ⤵️ </p>
                <div className="icons">
                  <a href="https://www.facebook.com/search/top?q=stellas_art">
                    <div className="layer">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span className="fab fa-facebook-f">
                        {/* <AiFillLinkedin />{" "} */}
                      </span>
                    </div>
                    <div className="text">Facebook</div>
                  </a>
                  <a href="https://www.instagram.com/stellas_art3/">
                    <div className="layer">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span className="fab fa-twitter"></span>
                    </div>
                    <div className="text">Twitter</div>
                  </a>
                  <a href="https://www.instagram.com/stellas_art3/">
                    <div className="layer">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span className="fab fa-instagram"></span>
                    </div>
                    <div className="text">Instagram</div>
                  </a>
                  <a href="https://www.instagram.com/stellas_art3/">
                    <div className="layer">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span className="fab fa-linkedin-in"></span>
                    </div>
                    <div className="text">Linkedin</div>
                  </a>
                  <a href="https://www.instagram.com/stellas_art3/">
                    <div className="layer">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span className="fab fa-youtube"></span>
                    </div>
                    <div className="text">YouTube</div>
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>
        {/* <Footer /> */}
        {/* </div> */}
        {/* <div className="classNacontact-main"> */}
        <p>
          Copyright
          {""}
          <i className="far fa-copyright"> </i>
          {""} 2021 All Right Reserved.
        </p>
      </div>
    </div>
  );
};
export default Contact;
