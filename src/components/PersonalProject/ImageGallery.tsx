import React from "react";
import helpfulapp0 from "../../assets/image/helpfulapp0.png";
import helpfulapp1 from "../../assets/image/helpfulapp1.png";
import helpfulapp2 from "../../assets/image/helpfulapp2.png";
import helpfulapp3 from "../../assets/image/helpfulapp3.png";
import helpfulapp4 from "../../assets/image/helpfulapp4.png";
import helpfulapp5 from "../../assets/image/helpfulapp5.png";
import helpfulapp6 from "../../assets/image/helpfulapp6.png";
import helpfulapp7 from "../../assets/image/helpfulapp7.png";
import helpfulapp8 from "../../assets/image/helpfulapp8.png";
import helpfulapp9 from "../../assets/image/helpfulapp9.png";
import helpfulapp10 from "../../assets/image/helpfulapp10.png";
import helpfulapp11 from "../../assets/image/helpfulapp11.png";
import helpfulapp12 from "../../assets/image/helpfulapp12.png";
import helpfulapp13 from "../../assets/image/helpfulapp13.png";
import helpfulapp14 from "../../assets/image/helpfulapp14.png";
import helpfulapp15 from "../../assets/image/helpfulapp15.png";
import helpfulapp16 from "../../assets/image/helpfulapp16.png";
import helpfulapp17 from "../../assets/image/helpfulapp17.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";

const listImg = [
  helpfulapp0,
  helpfulapp1,
  helpfulapp2,
  helpfulapp3,
  helpfulapp4,
  helpfulapp5,
  helpfulapp6,
  helpfulapp7,
  helpfulapp8,
  helpfulapp9,
  helpfulapp10,
  helpfulapp11,
  helpfulapp12,
  helpfulapp13,
  helpfulapp14,
  helpfulapp15,
  helpfulapp16,
  helpfulapp17,
];

const ImageGallery: React.FC = () => {
  return (
    <Swiper
      className="h-[350px]"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10} // Gap between slides
      slidesPerView={4} // Number of slides to show at once
      pagination={{ clickable: true }} // Enable pagination (dots)
      scrollbar={{ draggable: true }} // Draggable scrollbar
      loop={true} // Enable infinite loop scrolling
      autoplay
    >
      {listImg.map((img, index) => (
        <SwiperSlide key={index}>
          <img
            src={img}
            alt={`img-${index}`}
            className="h-[350px] rounded-3xl object-cover"
            style={{ width: "auto" }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageGallery;
