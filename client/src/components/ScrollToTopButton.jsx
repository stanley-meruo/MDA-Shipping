import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 1, type: "spring" }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-5 z-20 p-3 rounded-full bg-babyblue text-white cursor-pointer shadow-md hover:bg-darkblue xs:right-6 sm:right-10 md:right-12 xmd:right-14 lg:right-16 xl:right-22 xxl:right-28"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="text-xl xmd:text-2xl xl:text-3xl" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
