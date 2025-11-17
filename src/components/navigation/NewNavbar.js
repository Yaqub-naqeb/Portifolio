import React from "react";
import { HashLink } from "react-router-hash-link";
import classNames from "classnames";

import "../../App.css";

import { motion } from "framer-motion";
import useTheme from "../../components/store/useTheme";

const variants = {
  open: { opacity: 1, x: "0%" },
  closed: { opacity: 0, x: "1%" },
  delay: 5,
};
const Navbar = () => {
  const { un, Under, mode } = useTheme();

  return (
    // ${un ? 'z-40':'z-50' }
    <div
      className={`fixed right-0 ${un ? "w-[90vw]" : "w-fit"}  h-[100vh]  z-30`}
    >
      {/* text-[#004870] */}
      <button
        aria-label="burger_button"
        onClick={() => Under(!un)}
        className={`fixed z-40 right-4 sm:right-6 md:right-8 top-4 sm:top-6 md:top-8 rounded-lg p-2 sm:p-2.5 transition-all duration-300 backdrop-blur-sm ${
          mode
            ? "bg-[#9cd5ee64] hover:bg-[#9cd5ee80]"
            : "bg-[#505C62] hover:bg-[#505C6290]"
        }`}
      >
        <div
          className={classNames(
            `tham tham-e-squeeze md:tham-w-8 tham-w-6 lg:tham-w-8`,
            { "tham-active": un }
          )}
        >
          <div className="tham-box">
            <div
              className={`tham-inner  ${
                mode
                  ? ` ${un ? "bg-[#fffb]" : "bg-[#55a2c5e6]"} `
                  : `${un ? "bg-[#fffb]" : "bg-[#add6e8c5]"}`
              } tham-active`}
            />
          </div>
        </div>
      </button>

      {/* blur */}
      <div
        className={
          un
            ? ` ${
                mode
                  ? "bg-[#e4e4e480] backdrop-blur-[0.1rem]"
                  : "bg-[#53525247] backdrop-blur-[0.2rem]"
              } top-0 right-0  h-[100vh] w-[100vw] absolute `
            : "hidden"
        }
        onClick={() => Under(false)}
      />
      {/* nav */}
      <motion.nav
        animate={un ? "open delay" : "closed"}
        variants={variants}
        className={`${un ? "open delay" : "close hidden"}`}
      >
        <ul
          className={`bg-[#ADD6E8]  ${
            mode ? "bg-[#92cae2] " : "bg-[#2d2d2ddf] "
          }
overflow-hidden
fixed right-0 lg:pl-5 md:pl-5
 h-[100vh] lg:w-[35%] md:w-[45%] w-screen 
 flex flex-col  py-[8rem] gap-[2rem]
 
 
 `}
        >
          <li
            className={` ${
              mode ? "dv" : "dvDark"
            }    hover:scale-105 transition-all duration-200 ease-in-out z-50 w-full rounded-md flex flex-col  justify-evenly  lg:items-start md:items-start items-center  h-[3.5rem] `}
          >
            {" "}
            <HashLink
              to={"#"}
              smooth
              onClick={() => Under(false)}
              className={`  text-5xl  absolute list text-[#fff] `}
            >
              Home
            </HashLink>{" "}
          </li>
          <li
            className={` ${
              mode ? "dv" : "dvDark"
            }    hover:scale-105 transition-all duration-200 ease-in-out z-50 w-full rounded-md flex flex-col  justify-evenly  lg:items-start md:items-start items-center  h-[3.5rem] `}
          >
            {" "}
            <HashLink
              to={"#about"}
              smooth
              onClick={() => Under(false)}
              className={`  text-5xl  absolute list text-[#fff] `}
            >
              About
            </HashLink>{" "}
          </li>
          <li
            className={` ${
              mode ? "dv" : "dvDark"
            }    hover:scale-105 transition-all duration-200 ease-in-out z-50 w-full rounded-md flex flex-col  justify-evenly  lg:items-start md:items-start items-center  h-[3.5rem] `}
          >
            {" "}
            <HashLink
              to={"#skills"}
              smooth
              onClick={() => Under(false)}
              className={`  text-5xl  absolute list text-[#fff] `}
            >
              Skills
            </HashLink>{" "}
          </li>
          <li
            className={` ${
              mode ? "dv" : "dvDark"
            }    hover:scale-105 transition-all duration-200 ease-in-out z-50 w-full rounded-md flex flex-col  justify-evenly  lg:items-start md:items-start items-center  h-[3.5rem] `}
          >
            {" "}
            <HashLink
              to={"#projects"}
              smooth
              onClick={() => Under(false)}
              className={`  text-5xl  absolute list text-[#fff] `}
            >
              Projects
            </HashLink>{" "}
          </li>
          <li
            className={` ${
              mode ? "dv" : "dvDark"
            }    hover:scale-105 transition-all duration-200 ease-in-out z-50 w-full rounded-md flex flex-col  justify-evenly  lg:items-start md:items-start items-center  h-[3.5rem] `}
          >
            {" "}
            <HashLink
              to={"#contacts"}
              smooth
              onClick={() => Under(false)}
              className={`  text-5xl  absolute list text-[#fff] `}
            >
              Contacts
            </HashLink>{" "}
          </li>
        </ul>
      </motion.nav>
      {/*  */}
    </div>
  );
};

export default Navbar;
