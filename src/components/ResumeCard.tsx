import { motion } from "framer-motion";
import Button from "./Button";
import Dot from "./Dot";

type Props = {
  data: {
    title: string;
    subTitle: string;
    timeline: string;
    description: string;
    content: string[];
  };
};

const ResumeCard = ({ data }: Props) => {
  return (
    <motion.div
      className="flex flex-col lg:flex-row gap-16"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="space-y-4">
        <motion.h1
          className="font-semibold text-3xl text-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {data.title}
        </motion.h1>
        <div className="space-y-1">
          <motion.p
            className="text-xl font-semibold text-primary-500"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {data.subTitle}
          </motion.p>
          <motion.p
            className="text-xl text-gray-800"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {data.timeline}
          </motion.p>
        </div>
        <motion.p
          className="text-xl text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {data.description}
        </motion.p>
        <Button title="View more" onClick={() => {}} />
      </div>

      <div className="space-y-1">
        {data.content.map((item) => (
          <motion.div
            className="flex flex-row items-start gap-2"
            key={item}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="mt-3">
              <Dot />
            </div>
            <p className="text-gray-800 text-xl">{item}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ResumeCard;
