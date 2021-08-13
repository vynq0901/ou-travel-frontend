import React, { useState } from "react";
import Datepicker from "../Datepicker/Datepicker";
import "./Filter.scss";

export default function Filter() {
  return (
    <div className="filter">
      <div className="filter-item filter-where">
        <label for="where-input" className="filter-label filter-where-label">
          Tìm theo địa điểm
        </label>
        <input id="where-input" type="text" className="filter-where-input" />
      </div>
      <div className="filter-item filter-price">
        <label className="filter-label filter-price-label">
          Tìm theo khoảng giá
        </label>
        <select id="price-range">
          <option value="">Tất cả</option>
          <option value="price1">500.000 - 2.000.000</option>
          <option value="price2">2.000.000 - 5.000.000</option>
          <option value="price3">5.000.000 - 8.000.000</option>
          <option value="price4">8.000.000 - 10.000.000</option>
          <option value="price5">từ 10.000.000vnd</option>
        </select>
      </div>
      <div className="filter-item filter-date">
        <label className="filter-label filter-date-label">Ngày khởi hành</label>
        <Datepicker />
      </div>
    </div>
  );
}
