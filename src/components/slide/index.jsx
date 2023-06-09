import React from "react";
import "./Slide.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { cards } from "../../data.js";
import { Link } from "react-router-dom";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerPadding: 20,
    className: "center",
    autoplay: true,
    autoplaySpeed: 2000,
    arrowsScroll: 4
  };
  return (
    <div className="slide">
      <div className="container">
        <Slider {...settings}>
          {cards.map((cards) => {
            return (
              <div key={cards.id} className="cards">
                <Link to="/gigs?cat=design" className="link">
                  <img src={cards.img} alt={cards.desc} />
                  <div className="details">
                    <span>{cards.desc}</span>
                    <span>{cards.title}</span>
                  </div>
                </Link>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
