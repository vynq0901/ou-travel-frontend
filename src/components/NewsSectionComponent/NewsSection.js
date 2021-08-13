import React from "react";
import "./NewsSection.scss";

import News from "../NewsComponent/News";
import Carousel from "../CarouselComponent/Carousel";

export default function NewsSection() {
  return (
    <section className="news-section">
      <div className="section-head">
        <h1 className="section-heading">Tin tức</h1>
        <a href="#" className="button">
          XEM TẤT CẢ
        </a>
      </div>
      <div className="news-container">
        <Carousel />
      </div>
    </section>
  );
}
