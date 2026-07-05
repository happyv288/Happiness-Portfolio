import { motion } from "framer-motion";
import SkillBadge from "../components/ui/SkillBadge";
import { skills } from "../data/portfolio";
import SectionTitle from "../components/common/SectionTitle";

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-white py-24 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SectionTitle label="Skills" title="Technologies I Work With" />
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {skills.map((group) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900"
            >
              <h3 className="mb-6 text-2xl font-semibold text-blue-500 dark:text-blue-400">
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-4">
                {group.technologies.map((tech) => (
                  <SkillBadge key={tech} skill={tech} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
