import React from "react";
import Facebook from "../../components/imgs/facebook (1).png";
import Insta from "../../components/imgs/instagram.png";
import LinkedIn from "../../components/imgs/linkedin (1).png";
import GitHub from "../../components/imgs/github.png";
import useTheme from "../store/useTheme";

const Rectangular = () => {
  const { mode } = useTheme();

  return (
    <div
      className={`flex rounded-lg gap-2 sm:gap-2.5 px-2 sm:px-2.5 py-1.5 sm:py-2 transition-all duration-300 backdrop-blur-sm hover:scale-105 ${
        mode
          ? "bg-[#9cd5ee64] hover:bg-[#9cd5ee80]"
          : "bg-[#505C62] hover:bg-[#505C6290]"
      }`}
    >
      <a
        target={"_blank"}
        aria-label="Facebook"
        rel="noreferrer"
        href="https://www.facebook.com/YaqwbEng"
        className={`flex items-center justify-center min-w-[40px] min-h-[36px] p-1 sm:p-1.5 rounded-md active:scale-95 ${
          mode ? "hover:brightness-75" : "hover:brightness-125"
        } transition-all duration-300 hover:scale-110`}
      >
        <img
          src={Facebook}
          className="w-6 h-6 sm:w-6 sm:h-6 md:w-7 md:h-7"
          alt="Facebook"
          loading="lazy"
        />
      </a>

      <a
        target={"_blank"}
        aria-label="Instagram"
        rel="noreferrer"
        href="https://www.instagram.com/Yaqwb_321_/"
        className={`flex items-center justify-center min-w-[40px] min-h-[36px] p-1 sm:p-1.5 rounded-md active:scale-95 ${
          mode ? "hover:brightness-75" : "hover:brightness-125"
        } transition-all duration-300 hover:scale-110`}
      >
        <img
          src={Insta}
          className="w-6 h-6 sm:w-6 sm:h-6 md:w-7 md:h-7"
          alt="Instagram"
          loading="lazy"
        />
      </a>

      <a
        target={"_blank"}
        rel="noreferrer"
        aria-label="LinkedIn"
        href="https://www.linkedin.com/in/Yaqwb-naqeeb-b9894b238/"
        className={`flex items-center justify-center min-w-[40px] min-h-[36px] p-1 sm:p-1.5 rounded-md active:scale-95 ${
          mode ? "hover:brightness-75" : "hover:brightness-125"
        } transition-all duration-300 hover:scale-110`}
      >
        <img
          src={LinkedIn}
          className="w-6 h-6 sm:w-6 sm:h-6 md:w-7 md:h-7"
          alt="LinkedIn"
          loading="lazy"
        />
      </a>

      <a
        href="https://github.com/Yaqwb-naqeb"
        aria-label="GitHub"
        target={"_blank"}
        className={`flex items-center justify-center min-w-[40px] min-h-[36px] p-1 sm:p-1.5 rounded-md active:scale-95 ${
          mode ? "hover:brightness-75" : "hover:brightness-125"
        } transition-all duration-300 hover:scale-110`}
        rel="noreferrer"
      >
        <img
          src={GitHub}
          className="w-6 h-6 sm:w-6 sm:h-6 md:w-7 md:h-7"
          alt="GitHub"
          loading="lazy"
        />
      </a>
    </div>
  );
};

export default Rectangular;
