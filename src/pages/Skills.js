import React, { useState } from "react";
import "../App.css";
import useTheme from "../components/store/useTheme";
import My from "../components/My";
import { SkillInfo } from "../components/SkillInfo";
import SkillsInfo from "../components/skill_info/Skills_info";

const Skills = () => {
  const [skls] = useState(SkillInfo);
  const { mode } = useTheme();
  
  return (
    <section
      id="skills"
      className={`min-h-screen py-12 sm:py-16 md:py-20 relative ${mode ? "bg-white" : "bg-[#262626]"} `}
    >
      <My name={"Skills"} bg_name={"My"} />

      <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8 max-w-6xl w-full place-items-center">
          {skls &&
            skls.map((skill) => <SkillsInfo key={skill.id} skill={skill} />)}
        </div>
      </div>
    </section>
  );
};

export default Skills;
