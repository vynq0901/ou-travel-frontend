import React from "react";
import "./Footer.scss";
import facebook from "../../assets/images/facebook.svg";
import instagram from "../../assets/images/instagram.svg";
import google from "../../assets/images/google-glass-logo.svg";
export default function Footer() {
  return (
    <div className="footer">
      <a href="#" className="company-logo">
        <img className="logo-img" src="./assets/images/wave.svg" alt="" />
        <span className="logo-text">OU Travel</span>
      </a>
      <div className="copyright">
        <p>&copy; 2021 OU Travel. All rights reserved</p>
      </div>
      <div className="social">
        <a href="#" className="social-item">
          <img className="social-item-img" src={facebook} alt="" />
        </a>
        <a href="#" className="social-item">
          <img className="social-item-img" src={instagram} alt="" />
        </a>
        <a href="#" className="social-item">
          <img className="social-item-img" src={google} alt="" />
        </a>
      </div>
    </div>
  );
}
