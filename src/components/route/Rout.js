import React, { useEffect } from "react";
import About from "../../pages/About";
import Home from "../../pages/Home";
import Projects from "../../pages/Projects";
import Skills from "../../pages/Skills";
import Services from "../../pages/Services";
import Experience from "../../pages/Experience";
import NewNavbar from "../navigation/NewNavbar";
import Contacts from "../../pages/Contacts";
import BackToTop from "../BackToTop";
import useTheme from "../store/useTheme";

const Rout = () => {
  const { mode } = useTheme();

  useEffect(() => {
    if (mode) {
      document.body.classList.remove("dark-scrollbar");
      document.documentElement.classList.remove("dark-scrollbar");
    } else {
      document.body.classList.add("dark-scrollbar");
      document.documentElement.classList.add("dark-scrollbar");
    }
  }, [mode]);

  return (
    <div className={`${mode ? "sp" : "rsh bg-[#262626]"}`}>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <NewNavbar />
      <main id="main-content">
        <Home />
        <About />
        <Services />
        <Skills />
        <Experience />
        <Projects />
        <Contacts />
      </main>
      <BackToTop />
    </div>
  );
};

export default Rout;
