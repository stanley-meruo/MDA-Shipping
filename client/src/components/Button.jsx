import { motion } from "motion/react";

const Button = ({ title, className, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.3 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <button className={className} onClick={onClick}>
        {title}
      </button>
    </motion.div>
  );
};

export default Button;
