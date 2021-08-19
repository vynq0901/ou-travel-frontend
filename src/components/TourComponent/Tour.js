import React from "react";
import "./Tour.scss";
export default function Tour(props) {
  return (
    <div className="tour best-tours-item">
      <div className="tour-img">
        <img alt="img" src="./assets/images/phu-quoc.jpg" />
        <div className="tour-img-overlay">
          <a href="#" className="button">
            Xem chi tiết
          </a>
        </div>
      </div>

      <a href="#" className="tour-desc">
        <div className="tour-title">
          <h1></h1>
        </div>
        <div className="tour-date">
          <p>Khởi hành: 10/08/2021</p>
        </div>
        <div className="tour-place-price">
          <h1 className="tour-place">
            <img src="./assets/images/des-icon.svg" />
            Phu Quoc
          </h1>
          <p className="tour-price">3500000</p>
        </div>
      </a>
    </div>
  );
}
