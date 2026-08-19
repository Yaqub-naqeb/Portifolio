import Image from "next/image";
import My from "@/components/My";
import { PROFILE } from "@/data/profile";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen py-12 sm:py-16 md:py-20 w-full overflow-hidden bg-gradient-to-b from-[#F8FCFD] to-[#ffff] dark:bg-[#262626] dark:bg-none"
    >
      <My name="Me" bg_name="About" label="About" />

      <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
        <div className="flex-shrink-0 w-full sm:w-auto flex justify-center">
          <div className="relative group w-full max-w-[18rem] sm:max-w-[20rem] md:max-w-[22rem] lg:max-w-[24rem] xl:max-w-[26rem]">
            <div className="relative rounded-2xl overflow-hidden shadow-lg dark:shadow-xl dark:shadow-black/20 transition-all duration-300 group-hover:shadow-xl">
              <Image
                src="/images/about.jfif"
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.01] dark:brightness-95"
                alt={`${PROFILE.name}, frontend developer in Erbil`}
                width={416}
                height={520}
                unoptimized
              />
            </div>
          </div>
        </div>

        <div className="flex-1 max-w-2xl w-full space-y-6 sm:space-y-8">
          <p className="text-[#ADD6E8] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-center lg:text-left leading-tight">
            Hi, I&apos;m Yaqub.
          </p>

          <div className="space-y-5">
            <p className="text-[#ADD6E8] leading-8 sm:leading-9 text-base sm:text-lg md:text-xl">
              I&apos;m a frontend developer based in Erbil, Kurdistan Region,
              Iraq. I specialize in React, TypeScript, Remix, and Next.js —
              building e-commerce and SaaS that hold up in production, including
              trilingual RTL interfaces, Laravel APIs, and payment flows.
            </p>
            <p className="text-[#ADD6E8] leading-8 sm:leading-9 text-base sm:text-lg md:text-xl">
              I currently own the frontend at{" "}
              <a
                href="https://www.izoneiraq.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline decoration-2 underline-offset-4 hover:opacity-80"
              >
                iZone Iraq
              </a>
              , serving 15k+ monthly users across five storefronts. Before that
              I built{" "}
              <a
                href="https://www.botolon.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline decoration-2 underline-offset-4 hover:opacity-80"
              >
                Botolon
              </a>{" "}
              and{" "}
              <a
                href="https://erbiliantravel.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline decoration-2 underline-offset-4 hover:opacity-80"
              >
                ErbilianWay
              </a>
              . I care about clean architecture, accessible UI, and shipping
              work people can rely on.
            </p>
          </div>

          <div className="mt-10 sm:mt-12 space-y-4">
            <p className="text-[#9C9C9C] font-semibold text-xl sm:text-2xl md:text-3xl text-left">
              Let&apos;s work together
            </p>
            <div className="text-[#9C9C9CA1] space-y-3 text-left">
              <p className="text-base sm:text-lg md:text-xl mb-3">
                What can I do for you?
              </p>
              <p className="text-base sm:text-lg md:text-xl">
                Shoot an email to{" "}
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="text-[#83c3de] hover:text-[#61b1d6] dark:text-[#ADD6E8] dark:hover:text-[#9cd5ee] transition-colors duration-300 underline decoration-2 underline-offset-4 font-medium"
                >
                  {PROFILE.email}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
