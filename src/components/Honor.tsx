import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import HonorCard from "./HonorCard";
import FirstTropy from "../assets/image/1st.png";
import GoldTropy from "../assets/image/gold.png";
import SilverTropy from "../assets/image/silver.png";
import BronzeTropy from "../assets/image/bronze.png";
import Container from "./Container";

const listHonor = [
  {
    title: "Global Mathematics Elite Competition",
    award: "1st runner-up",
    awardLogo: FirstTropy,
    description:
      "One of the two salutatorians out of 50 students that scored 360 in a world-wide scale contest.",
    color: "#EF4444",
  },
  {
    award: "Gold Medal",
    title: "Brilliance Intelligence Students Olympiad",
    awardLogo: GoldTropy,
    color: "#EAA108",
  },
  {
    award: "Silver Medal",
    title: "International Math and Science Competitions",
    awardLogo: SilverTropy,
    color: "#6B7280",
  },
  {
    award: "Bronze Medal",
    title: "International Mathematics Olympiad Competition of SouthEast Asia",
    awardLogo: BronzeTropy,
    color: "#855F0E",
  },
];

const Honor = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  // Animation variants for the container and items
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger the appearance of the HonorCards
      },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <Container>
      <motion.div
        className="mt-20 lg:mt-36 space-y-16"
        id="honor"
        ref={ref} // Attach ref to the container
        initial="hidden"
        animate={isInView ? "visible" : "hidden"} // Animate based on the scroll
        variants={containerVariant}
      >
        <motion.h1
          className="text-center text-4xl md:text-6xl text-primary-500 font-semibold"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          Honors and Awards
        </motion.h1>
        <motion.div
          className="grid md:grid-cols-2 grid-cols-1 gap-6"
          variants={containerVariant}
        >
          {listHonor.map((item) => (
            <motion.div key={item.award} variants={itemVariant}>
              <HonorCard {...item} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default Honor;
