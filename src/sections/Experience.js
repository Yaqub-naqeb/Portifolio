import My from "@/components/My";
import { EXPERIENCES } from "@/data/content";

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen py-12 sm:py-16 md:py-20 relative bg-gradient-to-b from-[#F8FCFD] to-[#ffff] dark:bg-[#262626] dark:bg-none"
    >
      <My name="Experience" bg_name="My Journey" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-[#9cd5ee] dark:bg-[#505C62]" />

          <div className="space-y-12 sm:space-y-16">
            {EXPERIENCES.map((exp) => (
              <article key={exp.id} className="relative pl-12 sm:pl-20">
                <div className="absolute left-2 sm:left-6 top-2 w-4 h-4 sm:w-5 sm:h-5 rounded-full border-4 bg-white border-[#9cd5ee] dark:bg-[#262626] dark:border-[#ADD6E8] z-10" />

                <div className="rounded-2xl p-6 sm:p-8 transition-shadow duration-300 bg-[#F8FBFD] border border-[#E0EFF5] shadow-sm hover:shadow-md dark:bg-[#242424] dark:border-[#3a3a3a]">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-2">
                    <div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-[#1a1a1a] dark:text-white">
                        {exp.title}
                      </h3>
                      <p className="text-lg sm:text-xl font-semibold text-[#83c3de] dark:text-[#ADD6E8]">
                        {exp.companyUrl ? (
                          <a
                            href={exp.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline underline-offset-4"
                          >
                            {exp.company}
                          </a>
                        ) : (
                          exp.company
                        )}
                      </p>
                      {exp.meta && (
                        <p className="text-sm sm:text-base mt-1 text-[#6b7280] dark:text-[#9C9C9C]">
                          {exp.meta}
                        </p>
                      )}
                    </div>
                    <span
                      className={`px-4 py-2 rounded-full text-sm sm:text-base font-medium whitespace-nowrap self-start ${
                        exp.type === "work"
                          ? "bg-[#E9EEFA] text-[#306CC4] dark:bg-[#3a3a3a] dark:text-[#9cd5ee]"
                          : "bg-[#E8F4F8] text-[#548aa4] dark:bg-[#3a3a3a] dark:text-[#ADD6E8]"
                      }`}
                    >
                      {exp.period}
                    </span>
                  </div>
                  {exp.highlights.length === 1 ? (
                    <p className="text-base sm:text-lg leading-relaxed text-[#4a4a4a] dark:text-[#d0d0d0]">
                      {exp.highlights[0]}
                    </p>
                  ) : (
                    <ul className="text-base sm:text-lg leading-relaxed space-y-2 list-disc pl-5 text-[#4a4a4a] dark:text-[#d0d0d0]">
                      {exp.highlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
