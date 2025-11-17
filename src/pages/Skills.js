import React, { useState } from "react";
import { motion } from "framer-motion";
import "../App.css";
import useTheme from "../components/store/useTheme";
import My from "../components/My";
import { SkillInfo } from "../components/SkillInfo";
import SkillsInfo from "../components/skill_info/Skills_info";

const Skills = () => {
  const [skls] = useState(SkillInfo);
  const { mode } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <section
      id="skills"
      className={`min-h-screen py-12 sm:py-16 md:py-20 relative ${
        mode ? "bg-white" : "bg-[#262626]"
      } `}
    >
      <My name={"Skills"} bg_name={"My"} />

      <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-5 md:gap-6 lg:gap-8 max-w-6xl w-full"
        >
          {skls &&
            skls.map((skill) => (
              <motion.div key={skill.id} variants={itemVariants}>
                <SkillsInfo skill={skill} />
              </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
