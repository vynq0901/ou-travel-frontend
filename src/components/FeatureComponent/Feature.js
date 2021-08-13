import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import "./Feature.scss";
export default function Feature() {
  useEffect(() => {
    AOS.init();
    return () => {
      return;
    };
  }, []);
  return (
    <article className="feature">
      <div className="feature-img">
        <p>
          Vì sao chọn<br></br> <a>OU Travel ?</a>
        </p>
      </div>
      <div className="feature-items">
        <div className="feature-item" data-aos="flip-up">
          <p className="feature-item-number">1.</p>
          <h1 className="feature-item-title">Trang bán tour</h1>
          <p style={{ fontWeight: "bolder", fontSize: "1.5rem" }}>
            -----------------------
          </p>
          <p className="feature-item-desc">
            Đầu tiên tại Việt Nam<br></br>Ứng dụng công nghệ mới nhất
          </p>
        </div>
        <div className="feature-item" data-aos="flip-up">
          <p className="feature-item-number">2.</p>
          <h1 className="feature-item-title">Thanh toán</h1>
          <p style={{ fontWeight: "bolder", fontSize: "1.5rem" }}>
            -----------------------
          </p>
          <p className="feature-item-desc">
            An toàn và linh hoạt<br></br> Liên kết với các tổ chức tài chính
          </p>
        </div>
        <div className="feature-item" data-aos="flip-up">
          <p className="feature-item-number">3.</p>
          <h1 className="feature-item-title">Giá cả</h1>
          <p style={{ fontWeight: "bolder", fontSize: "1.5rem" }}>
            -----------------------
          </p>
          <p className="feature-item-desc">
            Luôn có mức giá tốt nhất<br></br> Bảo đảm giá tốt
          </p>
        </div>
        <div className="feature-item" data-aos="flip-up">
          <p className="feature-item-number">4.</p>
          <h1 className="feature-item-title">Sản phẩm</h1>
          <p style={{ fontWeight: "bolder", fontSize: "1.5rem" }}>
            -----------------------
          </p>
          <p className="feature-item-desc">
            Đa dạng, chất lượng<br></br> Đạt chất lượng tốt nhất
          </p>
        </div>
        <div className="feature-item" data-aos="flip-up">
          <p className="feature-item-number">5.</p>
          <h1 className="feature-item-title">Đặt tour</h1>
          <p style={{ fontWeight: "bolder", fontSize: "1.5rem" }}>
            -----------------------
          </p>
          <p className="feature-item-desc">
            Dễ dàng nhanh chóng <br></br>Thanh toán linh hoạt
          </p>
        </div>
        <div className="feature-item" data-aos="flip-up">
          <p className="feature-item-number">6.</p>
          <h1 className="feature-item-title">Hỗ trợ</h1>
          <p style={{ fontWeight: "bolder", fontSize: "1.5rem" }}>
            ------------------------------
          </p>
          <p className="feature-item-desc">
            Từ 08h00 - 22h00<br></br> Hotline và hỗ trợ trực tuyến
          </p>
        </div>
      </div>
    </article>
  );
}
