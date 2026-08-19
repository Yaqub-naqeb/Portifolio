import { PROFILE } from "@/data/profile";
import Hello from "@/components/hero/Hello";
import ThemeToggleButton from "@/components/hero/ThemeToggleButton";
import SocialBar from "@/components/hero/SocialBar";

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="site-heading"
      className="min-h-screen relative w-full overflow-hidden flex flex-col items-start justify-center dark:bg-[#262626]"
    >
      <div className="hero-light dark:hidden" aria-hidden="true" />
      <div className="hero-dark hidden dark:block" aria-hidden="true" />

      <div className="absolute z-20 top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8">
        <ThemeToggleButton />
      </div>

      <div className="relative z-10 w-full flex flex-col items-center justify-end lg:justify-center min-h-screen pb-24 sm:pb-28 md:pb-32 lg:pb-0 lg:-translate-y-8 lg:px-20 lg:items-start px-4 sm:px-6">
        <div className="writting flex flex-col items-center">
          <div className="flex flex-col items-center relative font-normal">
            <Hello />
            <h1
              id="site-heading"
              className="absolute bottom-1/3 md:bottom-1/4 text-[1.15rem] min-[360px]:text-[1.35rem] sm:text-[1.85rem] md:text-[2.35rem] imYaqwb mobile-spacing font-normal text-[#548aa4] whitespace-nowrap"
            >
              I&apos;m {PROFILE.firstName}
            </h1>
            <p className="text-[#9C9C9C] text-[0.85rem] sm:text-[1.1rem] md:text-[1.35rem] translate-y-[-1.5rem] sm:translate-y-[-1.8rem] mobile-frontend-spacing">
              {PROFILE.headline}
            </p>
          </div>

          <a
            href={PROFILE.cvPath}
            download={PROFILE.cvDownloadName}
            className="rounded inline-block bg-[#83c3de] hover:bg-[#9ed3ea] dark:bg-[#53595c] dark:hover:bg-[#88a3ae] py-2 px-8 sm:px-12 md:px-16 lg:px-[5.8rem] text-white text-sm sm:text-base lg:translate-y-[-1rem] translate-y-[-1.3rem] transition-all duration-300 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Download resume
          </a>
        </div>
      </div>

      <div className="absolute z-20 bottom-6 sm:bottom-8 md:bottom-12 lg:bottom-8 left-4 sm:left-6 md:left-8">
        <SocialBar />
      </div>
    </section>
  );
}
