import React from "react";
import Tour from "../TourComponent/Tour";
import "./TourContainer.scss";
export default function ToursContainer({ tours }) {
  return (
    <div className="tours-container">
      {tours.map((tour) => (
        <Tour tour={tour} />
      ))}
    </div>
  );
}
