import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import MusicApp from "../../img/musicapp.png";
import Hoc from "../../img/hoc.png";
import Ecom from "../../img/ecommerce.png";
import "swiper/css";

export default function Portfolio() {
  return (
    <div className="port">
      {/* heading */}
      <span>Recent Projects</span>
      <span>Portfolio</span>
      {/* slider */}
      <Swiper
        spaceBetween={70}
        slidesPerView={2}
        grabCursor={true}
        className="port-slider"
      >
        <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Hoc} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecom} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Hoc} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
