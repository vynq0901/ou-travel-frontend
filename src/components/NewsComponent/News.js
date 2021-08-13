import React from "react";
import "./News.scss";
export default function News(props) {
  return (
    <div className="news">
      <div className="news-img-container">
        <a href="#" className="news-img-link">
          <img className="news-img" src="./assets/images/hoi-an.jpg" />
        </a>
      </div>
      <div className="news-content">
        <h2 className="news-title">
          <a href="#">
            Top 10 Hotels to Stay At: Exclusive Rating by Sealine Travel Experts
          </a>
        </h2>
        <p className="news-date">29 tháng 07, 2021</p>
      </div>
    </div>
  );
}
