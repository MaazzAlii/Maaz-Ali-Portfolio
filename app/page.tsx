import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import FYPSection from "@/components/FYPSection";
import AndroidApps from "@/components/AndroidApps";
import Channels from "@/components/Channels";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <FYPSection />
        <AndroidApps />
        <Channels />
        <Skills />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
