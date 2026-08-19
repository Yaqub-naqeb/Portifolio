import Navbar from "@/components/navigation/NewNavbar";
import Hero from "@/components/hero/Hero";
import About from "@/sections/About";
import Services from "@/sections/Services";
import Skills from "@/sections/Skills";
import Experience from "@/sections/Experience";
import Projects from "@/sections/Projects";
import Contacts from "@/sections/Contacts";
import BackToTop from "@/components/BackToTop";

export const dynamic = "force-static";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <Skills />
        <Experience />
        <Projects />
        <Contacts />
      </main>
      <BackToTop />
    </>
  );
}
