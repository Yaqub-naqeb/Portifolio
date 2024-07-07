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
    <div
      id="skills"
      className={` lg:h-[60vh] relative ${mode ? "" : "bg-[#262626]"} `}
    >
      {/* MySkills */}
      <My name={"Skills"} bg_name={"My"} />

      <div className={"flex items-center justify-center"}>
        <div className=" grid  md:px-[0rem] w-[80%]  containar md:grid-cols-3 grid-cols-2 lg:grid-cols-4   place-items-center pr-3 gap-y-[2rem] ">
          {/* skills */}

          {skls &&
            skls.map((skill) => <SkillsInfo key={skill.id} skill={skill} />)}
        </div>
      </div>
    </div>
  );
};

export default Skills;
//
