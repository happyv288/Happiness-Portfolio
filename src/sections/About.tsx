import { motion } from "framer-motion";
import SectionTitle from "../components/common/SectionTitle";

const About = () => {
  return (
    <section
      id="about"
      className="bg-white py-24 text-slate-900 transition-colors duration-300 dark:bg-slate-900 dark:text-white"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SectionTitle label="About" title="Get To Know Me" />
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              MERN Stack Developer
            </h3>

            <p className="mb-6 leading-8 text-slate-600 dark:text-slate-300">
              I'm{" "}
              <span className="font-semibold text-slate-900 dark:text-white">
                Happiness Victor
              </span>
              , a passionate MERN Stack Developer who enjoys building modern,
              responsive, and scalable web applications.
            </p>

            <p className="mb-6 leading-8 text-slate-600 dark:text-slate-300">
              I specialize in creating full-stack applications using React,
              TypeScript, Node.js, Express.js, and MongoDB. I enjoy solving
              real-world problems with clean, maintainable code and intuitive
              user experiences.
            </p>

            <p className="leading-8 text-slate-600 dark:text-slate-300">
              As a continuous learner, I'm always exploring new technologies,
              improving my development skills, and building projects that make a
              positive impact.
            </p>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800">
              <h3 className="text-4xl font-bold text-blue-500 dark:text-blue-400">
                1+
              </h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300">
                Years Learning & Building
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800">
              <h3 className="text-4xl font-bold text-blue-500 dark:text-blue-400">
                10+
              </h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300">
                Projects Completed
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800">
              <h3 className="text-4xl font-bold text-blue-500 dark:text-blue-400">
                100%
              </h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300">
                Dedication to Learning
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800">
              <h3 className="text-4xl font-bold text-blue-500 dark:text-blue-400">
                ∞
              </h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300">
                Passion for Growth
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
