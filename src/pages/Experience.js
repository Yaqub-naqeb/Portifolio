import React from "react";
import My from "../components/My";
import useTheme from "../components/store/useTheme";
import { motion } from "framer-motion";

const Experience = () => {
  const { mode } = useTheme();

  const experiences = [
    {
      id: 1,
      title: "BSc Software Engineering",
      company: "Koya University",
      period: "Nov 2020 – May 2024",
      meta: "Erbil, Iraq",
      highlights: [
        "Completed a Software Engineering degree with a foundation in programming, web technologies and modern software development practices.",
      ],
      type: "education",
    },
    {
      id: 2,
      title: "Frontend Developer Intern",
      company: "Jiasaz for IT Services & Solutions",
      period: "Jun 2023 – Sep 2023",
      highlights: [
        "First professional role — worked on real client projects with the Jiasaz team, including the ErbilianWay travel site frontend. Strengthened problem-solving, teamwork, and delivery under real-world product constraints.",
      ],
      type: "work",
    },
    {
      id: 3,
      title: "Frontend Developer",
      company: "Botolon",
      companyUrl: "https://www.botolon.com/",
      period: "Nov 2023 – Apr 2025",
      meta: "Contract, Remote · Erbil, Iraq",
      highlights: [
        "Engineered the web client for a chatbot automation platform serving 50+ business accounts, built with Next.js, Sass and the Meta Graph API.",
        "Implemented a visual conversation-flow builder and analytics dashboard with drag-and-drop state management for multi-step automation sequences.",
        "Established a shared component and layout library standardising forms, tables and modals across the product.",
        "Sustained sub-100ms interaction latency under live message volume via list virtualisation, React memoisation and debounced API polling.",
      ],
      type: "work",
    },
    {
      id: 4,
      title: "Frontend Developer",
      company: "iZone Iraq",
      companyUrl: "https://www.izoneiraq.com/",
      period: "Apr 2024 – Present",
      meta: "Full-time, On-site · Erbil, Iraq",
      highlights: [
        "Own the TypeScript frontend for a multi-brand commerce platform (iZone, OneStore, Apple Zone, Mantiqa, Strap Iraq) serving 15,000+ monthly users, built with React Router (Remix), server-side loaders and a Tailwind CSS design system shared across all five brands.",
        "Ship English, Arabic and Kurdish with full RTL support and currency-aware catalogue pricing against a Laravel API, so one codebase serves every regional storefront without duplicated UI.",
        "Reduced Largest Contentful Paint on catalogue and product routes from 3.8s to 1.4s with route-level code splitting, below-the-fold lazy loading and product-image preloading.",
        "Built checkout and payments end-to-end: Mapbox address capture, wallet top-up and First Iraqi Bank QR payments with status polling, session recovery and full error-state coverage.",
        "Delivered Digital Cards, IMEI device lookup, live FX rates and community Q&A on the same platform, gated by server-driven feature flags.",
      ],
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
          <div
            className={`absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 ${
              mode ? "bg-[#9cd5ee]" : "bg-[#505C62]"
            }`}
          />

          <div className="space-y-12 sm:space-y-16">
            {experiences.map((exp) => (
              <motion.article
                key={exp.id}
                variants={itemVariants}
                className="relative pl-12 sm:pl-20"
              >
                <div
                  className={`absolute left-2 sm:left-6 top-2 w-4 h-4 sm:w-5 sm:h-5 rounded-full border-4 ${
                    mode
                      ? "bg-white border-[#9cd5ee]"
                      : "bg-[#262626] border-[#ADD6E8]"
                  } z-10`}
                />

                <div
                  className={`rounded-2xl p-6 sm:p-8 transition-shadow duration-300 ${
                    mode
                      ? "bg-[#F8FBFD] border border-[#E0EFF5] shadow-sm hover:shadow-md"
                      : "bg-[#242424] border border-[#3a3a3a] shadow-sm hover:shadow-md"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-2">
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
                        {exp.companyUrl ? (
                          <a
                            href={exp.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline underline-offset-4"
                          >
                            {exp.company}
                          </a>
                        ) : (
                          exp.company
                        )}
                      </p>
                      {exp.meta && (
                        <p
                          className={`text-sm sm:text-base mt-1 ${
                            mode ? "text-[#6b7280]" : "text-[#9C9C9C]"
                          }`}
                        >
                          {exp.meta}
                        </p>
                      )}
                    </div>
                    <span
                      className={`px-4 py-2 rounded-full text-sm sm:text-base font-medium whitespace-nowrap self-start ${
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
                  {exp.highlights.length === 1 ? (
                    <p
                      className={`text-base sm:text-lg leading-relaxed ${
                        mode ? "text-[#4a4a4a]" : "text-[#d0d0d0]"
                      }`}
                    >
                      {exp.highlights[0]}
                    </p>
                  ) : (
                    <ul
                      className={`text-base sm:text-lg leading-relaxed space-y-2 list-disc pl-5 ${
                        mode ? "text-[#4a4a4a]" : "text-[#d0d0d0]"
                      }`}
                    >
                      {exp.highlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
