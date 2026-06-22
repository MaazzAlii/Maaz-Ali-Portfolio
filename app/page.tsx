import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import AndroidApps from "@/components/AndroidApps";
import Stats from "@/components/Stats";
import Timeline from "@/components/Timeline";
import Certifications from "@/components/Certifications";
import WhyWorkWithMe from "@/components/WhyWorkWithMe";
import LearningAndFocus from "@/components/LearningAndFocus";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <AndroidApps />
        <Stats />
        <Timeline />
        <Certifications />
        <WhyWorkWithMe />
        <LearningAndFocus />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
