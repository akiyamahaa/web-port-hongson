import { motion, useInView } from "framer-motion";
import { ArrowDown2, ArrowRight } from "iconsax-react";
import HeroImg from "../assets/image/hero-img.png";
import Button from "./Button";
import Container from "./Container";
import { useRef } from "react";

const Hero = () => {
  const ref = useRef(null);
  const handleNavigateProject = () => {
    const element = document.getElementById("project");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleNavigateActivities = () => {
    const element = document.getElementById("activities");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    const honorElement = document.getElementById("about");
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
                    Hello there, I am
                  </motion.h1>
                  <motion.h1
                    className="text-4xl md:text-7xl font-semibold text-primary-500"
                    variants={itemVariant}
                  >
                    DAO TUAN SON
                  </motion.h1>
                </div>
                <motion.p
                  className="text-xl text-gray-800 font-semibold text-center lg:text-start mb-8"
                  variants={itemVariant}
                >
                  A highschool-level coding specialist with a passion for
                  improving people's health.
                </motion.p>
                <motion.p
                  className="text-xl text-gray-500 text-center lg:text-start mb-8"
                  variants={itemVariant}
                >
                  Growing up with my grandmother as my main caretaker, I have
                  much experience in taking care of elders. It is hard to look
                  at the one you love slowly growing old, so I want to cherish
                  every memory while I still have a chance. Those are the two
                  main reasons for me to create “Nhật ký sức khỏe” - “Health
                  Diary” to make sure the elders will get the best help and the
                  boost of health to make the memories last.
                </motion.p>
                <motion.p
                  className="text-xl text-gray-500 text-center lg:text-start"
                  variants={itemVariant}
                >
                  For the best experience, I hope young people will find this
                  app useful and teach older adults how to use it. Even if there
                  are no supporters to assist the seniors, no worries because
                  I've written a technology-friendly guide titled “Slow Steps
                  into the Digital Era”, designed to help the elderly
                  confidently navigate and enjoy the digital world
                  independently.{" "}
                </motion.p>
                <motion.div
                  className="flex flex-row justify-center lg:justify-start gap-4"
                  variants={itemVariant}
                >
                  <Button
                    title="My Personal Project"
                    onClick={handleNavigateProject}
                    variant="bold"
                    Icon={<ArrowRight size={24} color="#fff" />}
                  />
                  <Button
                    title="My Activities"
                    onClick={handleNavigateActivities}
                    variant="outline"
                    Icon={<ArrowRight size={24} color="#53CB17" />}
                  />
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
