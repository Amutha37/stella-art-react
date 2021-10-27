import React from "react";

function ThumbNailImages({ slides, currentSlide, status }) {
  return (
    //  <!-- Thumbnail images -->
    <div className="row">
      {slides.map((item, i) => (
        <div key={i} className="column">
          <img
            className={`cursor ${status[i] ? "current" : "demo"}`}
            src={item.image}
            alt={item.name}
            id={item.id}
            onClick={currentSlide}
          />
        </div>
      ))}
    </div>
  );
}

export default ThumbNailImages;
