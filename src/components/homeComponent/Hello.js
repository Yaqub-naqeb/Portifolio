import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import useTheme from "../store/useTheme";
import { PROFILE } from "../../data/profile";

const Hello = () => {
  const { mode } = useTheme();
  const reduceMotion = useReducedMotion();

  return (
    <div className="writting flex flex-col items-center">
      <div className="flex flex-col items-center relative font-normal">
        <motion.p
          aria-hidden="true"
          initial={reduceMotion ? false : { y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6 }}
          className={`font-semibold opacity-[0.6] tracking-[2px] sm:tracking-[3px] md:tracking-[4px] ${
            mode ? "text-[#add6e8d2]" : "text-[#333]"
          } lg:text-[10rem] md:text-[8rem] sm:text-[6rem] text-[4.5rem] hello`}
        >
          Hello
        </motion.p>
        <motion.h1
          id="site-heading"
          initial={reduceMotion ? false : { x: -150 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          className={`absolute bottom-1/3 md:bottom-1/4 text-[1.35rem] sm:text-[1.85rem] md:text-[2.35rem] imYaqwb mobile-spacing font-normal text-[#548aa4] whitespace-nowrap`}
        >
          {PROFILE.name}
        </motion.h1>

        <motion.p className="text-[#9C9C9C] text-[0.85rem] sm:text-[1.1rem] md:text-[1.35rem] translate-y-[-1.5rem] sm:translate-y-[-1.8rem] mobile-frontend-spacing">
          {PROFILE.headline}
        </motion.p>
      </div>

      <a
        href={PROFILE.cvPath}
        download={PROFILE.cvDownloadName}
        className={`rounded inline-block ${
          mode
            ? "bg-[#83c3de] hover:bg-[#9ed3ea]"
            : "bg-[#53595c] hover:bg-[#88a3ae]"
        } py-2 px-8 sm:px-12 md:px-16 lg:px-[5.8rem] text-white text-sm sm:text-base lg:translate-y-[-1rem] translate-y-[-1.3rem] transition-all duration-300 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`}
      >
        Download resume
      </a>
    </div>
  );
};

export default Hello;
