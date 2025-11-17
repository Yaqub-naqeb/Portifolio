import React from "react";
import My from "../components/My";
import useTheme from "../components/store/useTheme";
import { motion } from "framer-motion";

const Services = () => {
  const { mode } = useTheme();

  const services = [
    {
      id: 1,
      title: "Web Development",
      description:
        "Building responsive, modern websites using React, Next.js, and the latest web technologies. Creating fast, scalable, and user-friendly web applications.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-12 h-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12M4.157 7.582A8.959 8.959 0 003 12m8.843-4.582A11.98 11.98 0 0012 4.5c-1.36 0-2.673.193-3.843.518m15.686 0A11.953 11.953 0 0112 10.5"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "UI/UX Design",
      description:
        "Designing intuitive and beautiful user interfaces. Focusing on user experience, accessibility, and modern design principles to create engaging digital experiences.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-12 h-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Frontend Architecture",
      description:
        "Designing and implementing scalable frontend architectures. Setting up project structures, state management, and optimizing performance for large-scale applications.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-12 h-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
          />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Performance Optimization",
      description:
        "Optimizing websites for speed and performance. Implementing best practices for loading times, code splitting, lazy loading, and overall user experience improvements.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-12 h-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
          />
        </svg>
      ),
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
      id="services"
      className={`min-h-screen py-12 sm:py-16 md:py-20 relative ${
        mode ? "bg-white" : "bg-[#262626]"
      }`}
    >
      <My name={"Services"} bg_name={"What I Do"} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className={`group rounded-2xl p-6 sm:p-8 md:p-10 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 ${
                mode
                  ? "bg-gradient-to-br from-[#F0F7FB] to-[#E8F4F8] border border-[#E0EFF5] shadow-md hover:shadow-xl hover:shadow-[#9cd5ee]/20"
                  : "bg-gradient-to-br from-[#2d2d2d] to-[#1f1f1f] border border-[#3a3a3a] shadow-md hover:shadow-xl hover:shadow-[#505C62]/30"
              }`}
            >
              <div
                className={`mb-6 transition-transform duration-300 group-hover:scale-110 ${
                  mode ? "text-[#83c3de]" : "text-[#ADD6E8]"
                }`}
              >
                {service.icon}
              </div>
              <h3
                className={`text-2xl sm:text-3xl font-bold mb-4 transition-colors duration-300 ${
                  mode ? "text-[#1a1a1a]" : "text-white"
                }`}
              >
                {service.title}
              </h3>
              <p
                className={`text-base sm:text-lg leading-relaxed ${
                  mode ? "text-[#4a4a4a]" : "text-[#d0d0d0]"
                }`}
              >
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

