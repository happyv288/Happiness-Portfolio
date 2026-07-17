import { motion } from "framer-motion";
import { callToActionData } from "../data/portfolio";

const CallToAction = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 py-24 text-white">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold md:text-5xl">
            {callToActionData.title}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            {callToActionData.description}
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <a
              href={callToActionData.primaryButton.link}
              className="rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {callToActionData.primaryButton.text}
            </a>

            <a
              href={callToActionData.secondaryButton.link}
              className="rounded-xl border border-white px-8 py-4 font-semibold transition-all duration-300 hover:bg-white hover:text-blue-700"
            >
              {callToActionData.secondaryButton.text}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
