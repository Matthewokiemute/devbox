import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "./Slide.scss";
import { EffectCoverflow, Pagination, Navigation } from "swiper";

const Slide = () => {
  return (
    <div className="slide">
      <div className="container">Slide</div>
    </div>
  );
};

export default Slide;
