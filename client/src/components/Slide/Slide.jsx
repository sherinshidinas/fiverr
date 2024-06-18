import React from "react";
import "./Slide.scss";

import Slider from "react-slick";

function Slide({ children, settings }) {
  return (
    <div className="slide">
      <div className="container">
        <h2 className="slider-title">Inspiring work made on Fiverr</h2>
        <Slider {...settings}>{children}</Slider>
      </div>
    </div>
  );
}

export default Slide;
