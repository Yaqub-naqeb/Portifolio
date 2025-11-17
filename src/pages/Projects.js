import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Card from "../components/cards/Card";
import { Info } from "../components/cards/Info";
import My from "../components/My";
import useTheme from "../components/store/useTheme";

const Projects = () => {
  const [obj] = useState(Info);
  const { mode } = useTheme();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, {
    once: true,
    amount: 0.1,
    margin: "0px 0px -50px 0px",
  });
  const [shouldShow, setShouldShow] = useState(false);

  // Fallback: ensure visibility after a delay or if already in viewport
  useEffect(() => {
    const checkVisibility = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        if (isVisible) {
          setShouldShow(true);
        }
      }
    };

    // Check immediately
    checkVisibility();

    // Fallback timeout to ensure visibility after 1 second
    const timeout = setTimeout(() => {
      setShouldShow(true);
    }, 1000);

    // Check on scroll
    window.addEventListener("scroll", checkVisibility, { passive: true });

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", checkVisibility);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
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
          animate={isInView || shouldShow ? "visible" : "hidden"}
          className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16"
        >
          {obj.map((info, index) => (
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
