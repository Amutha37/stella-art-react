import React from "react";

function Footer() {
  return (
    <>
      <div className="copyright">
        <hr></hr>
        <div className="footertext">
          <div className="left">
            <p>
              Copyright
              {""}
              <i class="far fa-copyright"> </i>
              {""} 2022 All Right Reserved.
            </p>
          </div>
          <div className="right">
            <p>share</p>
            <i
              http="https://www.facebook.com/search/top?q=stellas_art"
              className="fab fa-facebook-f"
            ></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-linkedin-in"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
