import React, { useEffect } from "react";
import Tour from "../TourComponent/Tour";
import { Link } from "react-router-dom";
import "./TourContainer.scss";
export default function ToursContainer({ tours }) {

  return (
    <div className="tours-container">
      {
        tours.map(tour => (
          <Tour key={tour.id} image={tour.image} name={tour.name} price={tour.price} destination={tour.destination.name} time={tour.time} id={tour.id} />
        ))
      }
    </div>
  );
}
