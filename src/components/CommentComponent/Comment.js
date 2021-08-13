import React from "react";
import { FaUser } from "react-icons/fa";
export default function Comment() {
  return (
    <div className="comment">
      <div className="username">
        <FaUser />
        Nguyễn Quốc Vỹ
      </div>
      <div>
        <div className="rating">
          <div className="rating-score">10.0</div>
          <p className="rating-desc">Tuyệt vời</p>
          <p className="rating-date">29/07/2021</p>
        </div>
        <p className="comment-content">Mình hài lòng về tour, good!</p>
      </div>
    </div>
  );
}
