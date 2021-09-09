import React from "react";
import Buttons from "./Buttons";
function Thumbnailimages(props) {
  const { slides, currentSlide, status,plusSlides} = props;

  // console.log(props);
  return (
    //  <!-- Thumbnail images -->
    <div className="row">
      {slides.map((item, i) => (
        <div key={i} className="column">
          <img
            className={`cursor ${status[i] ? "active" : "demo"}`}
            src={item.image}
            alt={item.name}
            // style={{ width: "100%" }}
            id={item.id}
            onClick={currentSlide}
          />
          <Buttons plusSlides={plusSlides} />
        </div>
      ))}
      
    </div>
  );
}

export default Thumbnailimages;
