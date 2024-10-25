import React from "react";
import helpfulapp1 from "../../assets/image/helpful-app-1.jpg";
import helpfulapp2 from "../../assets/image/helpful-app-2.jpg";
import helpfulapp3 from "../../assets/image/helpful-app-3.jpg";
import helpfulapp4 from "../../assets/image/helpful-app-4.jpg";
import helpfulapp5 from "../../assets/image/helpful-app-5.jpg";
import helpfulapp6 from "../../assets/image/helpful-app-6.jpg";
import helpfulapp7 from "../../assets/image/helpful-app-7.jpg";
import helpfulapp8 from "../../assets/image/helpful-app-8.jpg";
import helpfulapp9 from "../../assets/image/helpful-app-9.jpg";
import helpfulapp10 from "../../assets/image/helpful-app-10.jpg";
import helpfulapp11 from "../../assets/image/helpful-app-11.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";

const listImg = [
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
];

const ImageGallery: React.FC = () => {
  return (
    <Swiper
      className="h-[350px]"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10} // Gap between slides
      slidesPerView="auto" // Display number of slides based on total width of image
      pagination={{ clickable: true }} // Enable pagination (dots)
      scrollbar={{ draggable: true }} // Draggable scrollbar
      loop={true} // Enable infinite loop scrolling
      autoplay
    >
      {listImg.map((img, index) => (
        <SwiperSlide key={index} style={{ width: "auto" }}>
          {" "}
          {/* Ensure each slide takes image's natural width */}
          <img
            src={img}
            alt={`img-${index}`}
            className="rounded-3xl object-cover" // Removed fixed height for original size display
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageGallery;
