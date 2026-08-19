"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function Hello() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.p
      aria-hidden="true"
      initial={reduceMotion ? false : { y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="font-semibold opacity-[0.6] tracking-[2px] sm:tracking-[3px] md:tracking-[4px] text-[#add6e8d2] dark:text-[#333] lg:text-[10rem] md:text-[8rem] sm:text-[6rem] text-[4.5rem] hello"
    >
      Hello
    </motion.p>
  );
}
