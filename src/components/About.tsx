import { motion } from "framer-motion";
import AboutImg from "../assets/image/aboutImg.png";
import Container from "./Container";
import Dot from "./Dot";

// Animation variants
const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.5 },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const About = () => {
  return (
    <Container>
      <motion.div
        className="py-20 lg:py-36 flex flex-row items-start gap-16"
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }} // trigger on scroll
        variants={containerVariant}
      >
        <motion.div
          className="flex-1 hidden lg:block"
          variants={fadeInLeft} // Slide in from the left
        >
          <motion.img
            src={AboutImg}
            alt="About me"
            className="w-full"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
          />
        </motion.div>

        <motion.div className="flex-1 space-y-8" variants={fadeInUp}>
          <motion.div className="space-y-6" variants={fadeInUp}>
            <motion.h2
              className="text-primary-500 font-semibold text-5xl"
              variants={fadeInUp}
            >
              About me
            </motion.h2>
            <motion.p className="text-xl text-gray-800" variants={fadeInUp}>
              I am a high school student at Tran Dai Nghia High School for the
              Gifted with a passion for science and technology. My academic
              journey began at Hoang Hoa Tham Secondary School, where I
              developed a strong foundation in mathematics and computer science.
              Currently, with a GPA of 9.5 in grade 11 and a 1500 SAT score, I
              am driven to pursue a major in Computer Science, focusing on
              creating practical solutions to real-world problems.
            </motion.p>
          </motion.div>

          <motion.div className="space-y-4" variants={fadeInUp}>
            <motion.h2
              className="text-2xl text-gray-800 font-semibold"
              variants={fadeInUp}
            >
              Education Timeline:
            </motion.h2>
            <motion.div variants={fadeInUp}>
              <div className="flex flex-row items-center text-xl gap-2">
                <Dot />
                <span className="font-semibold min-w-[120px]">2018-2022:</span>
                Hoang Hoa Tham Secondary School
              </div>
              <div className="flex flex-row items-center text-xl gap-2">
                <Dot />
                <p className="font-semibold min-w-[120px]">2022-2025:</p>
                Tran Dai Nghia High School for the Gifted
              </div>
            </motion.div>
          </motion.div>

          <motion.div className="space-y-4" variants={fadeInUp}>
            <h2 className="text-2xl text-gray-800 font-semibold">GPA:</h2>
            <div className="flex flex-row items-center justify-between">
              <motion.div className="space-y-2" variants={fadeInUp}>
                <p className="font-semibold text-5xl text-gray-800">8.8</p>
                <p className="text-xl text-primary-500">Grade 9</p>
              </motion.div>
              <motion.div className="space-y-2" variants={fadeInUp}>
                <p className="font-semibold text-5xl text-gray-800">8.9</p>
                <p className="text-xl text-primary-500">Grade 10</p>
              </motion.div>
              <motion.div className="space-y-2" variants={fadeInUp}>
                <p className="font-semibold text-5xl text-gray-800">9.5</p>
                <p className="text-xl text-primary-500">Grade 11</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div className="space-y-4" variants={fadeInUp}>
            <h2 className="text-2xl text-gray-800 font-semibold">Scores:</h2>
            <div className="flex flex-row items-center justify-between">
              <motion.div className="space-y-2" variants={fadeInUp}>
                <p className="font-semibold text-5xl text-gray-800">1500</p>
                <p className="text-xl text-primary-500">SAT (superscore)</p>
              </motion.div>
              <motion.div className="space-y-2" variants={fadeInUp}>
                <p className="font-semibold text-5xl text-gray-800">7.0</p>
                <p className="text-xl text-primary-500">IELTS</p>
              </motion.div>
              <motion.div className="space-y-2" variants={fadeInUp}>
                <p className="font-semibold text-5xl text-gray-800">5</p>
                <p className="text-xl text-primary-500">
                  AP Computer Science A
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default About;
