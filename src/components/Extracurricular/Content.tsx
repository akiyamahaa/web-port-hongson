/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";
import ResumeCard from "../ResumeCard";

type Props = {
  myOption: any;
};

const Content = ({ myOption }: Props) => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="space-y-12"
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
      {myOption.content!.map((item: any, index: number) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <ResumeCard data={item} />
          {index < myOption.content!.length - 1 && (
            <motion.div
              className="bg-primary-200 w-full h-[1px] my-12"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8 }}
            />
          )}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Content;
