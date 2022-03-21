import React from "react";
// import Footer from "../../Footer/Footer";
import ContactForm from "../../Form/contactForm";
// import "./contact.css";
// import emailjs from "emailjs-com";
// import Select from "react-select";

const Contact = () => {
  //   const [formData, setFormData] = useState({});
  //   const [countFinding, setcountFinding] = useState({});
  //   const [countEnquiries, setCountEnquiries] = useState({});
  //   // const [enquiries, setEnquiries] = useState("");
  //   const [thankMsg, setThankMsg] = useState(false);

  //   const handleInput = (e) => {
  //     const copyFormData = { ...formData };
  //     copyFormData[e.target.name] = e.target.value;
  //     setFormData(copyFormData);
  //   };

  //   const summitData = async (e) => {
  //     e.preventDefault();
  //     setThankMsg(true);
  //     // Amutha
  //     emailjs
  //       .sendForm(
  //         "service_1lpa9id",
  //         "template_n6n6r8p",
  //         e.target,
  //         "user_etuc4QBUGfJPQyWZealTj"
  //       )
  //       // stella
  //       // emailjs
  //       //   .sendForm(
  //       //     "service_8wvri2s",
  //       //     "template_l28p8xt",
  //       //     e.target,
  //       //     "user_A0rfHSP2yohzhMSJ4oDEU"
  //       //   )
  //       .then((res) => {
  //         console.log(res);
  //       })
  //       .catch((err) => console.log(err));

  //     // googlesheet CLIENT
  //     const myHeaders = new Headers();
  //     await myHeaders.append("Content-Type", "application/json");
  //     const requestOptions = {
  //       method: "post",
  //       headers: myHeaders,
  //       redirect: "follow",
  //       body: JSON.stringify([
  //         [
  //           formData.fname,
  //           formData.lname,
  //           formData.email,
  //           formData.message,
  //           new Date().toLocaleString(),
  //         ],
  //       ]),
  //     };
  //     // AmuthA
  //     fetch(
  //       "https://v1.nocodeapi.com/amutha/google_sheets/sDBpXXCxMheMRxIY?tabId=Feedback",
  //       requestOptions
  //     )
  //       // STELLA'S
  //       // fetch(
  //       //   "https://v1.nocodeapi.com/stellak/google_sheets/ibmNMYYgtHKNLrwp?tabId=Clients",
  //       //   requestOptions
  //       // )
  //       .then((response) => response.text())
  //       .catch((error) => console.log("error", error));

  //     //   survery form

  //     // googlesheet
  //     const myHeadersSurvey = new Headers();
  //     await myHeadersSurvey.append("Content-Type", "application/json");
  //     const requestcountFindings = {
  //       method: "post",
  //       headers: myHeaders,
  //       redirect: "follow",
  //       body: JSON.stringify([
  //         [
  //           countFinding.google,
  //           countFinding.facebook,
  //           countFinding.instagram,
  //           countFinding.bluethumb,
  //           countFinding.family,
  //           countFinding.other,
  //           new Date().toLocaleString(),
  //         ],
  //       ]),
  //     };
  //     // Amutha
  //     fetch(
  //       "https://v1.nocodeapi.com/amutha/google_sheets/sDBpXXCxMheMRxIY?tabId=Survey",
  //       requestcountFindings
  //     )
  //       // .then(console.log("requestcountFindings", requestcountFindings))
  //       // STELLA'S
  //       // fetch(
  //       //   "https://v1.nocodeapi.com/stellak/google_sheets/ibmNMYYgtHKNLrwp?tabId=Survey",
  //       //   requestcountFindings
  //       // )
  //       .then((response) => response.text())
  //       .catch((error) => console.log("error", error));
  //     // setcountFinding({});

  //     //   collect service data
  //     const myHeaderEnquiries = new Headers();
  //     await myHeaderEnquiries.append("Content-Type", "application/json");
  //     const requestcountEnquiries = {
  //       method: "post",
  //       headers: myHeaders,
  //       redirect: "follow",
  //       body: JSON.stringify([
  //         [
  //           countEnquiries.Commissions,
  //           countEnquiries.Portrait,
  //           countEnquiries.Classes,
  //           countEnquiries.General,
  //           new Date().toLocaleString(),
  //         ],
  //       ]),
  //     };

  //     // Amutha
  //     fetch(
  //       "https://v1.nocodeapi.com/amutha/google_sheets/sDBpXXCxMheMRxIY?tabId=Enquiries",
  //       requestcountEnquiries
  //     )
  //       .then(console.log("requestcountEnquiries", requestcountEnquiries))
  //       // STELLA'S enquiries data
  //       // fetch(
  //       //   "https://v1.nocodeapi.com/stellak/google_sheets/ibmNMYYgtHKNLrwp?tabId=Enquiries",
  //       //   requestcountEnquiries
  //       // )
  //       .then((response) => response.text())
  //       .catch((error) => console.log("error", error));

  //     reset();
  //   };

  //   const handleSelect = (e) => {
  //     const copycountFinding = { ...countFinding };
  //     copycountFinding[e.target.value] = 1;
  //     setcountFinding(copycountFinding);
  //   };

  //   const handleEnquiries = (e) => {
  //     const arrValue = e.label;
  //     console.log(arrValue);
  //     setCountEnquiries({});
  //     const copycountEnquiries = { ...countEnquiries };
  //     copycountEnquiries[arrValue] = 1;
  //     setCountEnquiries(copycountEnquiries);
  //   };

  //   const reset = () => {
  //     // setFormData({});
  //     formData.fname = " ";
  //     formData.lname = " ";
  //     formData.email = " ";
  //     formData.message = " ";
  //     countFinding.google = "";
  //     countFinding.facebook = "";
  //     countFinding.instagram = "";
  //     countFinding.bluethumb = "";
  //     countFinding.family = "";
  //     countFinding.other = "";
  //     countEnquiries.Classes = "";
  //     countEnquiries.Portrait = "";
  //     countEnquiries.Commissions = "";
  //     countEnquiries.General = "";
  //   };

  return (
    <div>
      <ContactForm />
      {/* <Footer /> */}
    </div>
  );
};
export default Contact;
