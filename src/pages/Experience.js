import React from "react";
import My from "../components/My";
import useTheme from "../components/store/useTheme";
import { motion } from "framer-motion";

const Experience = () => {
  const { mode } = useTheme();

  const experiences = [
    {
      id: 1,
      title: "B.Sc. Software Engineering",
      company: "University of Koya",
      period: "Graduated",
      description:
        "Completed a Software Engineering degree with a strong foundation in programming, web technologies, and modern software development practices — the base for everything that followed.",
      type: "education",
    },
    {
      id: 2,
      title: "Frontend Developer Intern",
      company: "Jiasaz for IT Services & Solutions",
      period: "Jun 2023 – Sep 2023",
      description:
        "First professional role — worked on real client projects with the Jiasaz team, including the ErbilianWay travel site frontend. Strengthened problem-solving, teamwork, and delivery under real-world product constraints.",
      type: "work",
    },
    {
      id: 3,
      title: "Frontend Developer",
      company: "Botolon",
      period: "Nov 2023 – Apr 2024",
      description:
        "Contributed to Botolon’s chatbot platform for business–customer automation on Meta networks (Facebook, Instagram, Messenger). Focused on clean, responsive UI so teams could manage conversations and engage customers with ease.",
      type: "work",
    },
    {
      id: 4,
      title: "Frontend Developer",
      company: "iZone",
      period: "Apr 2024 – Present",
      description:
        "Building and maintaining the frontend for iZone’s Apple products platform in Iraq. Shipping responsive, high-performance interfaces with React Router and Tailwind — from product browsing and pricing to a polished experience across devices.",
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
                  className={`rounded-2xl p-6 sm:p-8 transition-shadow duration-300 ${
                    mode
                      ? "bg-[#F8FBFD] border border-[#E0EFF5] shadow-sm hover:shadow-md"
                      : "bg-[#242424] border border-[#3a3a3a] shadow-sm hover:shadow-md"
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

