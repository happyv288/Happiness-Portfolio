import AnimatedCounter from "../components/ui/AnimatedCounter";
import { motion } from "framer-motion";

const stats = [
  {
    number: 7,
    suffix: "+",
    label: "Projects Completed",
  },
  {
    number: 15,
    suffix: "+",
    label: "Technologies Used",
  },
  {
    number: 100,
    suffix: "%",
    label: "Responsive Design",
  },
  {
    number: 1,
    suffix: "+",
    label: "Years Learning",
  },
];

const Stats = () => {
  return (
    <section className="bg-white py-20 transition-colors duration-300 dark:bg-slate-950">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-6 text-center md:grid-cols-4">
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-slate-100 p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-slate-900"
          >
            <h2 className="text-5xl font-bold text-blue-500 dark:text-blue-400">
              <AnimatedCounter end={stat.number} />
              {stat.suffix}
            </h2>

            <p className="mt-3 text-slate-600 dark:text-slate-400">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
