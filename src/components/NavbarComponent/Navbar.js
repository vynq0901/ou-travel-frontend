import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <div className="header-navbar">
      <Link to="/" className="company-logo">
        <img className="logo-img" src="./assets/images/wave.svg" alt="" />
        <span className="logo-text">OU Travel</span>
      </Link>
      <ul className="menu-list">
        <li className="menu-item">
          <Link to="/" className="menu-item-link">
            Trang chủ
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/tours" className="menu-item-link">
            Tours
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/news" className="menu-item-link">
            Tin tức
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/about" className="menu-item-link">
            Về chúng tôi
          </Link>
        </li>
      </ul>
      <div className="button">ĐẶT CHỖ NGAY</div>
    </div>
  );
}
