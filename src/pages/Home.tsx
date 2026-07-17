import Navbar from "../components/layouts/Navbar";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";
import Footer from "../components/layouts/Footer";
import Stats from "../sections/Stats";
import BackToTop from "../components/ui/BackToTop";
import Experience from "../sections/Experience";
import CallToAction from "../sections/CallToAction";
import Services from "../sections/Services";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Experience />
      <Projects />
      <CallToAction />
      <Contact />
      <Footer />
      <Stats />

      <BackToTop />
    </>
  );
};

export default Home;
