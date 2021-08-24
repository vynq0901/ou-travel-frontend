import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { currentUser } from "../../redux/userSlice";
import Logout from "../Logout/Logout";
import "./Contact.scss";

export default function Contact() {
  const user = useSelector(currentUser);
  
  return (
    <div className="header-contact">
      <div className="header-contact-item">
        <img
          className="header-contact-item-icon"
          src="./assets/images/phone.svg"
          alt="phone-icon"
        />
        <span className="header-contact-item-text">
         0935123456 / 0905789312
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
          {user ? <Link className="user">{user.username} <Logout /></Link> :  
          <Link to="/account" className="user">
            Tài khoản
          </Link>}
        </span>
      </div>
    </div>
  );
}
