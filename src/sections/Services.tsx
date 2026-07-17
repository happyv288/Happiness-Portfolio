import { motion } from "framer-motion";
import SectionTitle from "../components/common/SectionTitle";
import { servicesData } from "../data/portfolio";

const Services = () => {
  return (
    <section
      id="services"
      className="bg-slate-50 py-24 transition-colors duration-300 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SectionTitle label="Services" title={servicesData.title} />

          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600 dark:text-slate-400">
            {servicesData.subtitle}
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-slate-900"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold text-white">
                {String(service.id).padStart(2, "0")}
              </div>

              <h3 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                {service.title}
              </h3>

              <p className="leading-8 text-slate-600 dark:text-slate-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
