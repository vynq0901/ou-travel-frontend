import React, { useEffect, useState } from "react";
import axios from "axios";
import Filter from "../components/FilterComponent/Filter";
import ToursContainer from "../components/TourContainerComponent/ToursContainer";
import "./AllTours.scss";
export default function AllTours() {
  return (
    <div className="all-tours">
      <h1
        className="page-heading"
        style={{
          fontSize: "3.5rem",
          fontWeight: "500",
          textAlign: " center",
          margin: "50px",
          borderTop: "1px solid #ddd",
          borderBottom: "1px solid #ddd",
          padding: "10px 0",
        }}
      >
        Tất cả tour hiện có
      </h1>

      <div className="all-tours-filter">
        <Filter />
        <ToursContainer />
      </div>
    </div>
  );
}
