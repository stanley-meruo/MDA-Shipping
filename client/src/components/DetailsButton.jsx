import { motion } from "motion/react";

const DetailsButton = ({ title }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{
        duration: 1,
        delay: 0.8,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <button className="rounded-xl border-[0.3px] border-gray-100 shadow-md w-full min-h-18 px-8 lg:min-h-20">
        {title}
      </button>
    </motion.div>
  );
};

export default DetailsButton;
