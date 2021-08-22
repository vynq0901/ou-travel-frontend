import React, { useEffect } from "react";
import "./BestTours.scss";
import Tour from "../TourComponent/Tour";
import AOS from "aos";
import "aos/dist/aos.css";
export default function BestTours() {
  useEffect(() => {
    AOS.init();
    return () => {
      return;
    };
  }, []);
  return (
    <section className="best-tours" data-aos="fade-in">
      <div className="section-head">
        <h1 className="section-heading">Tours nổi bật</h1>
        <a href="#" className="button">
          XEM TẤT CẢ
        </a>
      </div>
      <div className="best-tours-container">
        <Tour />
        <Tour />
        <Tour />
        <Tour />
        <Tour />
        <Tour />
      </div>
    </section>
  );
}
