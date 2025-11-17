import React, { useEffect, useState } from "react";
import useTheme from "../components/store/useTheme";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Statistics = () => {
  const { mode } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    {
      id: 1,
      number: 6,
      label: "Projects Completed",
      suffix: "+",
    },
    {
      id: 2,
      number: 2,
      label: "Years Experience",
      suffix: "+",
    },
    {
      id: 3,
      number: 18,
      label: "Technologies Mastered",
      suffix: "+",
    },
    {
      id: 4,
      number: 100,
      label: "Client Satisfaction",
      suffix: "%",
    },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    if (isInView) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const interval = duration / steps;
      const timers = [];

      stats.forEach((stat, index) => {
        let currentStep = 0;
        const increment = stat.number / steps;

        const timer = setInterval(() => {
          currentStep++;
          setCounts((prev) => {
            const newCounts = [...prev];
            if (currentStep <= steps) {
              newCounts[index] = Math.min(
                Math.floor(increment * currentStep),
                stat.number
              );
            } else {
              newCounts[index] = stat.number;
            }
            return newCounts;
          });
        }, interval);
        
        timers.push(timer);
      });

      return () => {
        timers.forEach(timer => clearInterval(timer));
      };
    }
  }, [isInView]);

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
      ref={ref}
      className={`py-12 sm:py-16 md:py-20 relative ${
        mode
          ? "bg-gradient-to-b from-white to-[#F8FCFD]"
          : "bg-gradient-to-b from-[#262626] to-[#1f1f1f]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              variants={itemVariants}
              className={`text-center rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:scale-105 hover:-translate-y-2 ${
                mode
                  ? "bg-gradient-to-br from-[#F0F7FB] to-[#E8F4F8] border border-[#E0EFF5] shadow-md hover:shadow-xl hover:shadow-[#9cd5ee]/20"
                  : "bg-gradient-to-br from-[#2d2d2d] to-[#1f1f1f] border border-[#3a3a3a] shadow-md hover:shadow-xl hover:shadow-[#505C62]/30"
              }`}
            >
              <motion.div
                className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 sm:mb-4 ${
                  mode ? "text-[#83c3de]" : "text-[#ADD6E8]"
                }`}
              >
                {counts[index]}
                {stat.suffix}
              </motion.div>
              <p
                className={`text-sm sm:text-base md:text-lg font-medium ${
                  mode ? "text-[#4a4a4a]" : "text-[#d0d0d0]"
                }`}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Statistics;

