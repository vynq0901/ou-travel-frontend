import React from "react";

import Comments from "../components/CommentsComponent/Comments";
import { SiGooglemaps } from "react-icons/si";
import { BsFillClockFill } from "react-icons/bs";
export default function TourDetail() {
  return (
    <div>
      <div className="tour-title">
        <h1>Tour Phú Quốc 3N2D: Khám Phá Thiên Đường Biển Đảo</h1>
      </div>
      <div className="tour-rating">
        <div className="tour-rating-score">9.8</div>
        <p className="tour-rating-desc">Tuyệt vời</p>
        <p className="tour-rating-times">8 đánh giá</p>
      </div>
      <div className="details">
        <section className="tour-detail">
          <div className="tour-detail-img">
            <img src="" />
          </div>
          <div className="tour-place-duration">
            <div className="tour-place">
              <SiGooglemaps />
              Phú Quốc
            </div>
            <div className="tour-durarion">
              <BsFillClockFill /> 3 Ngày 2 Đêm
            </div>
            <div className="tour-id">Mã Tour: TO2907</div>
          </div>
          <div className="tour-description">
            <img src="../assets/images/phu-quoc.jpg" />
            <p className="tour-description-article">
              Phú Quốc được mệnh danh là thiên đường nghỉ dưỡng với: - Làng Chài
              Hàm Ninh: Nơi đây phong phú nhiều về các loại hải sản tươi sống
              như ghẹ, cua, ốc nhảy, bào ngư, cá ngựa,… - Suối Tranh: Đến đây
              Quý khách thỏa sức khám phá leo núi và ngâm mình vào dòng nước
              trong mát, ngắm dòng suối đẹp như một bức tranh. - Bãi Sao: Đắm
              mình cùng làn nước trong mát của biển xanh cát trắng của bãi biển
              đẹp nhất Phú Quốc và là điểm đến không thể thiếu trong mọi hành
              trình khám phá Đảo Ngọc. - Di tích lịch sử nhà tù Phú Quốc: minh
              chứng hùng hồn cho công cuộc đấu tranh đầy gian khổ và tinh thần
              bất khuất của nhân dân ta trong các cuộc đấu tranh chống thực dân
              Pháp và Đế quốc Mỹ.
            </p>
            <img src="../assets/images/phu-quoc.jpg" />
            <p className="tour-description-article">
              Phú Quốc được mệnh danh là thiên đường nghỉ dưỡng với: - Làng Chài
              Hàm Ninh: Nơi đây phong phú nhiều về các loại hải sản tươi sống
              như ghẹ, cua, ốc nhảy, bào ngư, cá ngựa,… - Suối Tranh: Đến đây
              Quý khách thỏa sức khám phá leo núi và ngâm mình vào dòng nước
              trong mát, ngắm dòng suối đẹp như một bức tranh. - Bãi Sao: Đắm
              mình cùng làn nước trong mát của biển xanh cát trắng của bãi biển
              đẹp nhất Phú Quốc và là điểm đến không thể thiếu trong mọi hành
              trình khám phá Đảo Ngọc. - Di tích lịch sử nhà tù Phú Quốc: minh
              chứng hùng hồn cho công cuộc đấu tranh đầy gian khổ và tinh thần
              bất khuất của nhân dân ta trong các cuộc đấu tranh chống thực dân
              Pháp và Đế quốc Mỹ.
            </p>
            <img src="../assets/images/phu-quoc.jpg" />
            <p className="tour-description-article">
              Phú Quốc được mệnh danh là thiên đường nghỉ dưỡng với: - Làng Chài
              Hàm Ninh: Nơi đây phong phú nhiều về các loại hải sản tươi sống
              như ghẹ, cua, ốc nhảy, bào ngư, cá ngựa,… - Suối Tranh: Đến đây
              Quý khách thỏa sức khám phá leo núi và ngâm mình vào dòng nước
              trong mát, ngắm dòng suối đẹp như một bức tranh. - Bãi Sao: Đắm
              mình cùng làn nước trong mát của biển xanh cát trắng của bãi biển
              đẹp nhất Phú Quốc và là điểm đến không thể thiếu trong mọi hành
              trình khám phá Đảo Ngọc. - Di tích lịch sử nhà tù Phú Quốc: minh
              chứng hùng hồn cho công cuộc đấu tranh đầy gian khổ và tinh thần
              bất khuất của nhân dân ta trong các cuộc đấu tranh chống thực dân
              Pháp và Đế quốc Mỹ.
            </p>
          </div>
          <div className="comment-section">
            <Comments />
          </div>
        </section>
      </div>
    </div>
  );
}
