import React, { useEffect, useState } from "react";
import "./BestTours.scss";
import Tour from "../TourComponent/Tour";
import API, { endpoints } from "../../API";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
export default function BestTours() {

  const [tours, setTours] = useState([])
  //call api tours
  useEffect(() => {
    const getTours = async () => {
      await API.get(endpoints["tours"])
        .then(res => {
          let bestTours = [];
          console.log(res)
          for (let i = 0; i <= 5; i++) {
            bestTours.push(res.data.results[i])
          }
          setTours(bestTours);
        })
        .catch(err => console.log(err))
    }
    getTours()
  }, [])
  return (
    <section className="best-tours">
      <div className="section-head">
        <h1 className="section-heading">Tours nổi bật</h1>
        <a href="#" className="button">
          XEM TẤT CẢ
        </a>
      </div>
      <div className="best-tours-container">
        {
          tours.map(tour => (

            <Tour key={tour.id} image={tour.image} name={tour.name} price={tour.price} destination={tour.destination.name} time={tour.time} id={tour.id} />

          ))
        }
      </div>
    </section>
  );
}
