import React from "react";
import { motion } from "framer-motion";
import useTheme from "../store/useTheme";
import pdf from "../../components/MyCv.pdf";

const Hello = () => {
  const { mode } = useTheme();

  return (
    <div className="writting  flex flex-col  items-center">
      {/* Writting */}
      <div className="flex flex-col  items-center relative font-normal">
        <motion.p
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{
            duration: 0.6,
          }}
          className={`font-semibold  opacity-[0.6]  tracking-[2px] sm:tracking-[3px] md:tracking-[4px]  ${
            mode ? "text-[#add6e8d2]" : "text-[#333]"
          }  lg:text-[10rem] md:text-[8rem] sm:text-[6rem] text-[4.5rem] hello`}
        >
          Hello
        </motion.p>
        <motion.p
          initial={{ x: -150 }}
          animate={{ x: 0 }}
          transition={{
            duration: 1,
          }}
          className={` absolute bottom-1/3  md:bottom-1/4 text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] imYaqwb mobile-spacing  ${
            mode ? "text-[#548aa4]" : "text-[#548aa4]"
          } `}
        >
          I'm Yaqwb
        </motion.p>

        <motion.p className="text-[#9C9C9C] text-[0.9rem] sm:text-[1.2rem] md:text-[1.5rem] translate-y-[-1.5rem] sm:translate-y-[-1.8rem] mobile-frontend-spacing">
          Front-End Developer
        </motion.p>
      </div>

      <a href={pdf} download>
        <button
          className={`rounded ${
            mode
              ? "bg-[#83c3de]  hover:bg-[#9ed3ea]"
              : "bg-[#53595c]  hover:bg-[#88a3ae]"
          }  py-2 px-8 sm:px-12 md:px-16 lg:px-[5.8rem] text-white text-sm sm:text-base lg:translate-y-[-1rem] translate-y-[-1.3rem] transition-all duration-300 hover:scale-105`}
        >
          {" "}
          Resume
        </button>
      </a>
    </div>
  );
};

export default Hello;
