import { motion } from "framer-motion";
import Container from "./Container";
import Input from "./Input";
import { Send2 } from "iconsax-react";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Contact = () => {
  return (
    <Container>
      <motion.div
        className="py-20 lg:py-36 flex md:flex-row gap-16 flex-col"
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% in view
        variants={fadeInUp}
      >
        {/* Left Section */}
        <motion.div className="space-y-8 flex-1" variants={fadeInUp}>
          <div className="space-y-2">
            <motion.h1
              className="font-semibold text-xl text-primary-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Get in touch!
            </motion.h1>
            <motion.p
              className="text-2xl md:text-3xl lg:text-4xl text-gray-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
              If you would like to learn more about my projects, research, or
              collaborations, feel free to reach out!
            </motion.p>
          </div>
          <div className="space-y-1">
            <motion.p className="text-xl text-gray-500" variants={fadeInUp}>
              Email
            </motion.p>
            <motion.p
              className="text-xl font-semibold text-gray-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              sondt07@gmail.com
            </motion.p>
          </div>
        </motion.div>

        {/* Right Section (Form) */}
        <motion.div className="flex-1 space-y-8" variants={fadeInUp}>
          <motion.div variants={fadeInUp}>
            <Input label="Name" />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Input label="Email" />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Input label="Message" />
          </motion.div>
          <motion.button
            className="flex justify-center items-center gap-2 bg-primary-500 rounded-2xl w-full py-3.5 hover:opacity-80"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-white text-lg font-semibold">Send me message</p>
            <Send2 color="#fff" />
          </motion.button>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default Contact;
