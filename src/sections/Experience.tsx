import { motion } from "framer-motion";
import SectionTitle from "../components/common/SectionTitle";
import { experience } from "../data/portfolio";

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-slate-50 py-24 transition-colors duration-300 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SectionTitle label="Experience" title={experience.title} />

          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600 dark:text-slate-400">
            {experience.subtitle}
          </p>
        </motion.div>

        <div className="relative mx-auto mt-16 max-w-4xl border-l-2 border-blue-500/30 pl-8">
          {experience.items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className="relative mb-12"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[42px] top-2 h-5 w-5 rounded-full border-4 border-white bg-blue-600 dark:border-slate-950" />

              <div className="rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-slate-900">
                <span className="text-sm font-semibold text-blue-500">
                  {item.period}
                </span>

                <h3 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
                  {item.role}
                </h3>

                <p className="mt-1 font-medium text-slate-500 dark:text-slate-400">
                  {item.company}
                </p>

                <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
