import React, { useState } from "react";
import "./contact.css";
import emailjs from "emailjs-com";
// import Footer from "../Footer/Footer";

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
  };

  return (
    <>
      <div className="maincontainer">
        <div className="contact-form1">
          <h1>Contact Form under construction ⚠️ ⚠️</h1>
        </div>
        <div className="contact-form">
          <form
            className="input-form"
            id="feedback"
            name="feedback"
            required
            onSubmit={sendData}
          >
            <div>
              <label>Name:</label>
              <input name="name" type="text" required onChange={handleInput} />
            </div>
            <div>
              <label>E-mail :</label>
              <input
                name="email"
                type="email"
                required
                onChange={handleInput}
              />
            </div>
            <div>
              <label>Message :</label>
              <textarea name="message" onChange={handleInput} />
              <input name="submit" type="submit" value="Send" />
            </div>
          </form>
        </div>
      </div>

      <div className="copyright">
        <hr></hr>

        <p>
          Copyright
          {""}
          <i className="far fa-copyright"> </i>
          {""} 2021 All Right Reserved.
        </p>
      </div>
    </>
  );
};
export default Contact;
