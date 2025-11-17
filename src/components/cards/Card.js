import React from "react";
import useTheme from "../store/useTheme";

const Card = ({ info, id }) => {
  const { mode } = useTheme();

  return (
    <article className="flex flex-col gap-4 sm:gap-6 md:gap-8 justify-center items-center pb-2 sm:pb-4 md:pb-6">
      {/* Project Number */}
      <div className="flex items-center gap-4 w-full max-w-6xl">
        <div
          className={`rounded-full w-4 h-4 sm:w-5 sm:h-5 bg-[#9c9c9c34] ${
            mode ? "" : "bg-[#9c9c9c60]"
          }`}
        ></div>
        <div className="text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.4rem] font-bold text-[#a4d3e776] leading-none tracking-tight">
          {info.num}
        </div>
      </div>

      {/* Project Card */}
      <div
        className={`flex flex-col lg:flex-row w-full max-w-6xl p-3 sm:p-4 md:p-6 lg:p-8 transition-all duration-300 ease-out rounded-xl sm:rounded-2xl ${
          mode
            ? "bg-gradient-to-br from-[#f8f9fa] to-[#f0f1f2] border border-[#e5e7eb] shadow-md hover:shadow-xl hover:shadow-[#9cd5ee]/20"
            : "bg-gradient-to-br from-[#2d2d2d] to-[#1f1f1f] border border-[#3a3a3a] shadow-md hover:shadow-xl hover:shadow-[#505C62]/30"
        } gap-3 sm:gap-4 md:gap-6 lg:gap-10 items-center justify-between mb-4 sm:mb-6 md:mb-8 hover:scale-[1.01] hover:-translate-y-1 ${
          info.style === "flex-row-reverse" ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* Project Image */}
        <div className="w-full lg:w-auto flex-shrink-0">
          <div className="relative overflow-hidden rounded-lg sm:rounded-xl">
            <img
              src={info.img}
              className="w-full lg:w-[35rem] rounded-lg sm:rounded-xl object-cover"
              alt={`${info.title} project screenshot`}
              loading="lazy"
            />
          </div>
        </div>

        {/* Project Description */}
        <div className="flex flex-col text-left self-start flex-1 space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
          <div>
            <h2
              className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 ${
                mode ? "text-[#1a1a1a]" : "text-white"
              }`}
            >
              {info.title}
            </h2>

            <div
              className={`leading-5 sm:leading-6 md:leading-7 lg:leading-8 ${
                mode ? "text-[#4a4a4a]" : "text-[#d0d0d0]"
              } text-xs sm:text-sm md:text-base lg:text-lg`}
            >
              {info.description.map((row, index) => (
                <p key={index} className="mb-1.5 sm:mb-2 md:mb-3">
                  {row.p}
                </p>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 sm:gap-2.5 justify-start">
            {info.tools.map((tol, index) => (
              <span
                key={index}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-medium text-xs sm:text-sm md:text-base transition-all duration-300 ${
                  mode
                    ? "bg-[#E9EEFA] text-[#306CC4] hover:bg-[#D0DCF5]"
                    : "bg-[#3a3a3a] text-[#9cd5ee] hover:bg-[#4a4a4a]"
                }`}
              >
                {tol.tool}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 sm:gap-4 items-center justify-start pt-2">
            {/* Demo Link */}
            {info.demo && (
              <a
                target="_blank"
                rel="noreferrer"
                href={info.demo}
                aria-label={`View ${info.title} demo`}
                className={`flex items-center gap-2 border-2 rounded-full px-4 py-2 sm:px-6 sm:py-3 transition-all duration-300 hover:scale-105 font-medium ${
                  mode
                    ? "border-[#ADD6E8] text-[#4d4d4d] hover:bg-[#ADD6E8] hover:text-white"
                    : "border-[#ADD6E8] text-white hover:bg-[#ADD6E8] hover:text-[#1a1a1a]"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                  />
                </svg>
                <span className="text-xs sm:text-sm md:text-base">Demo</span>
              </a>
            )}

            {/* Source Code Link */}
            {info.code && info.url && (
              <a
                target="_blank"
                href={info.url}
                rel="noreferrer"
                aria-label={`View ${info.title} source code`}
                className={`flex items-center gap-2 border-2 rounded-full px-4 py-2 sm:px-6 sm:py-3 transition-all duration-300 hover:scale-105 font-medium ${
                  mode
                    ? "border-[#ADD6E8] text-[#4d4d4d] hover:bg-[#ADD6E8] hover:text-white"
                    : "border-[#ADD6E8] text-white hover:bg-[#ADD6E8] hover:text-[#1a1a1a]"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                  />
                </svg>
                <span className="text-xs sm:text-sm md:text-base">Code</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;
