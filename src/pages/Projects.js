import React, { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import Card from "../components/cards/Card";
import { Info } from "../components/cards/Info";
import My from "../components/My";
import useTheme from "../components/store/useTheme";

const Projects = () => {
  const { mode } = useTheme();
  const containerRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const isInView = useInView(containerRef, {
    once: true,
    amount: 0.08,
    margin: "0px 0px -40px 0px",
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.45,
      },
    },
  };

  return (
    <section
      id="projects"
      className={`lg:pt-[6rem] md:pt-[4rem] pt-[3rem] pb-12 sm:pb-16 md:pb-20 z-41 min-h-screen ${
        mode ? "bg-white" : "bg-[#262626]"
      }`}
    >
      <My name={"Projects"} bg_name={"My"} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16"
        >
          {Info.map((info) => (
            <motion.div key={info.id} variants={itemVariants}>
              <Card id={info.id} info={info} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
