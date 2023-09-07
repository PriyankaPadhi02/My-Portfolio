import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import pic1 from "../../img/profile1.jpg";
import pic2 from "../../img/profile2.jpg";
import pic3 from "../../img/profile5.jpg";
import pic4 from "../../img/profile4.jpg";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";

export default function Testimonial() {
  const clients = [
    {
      img: pic1,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fermentum ac urna et blandit. Etiam vel nisi eu libero maximus accumsan. Morbi faucibus enim sagittis tempor placerat. Maecenas sollicitudin, ligula at efficitur blandit, ipsum neque pharetra lectus, eu commodo arcu risus a ligula. In non feugiat est. Praesent tristique leo vitae laoreet ultricies. Praesent non metus urna. Cras ac erat magna. Morbi nec rhoncus felis. Sed ut risus lobortis, imperdiet dui sit amet, dignissim nunc. ",
    },
    {
      img: pic2,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fermentum ac urna et blandit. Etiam vel nisi eu libero maximus accumsan. Morbi faucibus enim sagittis tempor placerat. Maecenas sollicitudin, ligula at efficitur blandit, ipsum neque pharetra lectus, eu commodo arcu risus a ligula. In non feugiat est. Praesent tristique leo vitae laoreet ultricies. Praesent non metus urna. Cras ac erat magna. Morbi nec rhoncus felis. Sed ut risus lobortis, imperdiet dui sit amet, dignissim nunc. ",
    },
    {
      img: pic3,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fermentum ac urna et blandit. Etiam vel nisi eu libero maximus accumsan. Morbi faucibus enim sagittis tempor placerat. Maecenas sollicitudin, ligula at efficitur blandit, ipsum neque pharetra lectus, eu commodo arcu risus a ligula. In non feugiat est. Praesent tristique leo vitae laoreet ultricies. Praesent non metus urna. Cras ac erat magna. Morbi nec rhoncus felis. Sed ut risus lobortis, imperdiet dui sit amet, dignissim nunc. ",
    },
    {
      img: pic4,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fermentum ac urna et blandit. Etiam vel nisi eu libero maximus accumsan. Morbi faucibus enim sagittis tempor placerat. Maecenas sollicitudin, ligula at efficitur blandit, ipsum neque pharetra lectus, eu commodo arcu risus a ligula. In non feugiat est. Praesent tristique leo vitae laoreet ultricies. Praesent non metus urna. Cras ac erat magna. Morbi nec rhoncus felis. Sed ut risus lobortis, imperdiet dui sit amet, dignissim nunc. ",
    },
  ];
  return (
    <div className="t-wrapper">
      <div className="t-heading">
        <span>Client always get </span>
        <span>Exceptional work </span>
        <span>from me...</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      {/* slider */}
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="test">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
