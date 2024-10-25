import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Container from "../Container";
import { EType, extracurricularOptions } from "./data";
import Slider from "./Slider";
import Content from "./Content";

const Extracurricular = () => {
  const [selectOption, setSelectOption] = useState(1);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const myOption = useMemo(
    () => extracurricularOptions.find((item) => item.id === selectOption),
    [selectOption]
  );

  return (
    <Container>
      <motion.div
        id="activities"
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
          Extra-Curricular Activity
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

        {myOption && myOption.type === EType.RESUME ? (
          // Type Content
          <>
            <Content myOption={myOption} />
          </>
        ) : (
          // Swiper
          <>
            <Slider myOption={myOption} />
          </>
        )}
      </motion.div>
    </Container>
  );
};

export default Extracurricular;
