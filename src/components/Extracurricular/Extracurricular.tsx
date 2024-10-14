import { useState } from "react";
import { motion } from "framer-motion";
import Container from "../Container";
import { Swiper, SwiperSlide } from "swiper/react";
import "./slide.css";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { extracurricularOptions } from "./data";

const Extracurricular = () => {
  const [selectOption, setSelectOption] = useState(1);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const slideIn = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <Container>
      <motion.div
        className="py-20 lg:py-36 space-y-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Trigger when scrolled into view
        variants={fadeInUp}
      >
        <motion.h1
          className="text-5xl text-primary-500 font-semibold text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Extracurricular
        </motion.h1>

        {/* List Button */}
        <motion.div
          className="flex flex-row flex-wrap gap-4 justify-center"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          {extracurricularOptions.map((option) => (
            <motion.div
              key={option.id}
              className={`cursor-pointer px-6 py-2 rounded-xl text-lg font-semibold transition-colors duration-300
                ${
                  selectOption === option.id
                    ? "bg-primary-500 text-white"
                    : "bg-primary-100 text-gray-800"
                }`}
              whileHover={{ scale: 1.05 }} // Slight scale effect on hover
              onClick={() => setSelectOption(option.id)}
            >
              <span className="font-semibold text-base">{option.title}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Swiper for images */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideIn} // Slide in effect for the Swiper
        >
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {extracurricularOptions
              .find((item) => item.id === selectOption)
              ?.images.map((image) => (
                <SwiperSlide key={image}>
                  <motion.img
                    src={image}
                    alt=""
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default Extracurricular;
