import React from "react";
import My from "../components/My";
import useTheme from "../components/store/useTheme";
import { motion } from "framer-motion";

const Experience = () => {
  const { mode } = useTheme();

  const experiences = [
    {
      id: 1,
      title: "Software Engineering Degree",
      company: "University of Koya",
      period: "Graduated",
      description:
        "Completed a comprehensive Software Engineering program, gaining expertise in software development, web technologies, and modern programming practices.",
      type: "education",
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "Freelance & Projects",
      period: "2023 - Present",
      description:
        "Building modern, responsive web applications using React, Next.js, and various frontend technologies. Working on diverse projects including e-commerce platforms, travel websites, and business applications.",
      type: "work",
    },
    {
      id: 3,
      title: "Web Development Focus",
      company: "Self-Learning & Practice",
      period: "2022 - Present",
      description:
        "Dedicated to mastering frontend development through continuous learning, building projects, and staying updated with the latest web technologies and best practices.",
      type: "work",
    },
  ];

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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="experience"
      className={`min-h-screen py-12 sm:py-16 md:py-20 relative ${
        mode
          ? "bg-gradient-to-b from-[#F8FCFD] to-[#ffff]"
          : "bg-[#262626]"
      }`}
    >
      <My name={"Experience"} bg_name={"My Journey"} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative"
        >
          {/* Timeline line */}
          <div
            className={`absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 ${
              mode ? "bg-[#9cd5ee]" : "bg-[#505C62]"
            }`}
          />

          <div className="space-y-12 sm:space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className="relative pl-12 sm:pl-20"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-2 sm:left-6 top-2 w-4 h-4 sm:w-5 sm:h-5 rounded-full border-4 ${
                    mode
                      ? "bg-white border-[#9cd5ee]"
                      : "bg-[#262626] border-[#ADD6E8]"
                  } z-10`}
                />

                {/* Content card */}
                <div
                  className={`rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:scale-[1.01] hover:-translate-y-1 ${
                    mode
                      ? "bg-gradient-to-br from-[#F0F7FB] to-[#E8F4F8] border border-[#E0EFF5] shadow-md hover:shadow-xl hover:shadow-[#9cd5ee]/20"
                      : "bg-gradient-to-br from-[#2d2d2d] to-[#1f1f1f] border border-[#3a3a3a] shadow-md hover:shadow-xl hover:shadow-[#505C62]/30"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                    <div>
                      <h3
                        className={`text-xl sm:text-2xl md:text-3xl font-bold mb-2 ${
                          mode ? "text-[#1a1a1a]" : "text-white"
                        }`}
                      >
                        {exp.title}
                      </h3>
                      <p
                        className={`text-lg sm:text-xl font-semibold ${
                          mode ? "text-[#83c3de]" : "text-[#ADD6E8]"
                        }`}
                      >
                        {exp.company}
                      </p>
                    </div>
                    <span
                      className={`px-4 py-2 rounded-full text-sm sm:text-base font-medium ${
                        exp.type === "work"
                          ? mode
                            ? "bg-[#E9EEFA] text-[#306CC4]"
                            : "bg-[#3a3a3a] text-[#9cd5ee]"
                          : mode
                          ? "bg-[#E8F4F8] text-[#548aa4]"
                          : "bg-[#3a3a3a] text-[#ADD6E8]"
                      }`}
                    >
                      {exp.period}
                    </span>
                  </div>
                  <p
                    className={`text-base sm:text-lg leading-relaxed ${
                      mode ? "text-[#4a4a4a]" : "text-[#d0d0d0]"
                    }`}
                  >
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

