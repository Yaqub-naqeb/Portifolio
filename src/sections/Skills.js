import SectionHeading from "@/components/heading/SectionHeading";
import SkillsInfo from "@/components/skills/SkillsInfo";
import { SKILLS } from "@/data/content";

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen py-12 sm:py-16 md:py-20 relative bg-white dark:bg-[#262626]"
    >
      <SectionHeading title="Skills" background="My" />

      <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-5 md:gap-6 lg:gap-8 max-w-6xl w-full">
          {SKILLS.map((skill) => (
            <li key={skill.id}>
              <SkillsInfo skill={skill} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
