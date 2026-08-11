import React, { useEffect, useId, useRef } from "react";
import { HashLink } from "react-router-hash-link";

import "../../App.css";

import { motion, AnimatePresence } from "framer-motion";
import useTheme from "../../components/store/useTheme";

const NAV_LINKS = [
  { to: "#home", label: "Home" },
  { to: "#about", label: "About" },
  { to: "#services", label: "Services" },
  { to: "#skills", label: "Skills" },
  { to: "#experience", label: "Experience" },
  { to: "#projects", label: "Projects" },
  { to: "#contacts", label: "Contacts" },
];

const panelVariants = {
  open: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 280, damping: 28 },
  },
  closed: {
    opacity: 0,
    x: "8%",
    transition: { duration: 0.25 },
  },
};

const Navbar = () => {
  const { un, Under, mode } = useTheme();
  const menuId = useId();
  const buttonRef = useRef(null);

  useEffect(() => {
    if (un) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [un]);

  useEffect(() => {
    if (!un) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        Under(false);
        buttonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [un, Under]);

  return (
    <div
      className={`fixed right-0 ${un ? "w-[90vw]" : "w-fit"} h-[100vh] z-30`}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-label={un ? "Close menu" : "Open menu"}
        aria-expanded={un}
        aria-controls={menuId}
        onClick={() => Under(!un)}
        className={`fixed z-40 right-4 sm:right-6 md:right-8 top-4 sm:top-6 md:top-8 rounded-lg p-1.5 sm:p-2 md:p-2.5 transition-all duration-300 backdrop-blur-sm ${
          mode
            ? "bg-[#9cd5ee64] hover:bg-[#9cd5ee80]"
            : "bg-[#505C62] hover:bg-[#505C6290]"
        }`}
      >
        <div
          className={`tham tham-e-squeeze md:tham-w-8 tham-w-5 sm:tham-w-6 lg:tham-w-8${
            un ? " tham-active" : ""
          }`}
        >
          <div className="tham-box">
            <div
              className={`tham-inner ${
                mode
                  ? un
                    ? "bg-[#fffb]"
                    : "bg-[#55a2c5e6]"
                  : un
                    ? "bg-[#fffb]"
                    : "bg-[#add6e8c5]"
              }`}
            />
          </div>
        </div>
      </button>

      <AnimatePresence>
        {un && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`${
                mode
                  ? "bg-[#e4e4e480] backdrop-blur-[0.1rem]"
                  : "bg-[#53525247] backdrop-blur-[0.2rem]"
              } top-0 right-0 h-[100vh] w-[100vw] absolute`}
              onClick={() => Under(false)}
              aria-hidden="true"
            />
            <motion.nav
              id={menuId}
              role="navigation"
              aria-label="Primary"
              initial="closed"
              animate="open"
              exit="closed"
              variants={panelVariants}
            >
              <ul
                className={`${
                  mode ? "bg-[#92cae2] " : "bg-[#2d2d2ddf] "
                } overflow-hidden fixed right-0 lg:pl-5 md:pl-5 h-[100vh] lg:w-[35%] md:w-[45%] w-screen flex flex-col py-[8rem] gap-[2rem]`}
              >
                {NAV_LINKS.map(({ to, label }) => (
                  <li
                    key={label}
                    className={`${
                      mode ? "dv" : "dvDark"
                    } z-50 w-full rounded-md flex flex-col justify-evenly lg:items-start md:items-start items-center h-[3.5rem]`}
                  >
                    <HashLink
                      to={to}
                      smooth
                      onClick={() => Under(false)}
                      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl absolute list text-[#fff]"
                    >
                      {label}
                    </HashLink>
                  </li>
                ))}
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
