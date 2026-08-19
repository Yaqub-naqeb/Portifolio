import React from "react";
import { motion } from "framer-motion";
import xom from "../components/imgs/2023_05_09_18_00_IMG_8569.jfif";
import My from "../components/My";
import useTheme from "../components/store/useTheme";
import { PROFILE } from "../data/profile";

const About = () => {
  const { mode } = useTheme();

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="about"
      className={`relative min-h-screen py-12 sm:py-16 md:py-20 w-full overflow-hidden ${
        mode
          ? "bg-gradient-to-b from-[#F8FCFD] to-[#ffff]"
          : "bg-[#262626] bg-gradient-to-b from-[#262626] to-[#262626]"
      }`}
    >
      <My name={"Me"} bg_name={"About"} label="About" />

      {/* Content */}
      <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
        {/* Image */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex-shrink-0 w-full sm:w-auto flex justify-center"
        >
          <div
            className={`relative group w-full max-w-[18rem] sm:max-w-[20rem] md:max-w-[22rem] lg:max-w-[24rem] xl:max-w-[26rem]`}
          >
            {/* Image container */}
            <div
              className={`relative rounded-2xl overflow-hidden ${
                mode ? "shadow-lg" : "shadow-xl shadow-black/20"
              } transition-all duration-300 group-hover:shadow-xl`}
            >
              <img
                src={xom}
                className={`${
                  mode ? "" : "brightness-95"
                } w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.01]`}
                alt="Yaqub Naqeb, frontend developer in Erbil"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </motion.div>

        {/* Description */}
        <motion.div
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex-1 max-w-2xl w-full space-y-6 sm:space-y-8"
        >
          <p className="text-[#ADD6E8] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-center lg:text-left leading-tight">
            Hi, I'm Yaqub.
          </p>

          <div className="space-y-5">
            <p className="text-[#ADD6E8] leading-8 sm:leading-9 text-base sm:text-lg md:text-xl">
              I'm a frontend developer based in Erbil, Kurdistan Region, Iraq.
              I specialize in React, TypeScript, Remix, and Next.js — building
              e-commerce and SaaS that hold up in production, including
              trilingual RTL interfaces, Laravel APIs, and payment flows.
            </p>
            <p className="text-[#ADD6E8] leading-8 sm:leading-9 text-base sm:text-lg md:text-xl">
              I currently own the frontend at{" "}
              <a
                href="https://www.izoneiraq.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline decoration-2 underline-offset-4 hover:opacity-80"
              >
                iZone Iraq
              </a>
              , serving 15k+ monthly users across five storefronts. Before that
              I built{" "}
              <a
                href="https://www.botolon.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline decoration-2 underline-offset-4 hover:opacity-80"
              >
                Botolon
              </a>{" "}
              and{" "}
              <a
                href="https://erbiliantravel.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline decoration-2 underline-offset-4 hover:opacity-80"
              >
                ErbilianWay
              </a>
              . I care about clean architecture, accessible UI, and shipping
              work people can rely on.
            </p>
          </div>

          <div className="mt-10 sm:mt-12 space-y-4">
            <p className="text-[#9C9C9C] font-semibold text-xl sm:text-2xl md:text-3xl text-left">
              Let's work together
            </p>
            <div className="text-[#9C9C9CA1] space-y-3 text-left">
              <p className="text-base sm:text-lg md:text-xl mb-3">
                What can I do for you?
              </p>
              <p className="text-base sm:text-lg md:text-xl">
                Shoot an email to{" "}
                <a
                  href={`mailto:${PROFILE.email}`}
                  className={`${
                    mode
                      ? "text-[#83c3de] hover:text-[#61b1d6]"
                      : "text-[#ADD6E8] hover:text-[#9cd5ee]"
                  } transition-colors duration-300 underline decoration-2 underline-offset-4 font-medium`}
                >
                  {PROFILE.email}
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
