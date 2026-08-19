import My from "@/components/My";
import Card from "@/components/cards/Card";
import { PROJECTS } from "@/data/content";

const PROJECT_IDS = {
  1: "project-izone",
  2: "project-botolon",
  3: "project-erbilianway",
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="lg:pt-[6rem] md:pt-[4rem] pt-[3rem] pb-12 sm:pb-16 md:pb-20 z-41 min-h-screen bg-white dark:bg-[#262626]"
    >
      <My name="Projects" bg_name="My" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16">
          {PROJECTS.map((project) => (
            <Card
              key={project.id}
              info={project}
              htmlId={PROJECT_IDS[project.id]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
