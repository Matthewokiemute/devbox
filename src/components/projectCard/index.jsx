import React from "react";
import "./ProjectSlide.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { projects } from "../../data.js";
import { Link } from "react-router-dom";

export default function ProjectCard() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerPadding: 20,
    className: "center",
    autoplay: true,
    autoplaySpeed: 2000,
    arrowsScroll: 4
  };
  return (
    <div className="projectSlide">
      <div className="container">
        <Slider {...settings}>
          {projects.map((project) => {
            return (
              <div key={project.id} className="cards">
                <Link to="/" className="link">
                  <img src={project.img} alt={project.desc} />
                  <div className="info">
                    <img src={project.pp} alt="" />
                    <div className="texts">
                      <h4>{project.cat}</h4>
                      <span>{project.username}</span>
                    </div>
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
