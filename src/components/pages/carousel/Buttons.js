import React from "react";

// Next and previous buttons
function Buttons({ plusSlides }) {
  return (
    <div>
      {/* <a class="prev" onclick="plusSlides(-1)">
        ❮
      </a>
      <a class="next" onclick="plusSlides(1)">
        ❯
      </a> */}
      {/* <a className="prev" value="-1" onClick={plusSlides}>
        &#10094;
        {/* ◀︎ 
      </a>
      <a className="next" value="1" onClick={plusSlides}>
        {/* ► 
        #10095;
      </a> */}
      <button className="prev" value="-1" onClick={plusSlides}>
        ◀︎
      </button>
      <button className="next" value="1" onClick={plusSlides}>
        ►
      </button>
    </div>
  );
}

export default Buttons;
