import React from "react";
import useTheme from "../store/useTheme";

const Skills_info = ({ skill }) => {
  const { mode } = useTheme();

  // Get icon filter classes based on mode
  const getIconFilter = () => {
    // Icons that already have proper colors and don't need filtering
    const coloredIcons = [""];

    // Icons that need brightness inversion in light mode only
    const invertInLightIcons = [""];

    if (coloredIcons.includes(skill.name)) {
      // Keep original colors for Firebase and Figma
      return "";
    }

    if (invertInLightIcons.includes(skill.name)) {
      // Make dark in light mode, keep original in dark mode
      return mode ? "filter brightness-0" : "";
    }

    // For all other icons: dark mode = white, light mode = dark
    if (mode) {
      // Light mode: make icons dark (brightness-0 makes them black)
      return "filter brightness-0 saturate-100";
    } else {
      // Dark mode: make icons white (brightness-0 then invert makes them white)
      return "filter brightness-0 invert";
    }
  };

  return (
    <div
      className={`group rounded-2xl p-4 sm:p-5 md:p-5 lg:p-6 xl:p-6 transition-all duration-300 ease-out hover:scale-[1.05] sm:hover:scale-110 hover:-translate-y-1 sm:hover:-translate-y-2 flex flex-col items-center justify-center w-full h-full aspect-square text-center ${
        mode
          ? "bg-gradient-to-br from-[#F0F7FB] to-[#E8F4F8] hover:shadow-lg sm:hover:shadow-xl hover:shadow-[#9cd5ee40] border border-[#E0EFF5]"
          : "bg-gradient-to-br from-[#2d2d2d] to-[#1f1f1f] hover:shadow-lg sm:hover:shadow-xl hover:shadow-[#505C6240] border border-[#3a3a3a]"
      }`}
    >
      <div
        className={`mb-2 sm:mb-3 md:mb-4 transition-transform duration-300 group-hover:scale-[1.08] sm:group-hover:scale-110 flex items-center justify-center flex-1`}
      >
        <img
          src={skill.img}
          className={`w-[3.5rem] sm:w-[3.8rem] md:w-[4rem] lg:w-[4.2rem] xl:w-[4.5rem] h-[3.5rem] sm:h-[3.8rem] md:h-[4rem] lg:h-[4.2rem] xl:h-[4.5rem] ${
            skill.rounded ? "rounded-full" : ""
          } object-contain ${getIconFilter()} transition-all duration-300 group-hover:opacity-90`}
          alt={`${skill.name} logo`}
          loading="lazy"
        />
      </div>
      <p
        className={`font-semibold text-xs sm:text-sm md:text-base lg:text-lg transition-colors duration-300 ${
          mode
            ? "text-[#4a4a4a] group-hover:text-[#2a2a2a]"
            : "text-[#e0e0e0] group-hover:text-white"
        }`}
      >
        {skill.name}
      </p>
    </div>
  );
};

export default Skills_info;
