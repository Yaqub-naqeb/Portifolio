"use client";

import { useEffect, useId, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useTheme from "@/components/store/useTheme";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contacts", label: "Contact" },
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

export default function Navbar() {
  const { un, Under } = useTheme();
  const menuId = useId();
  const buttonRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = un ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [un]);

  useEffect(() => {
    if (!un) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        Under(false);
        buttonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [un, Under]);

  return (
    <header>
      <button
        ref={buttonRef}
        type="button"
        aria-label={un ? "Close menu" : "Open menu"}
        aria-expanded={un}
        aria-controls={menuId}
        onClick={() => Under(!un)}
        className="fixed z-40 right-4 sm:right-6 md:right-8 top-4 sm:top-6 md:top-8 rounded-lg p-2 sm:p-2.5 md:p-3 min-w-11 min-h-11 flex items-center justify-center transition-colors duration-300 backdrop-blur-sm bg-[#9cd5ee64] hover:bg-[#9cd5ee80] dark:bg-[#505C62] dark:hover:bg-[#505C6290]"
      >
        <div
          className={`tham tham-e-squeeze tham-w-5 sm:tham-w-6 md:tham-w-8${
            un ? " tham-active" : ""
          }`}
        >
          <div className="tham-box">
            <div
              className={`tham-inner ${
                un ? "bg-[#fffb]" : "bg-[#55a2c5e6] dark:bg-[#add6e8c5]"
              }`}
            />
          </div>
        </div>
      </button>

      <AnimatePresence>
        {un && (
          <div className="fixed inset-0 z-30">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[#e4e4e480] backdrop-blur-[0.1rem] dark:bg-[#53525247] dark:backdrop-blur-[0.2rem]"
              onClick={() => Under(false)}
              aria-hidden="true"
            />
            <motion.nav
              id={menuId}
              aria-label="Primary"
              initial="closed"
              animate="open"
              exit="closed"
              variants={panelVariants}
              className="absolute inset-y-0 right-0 h-full w-full md:w-[45%] lg:w-[35%]"
            >
              <ul className="h-full w-full overflow-y-auto bg-[#92cae2] dark:bg-[#2d2d2ddf] flex flex-col justify-center md:justify-start py-24 md:py-[8rem] gap-6 md:gap-8 px-6 md:pl-5">
                {NAV_LINKS.map(({ href, label }) => (
                  <li
                    key={label}
                    className="dv w-full rounded-md flex items-center justify-center md:justify-start min-h-14"
                  >
                    <a
                      href={href}
                      onClick={() => Under(false)}
                      className="list relative text-3xl sm:text-4xl lg:text-5xl text-white py-2 w-full text-center md:text-left md:pl-5"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.nav>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}
