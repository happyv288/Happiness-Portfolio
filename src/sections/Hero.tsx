import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";

import { heroData } from "../data/portfolio";
import profile from "../assets/profile.jpg";
import TechBadge from "../components/ui/TechBadge";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-[90vh] items-center overflow-hidden bg-white dark:bg-slate-95 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white"
    >
      {/* Background Glow */}
      <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 opacity-30 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-purple-600/20 blur-3xl" />

      <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
 
      <div className="mx-auto flex min-h-[calc(100vh-80px)] w-full max-w-7xl  text-slate-900 dark:text-white flex-col items-center justify-between px-6 lg:flex-row">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:w-1/2 lg:text-left"
        >
          <p className="mb-4 inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-blue-400">
            {heroData.greeting}
          </p>

          <h1 className="mb-4 text-5xl font-bold text-slate-900 transition-colors duration-300 dark:text-white md:text-7xl">
            {heroData.name}
          </h1>

          <TypeAnimation
            sequence={[
              heroData.roles[0],
              2000,
              heroData.roles[1],
              2000,
              heroData.roles[2],
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-2xl font-semibold text-blue-400 md:text-4xl"
          />

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600 transition-colors duration-300 dark:text-slate-300">
            {heroData.description}
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
            <a
              href="#contact"
              className="rounded-xl bg-blue-600 px-10 py-4 font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700"
            >
              Contact Me
            </a>

            <a
              href="/resume/Happiness_Victor_Resume.pdf"
              download
              className="rounded-xl border border-slate-300 px-8 py-4 font-semibold text-slate-900 transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white dark:border-slate-600 dark:text-white dark:hover:border-white dark:hover:bg-white dark:hover:text-slate-900"
            >
              Download CV
            </a>
          </div>

          {/* Social Icons */}
          <div className="mt-8 flex justify-center gap-6 lg:justify-start">
            <a
              href="https://github.com/happyv288"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub
                className="h-12 w-12 rounded-full borderborder-slate-300
bg-white
text-slate-700
dark:border-slate-700
dark:bg-slate-900
dark:text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:border-blue-500 hover:text-blue-400 hover:shadow-lg hover:shadow-blue-500/40"
              />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-12 w-12 rounded-full borderborder-slate-300
bg-white
text-slate-700
dark:border-slate-700
dark:bg-slate-900
dark:text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:border-blue-500 hover:text-blue-400 hover:shadow-lg hover:shadow-blue-500/40" />
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=victorhappiness18@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
            >
              <FaEnvelope className="h-12 w-12 rounded-full borderborder-slate-300
bg-white
text-slate-700
dark:border-slate-700
dark:bg-slate-900
dark:text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:border-blue-500 hover:text-blue-400 hover:shadow-lg hover:shadow-blue-500/40" />
            </a>
          </div>
        </motion.div>

        {/* Right Side */}
        <div className="relative flex h-[620px]  w-[620px] items-center justify-center">
          <TechBadge
            icon={<SiReact className="text-lg text-sky-400" />}
            label="React"
            duration={3}
            className="top-2 left-1/2 -translate-x-1/2"
          />

          <TechBadge
            icon={<SiTypescript className="text-lg text-blue-500" />}
            label="TypeScript"
            duration={4}
            className="top-32 -left-4"
          />

          <TechBadge
            icon={<SiNodedotjs className="text-lg text-green-500" />}
            label="Node.js"
            duration={3.5}
            className="top-32 -right-4"
          />

          <TechBadge
            icon={<SiMongodb className="text-lg text-green-400" />}
            label="MongoDB"
            duration={4.2}
            className="bottom-32 -left-4"
          />

          <TechBadge
            icon={<SiExpress className="text-lg text-slate-900 dark:text-white"  />}
            label="Express"
            duration={3.8}
            className="bottom-32 -right-4"
          />

          <TechBadge
            icon={<SiTailwindcss className="text-lg text-cyan-400" />}
            label="Tailwind CSS"
            duration={4.5}
            className="bottom-2 left-1/2 -translate-x-1/2"
          />

          {/* Rotating Rings */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-[520px] w-[520px] rounded-full border border-cyan-500/10"
          />

          <div className="absolute h-[430px] w-[430px] rounded-full border border-blue-500/20" />

          <div className="absolute h-[520px] w-[520px] rounded-full border border-blue-500/10" />

          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-[430px] w-[430px] rounded-full border border-blue-500/20"
          />

          {/* Floating Particles */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="absolute top-16 left-10 h-2 w-2 rounded-full bg-blue-400"
          />

          <motion.div
            animate={{
              y: [0, 20, 0],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
            className="absolute right-12 bottom-20 h-2 w-2 rounded-full bg-cyan-400"
          />

          {/* Profile Image */}
          <motion.img
            src={profile}
            alt="Happiness Victor"
            animate={{
              y: [0, -12, 0],
              rotate: [0, 1, 0, -1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-20 h-80 w-80 rounded-full border-4 border-blue-500 object-cover shadow-[0_0_80px_rgba(59,130,246,0.45)]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
