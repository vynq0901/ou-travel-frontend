import React from "react";
import { Link } from "react-router-dom";
import "./Contact.scss";

export default function Contact() {
  return (
    <div className="header-contact">
      <div className="header-contact-item">
        <img
          className="header-contact-item-icon"
          src="./assets/images/phone.svg"
          alt="phone-icon"
        />
        <span className="header-contact-item-text">
          0905-123-456 / 0905-678-345
        </span>
      </div>
      <div className="header-contact-item">
        <img
          className="header-contact-item-icon"
          src="./assets/images/map.svg"
          alt="map-icon"
        />
        <span className="header-contact-item-text">
          371 Nguyen Kiem, Go Vap, HCMC
        </span>
      </div>
      <div className="header-contact-item">
        <img
          className="header-contact-item-icon"
          src="./assets/images/email.svg"
          alt="mail-icon"
        />
        <span className="header-contact-item-text">nqvy0901@gmail.com</span>
      </div>
      <div className="header-contact-item header-user">
        <img
          className="header-contact-item-icon"
          src="./assets/images/user.svg"
          alt="user-icon"
        />
        <span className="header-contact-item-text">
          <Link to="/account" className="user">
            Tài khoản
          </Link>
        </span>
      </div>
    </div>
  );
}
