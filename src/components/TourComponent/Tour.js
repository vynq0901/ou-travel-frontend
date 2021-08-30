import React from "react";
import { Link } from "react-router-dom";
import "./Tour.scss";
export default function Tour({ name, price, time, image, destination, id }) {
  return (
    <div className="tour best-tours-item">
      <div className="tour-img">
        <img alt="img" src={image} />
        <div className="tour-img-overlay">
          <Link to={`tours/${id}`} className="button">
            Xem chi tiết
          </Link>
        </div>
      </div>

      <Link to={`tours/${id}`} className="tour-desc">
        <div className="tour-title">
          <h1>{name}</h1>
        </div>
        <div className="tour-date">
          <p>{time}</p>
        </div>
        <div className="tour-place-price">
          <h1 className="tour-place">
            <img src="./assets/images/des-icon.svg" />
            {destination}
          </h1>
          <p className="tour-price">{price.toLocaleString('vi-VN')} vnd</p>
        </div>
      </Link>
    </div>
  );
}
