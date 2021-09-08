import React from "react";

function Thumbnailimages(props) {
  const { slides, currentSlide, status } = props;

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
        </div>
      ))}
    </div>
  );
}

export default Thumbnailimages;
