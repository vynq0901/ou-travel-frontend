import React from "react";
import Slider from "react-slick";
import News from "../NewsComponent/News";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    autoplaySpeed: 2000,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <News />
      </div>
      <div>
        <News />
      </div>
      <div>
        <News />
      </div>
      <div>
        <News />
      </div>
      <div>
        <News />
      </div>
      <div>
        <News />
      </div>
    </Slider>
  );
}
