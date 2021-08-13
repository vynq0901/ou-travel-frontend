import React from "react";
import "./Banner.scss";
import Find from "../FindComponent/Find";

export default function Banner() {
  return (
    <section className="banner">
      <h1 className="banner-heading">Tận hưởng kì nghỉ tuyệt vời</h1>
      <h3 className="banner-subheading">Với nhiều mức giá ưu đãi</h3>
      <Find />
    </section>
  );
}
