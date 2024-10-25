/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "./slide.css";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

type Props = {
  myOption: any;
};

const Slider = ({ myOption }: Props) => {
  const slideIn = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={slideIn} // Slide in effect for the Swiper
    >
      <p className="text-base md:text-xl text-gray-500 mt-12 mb-8 px-20 text-center">
        {myOption.description}
      </p>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {myOption?.images!.map((image: any) => (
          <SwiperSlide key={image}>
            <motion.img
              src={image}
              alt="image-slider"
              className="rounded-3xl w-full"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default Slider;
