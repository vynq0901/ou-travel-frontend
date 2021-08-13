import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.scss";
import arrowLeft from "../../assets/images/arrow-left.svg";
import arrowRight from "../../assets/images/arrow-right.svg";
import React, { Component } from "react";
import News from "../NewsComponent/News";
import Slider from "react-slick";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src={arrowRight}
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src={arrowLeft}
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}
export default class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      pauseOnHover: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      appendDots: (dots) => (
        <div
          style={{
            backgroundColor: "#fff",
            paddingTop: "10px",
            paddingRight: "10px",
          }}
        >
          <ul style={{ margin: "0px" }}> {dots} </ul>
        </div>
      ),
      customPaging: (i) => (
        <div
          style={{
            width: "10px",
            borderRadius: "10px",
            color: "#ddd",
            backgroundColor: "#ddd",
          }}
        >
          {i + 1}
        </div>
      ),
    };
    return (
      <div>
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
      </div>
    );
  }
}
