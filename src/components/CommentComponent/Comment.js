import React from "react";
import { FaUser } from "react-icons/fa";
import avatar from "../../assets/images/avatartest.jpg"
import './Comment.scss'
export default function Comment() {
  return (
    <div className="comment">
      <div className="user">
        <img className="user-avatar" src={avatar} />
        <p className="username">Vỹ Đẹp Chai</p>
      </div>
      <div className="comment-section">
        <div className="rating">
          <div className="rating-score">10.0</div>
          <p className="rating-desc">Tuyệt vời</p>
        </div>
        <p className="comment-content">Rất hài lòng về tour, good!</p>
      </div>
    </div>
  );
}
