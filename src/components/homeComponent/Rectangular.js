import React from "react";
import Facebook from "../../components/imgs/facebook (1).png";
import Insta from "../../components/imgs/instagram.png";
import LinkedIn from "../../components/imgs/linkedin (1).png";
import GitHub from "../../components/imgs/github.png";
import useTheme from "../store/useTheme";

const Rectangular = () => {
  const { mode } = useTheme();

  return (
    <div>
      {/* #505c628d */}
      <div
        className={`flex rounded-r-md z-48 gap-4 absolute bottom-9 lg:pl-[10rem] md:pl-[7rem] pl-[3rem] py-[7px] pr-8  ${
          mode ? "bg-[#9cd5ee64]" : "bg-[#505C62]"
        }`}
      >
        <a
          target={"_blank"}
          aria-label="Facebook"
          rel="noreferrer"
          href="https://www.facebook.com/yaqubEng"
          className={` ${mode?'hover:brightness-75':'hover:brightness-125'} hover:transition-all hover:ease-in-out hover:duration-700`}
        >
          {" "}
          <img src={Facebook} className="w-[34px] h-[34px]" alt="Facebook" />
        </a>

        <a
          target={"_blank"}
          aria-label="Instagram"
          rel="noreferrer"
          href="https://www.instagram.com/yaqub_321_/"
          className={` ${mode?'hover:brightness-75':'hover:brightness-125'} hover:transition-all hover:ease-in-out hover:duration-700`}
        >
          {" "}
          <img src={Insta} className="w-[34px] h-[34px]" alt="Instagram" />
        </a>

        <a
          target={"_blank"}
          rel="noreferrer"
          aria-label="LinkedIn"
          className={` ${mode?'hover:brightness-75':'hover:brightness-125'} hover:transition-all hover:ease-in-out hover:duration-700`}
          href="https://www.linkedin.com/in/yaqwb-naqib-b9894b238/"
          
        >
          <img src={LinkedIn} className="w-[34px] h-[34px]" alt="linkedin" />
        </a>

        <a
          href="https://github.com/Yaqub-naqeb"
          aria-label="GitHub"
          target={"_blank"}
          className={` ${mode?'hover:brightness-75':'hover:brightness-125'} hover:transition-all hover:ease-in-out hover:duration-700`}
          rel="noreferrer"
        >
          <img src={GitHub} className="w-[34px] h-[34px]" alt="Github" />
        </a>
      </div>
    </div>
  );
};

export default Rectangular;
