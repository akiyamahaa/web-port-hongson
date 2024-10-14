import { motion, useInView } from "framer-motion";
import { ArrowDown2 } from "iconsax-react";
import HeroImg from "../assets/image/hero-img.png";
import Button from "./Button";
import Container from "./Container";
import { useRef } from "react";

const Hero = () => {
  const ref = useRef(null);
  const handleNavigateResume = () => {
    const element = document.getElementById("resume");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    const honorElement = document.getElementById("honor");
    if (honorElement) {
      honorElement.scrollIntoView({
        behavior: "smooth", // Smooth scroll animation
        block: "start", // Align to the top of the element
      });
    }
  };
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  // Animation variants
  const containerVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const imageVariant = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="bg-primary-50 w-full relative">
      <Container>
        <motion.div
          ref={ref}
          className="py-48"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariant}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            <motion.div className="flex-1" variants={itemVariant}>
              <div className="space-y-8">
                <div className="space-y-4 text-center lg:text-start">
                  <motion.h1
                    className="text-4xl md:text-7xl font-semibold text-gray-800"
                    variants={itemVariant}
                  >
                    Hi, I'm{" "}
                  </motion.h1>
                  <motion.h1
                    className="text-4xl md:text-7xl font-semibold text-primary-500"
                    variants={itemVariant}
                  >
                    DAO TUAN SON
                  </motion.h1>
                </div>
                <motion.p
                  className="text-xl text-gray-500 text-center lg:text-start"
                  variants={itemVariant}
                >
                  A passionate student dedicated to STEM, leadership, and
                  creating impactful solutions through technology. With a deep
                  interest in computer science, mathematics, and
                  problem-solving, I aim to use my skills to make a positive
                  impact in the world.
                </motion.p>
                <motion.div
                  className="flex flex-row justify-center lg:justify-start"
                  variants={itemVariant}
                >
                  <Button title="View Resume" onClick={handleNavigateResume} />
                </motion.div>
              </div>
            </motion.div>
            <motion.div className="flex-1" variants={imageVariant}>
              <img src={HeroImg} alt="Hero" />
            </motion.div>
          </div>
        </motion.div>
      </Container>
      {/* Arrow */}
      <motion.div
        className="absolute bottom-5 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={handleScroll}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
      >
        <ArrowDown2 size={40} color="#9CA3AF" />
      </motion.div>
    </div>
  );
};

export default Hero;
