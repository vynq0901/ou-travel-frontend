import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import API, { endpoints } from "../API";
import OrderForm from "../components/OrderForm/OrderForm";
import Comments from "../components/CommentsComponent/Comments";
import { SiGooglemaps } from "react-icons/si";
import { BsFillClockFill } from "react-icons/bs";
import './TourDetail.scss';

export default function TourDetail() {
  const { id } = useParams();
  const [tour, setTour] = useState({});
  useEffect(() => {
    const getTour = async () => {
      await API.get(`${endpoints["tours"]}${id}/`)
        .then(res => {
          setTour(res.data)
        })
        .catch(err => console.log(err))
    }
    getTour();
  }, [])

  useEffect(() => {
    const tourContent = document.querySelector('.tour-content');
    tourContent.innerHTML = tour.content;

  })


  return (
    <div className="tour-details-page">
      <div className="tour-details">
        <div className="tour-detail">
          <div className="tour-title">
            <h1>{tour.name}</h1>
          </div>

          <div className="details">
            <section className="tour-detail">
              <div className="tour-detail-img">
                <img src={tour.image} />
              </div>
              <div className="tour-place-duration">
                <div className="tour-place">
                  <SiGooglemaps /> Ho Chi Minh
                </div>
                <div className="tour-duration">
                  <BsFillClockFill /> {tour.time}
                </div>
                <div className="tour-traffic">Phương tiện: {tour.traffic}</div>
              </div>
              <div className="tour-content">

              </div>
              <div className="comment-section">
                <Comments />
              </div>
            </section>
          </div>
        </div>
        <OrderForm />
      </div>

    </div>
  );
}
