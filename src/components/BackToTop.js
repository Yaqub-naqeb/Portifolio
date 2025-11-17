import React, { useState, useEffect } from "react";
import useTheme from "./store/useTheme";
import { motion, AnimatePresence } from "framer-motion";

const BackToTop = () => {
  const { mode } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          aria-label="Back to top"
          className={`fixed bottom-8 right-8 z-50 p-3 sm:p-4 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg ${
            mode
              ? "bg-[#83c3de] hover:bg-[#61b1d6] text-white"
              : "bg-[#ADD6E8] hover:bg-[#9cd5ee] text-[#262626]"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-6 h-6 sm:w-7 sm:h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;

