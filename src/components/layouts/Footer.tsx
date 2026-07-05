import { motion } from "framer-motion";
import { FaGithub, FaEnvelope, FaArrowUp, FaHeart } from "react-icons/fa";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-white text-slate-900 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950 dark:text-white">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Logo */}
          <div className="flex flex-col items-center gap-5">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900 shadow-lg shadow-blue-500/20">
              <img
                src={logo}
                alt="Happiness Victor Logo"
                className="h-14 w-14 object-contain transition duration-300 hover:scale-110"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold">
                Happiness{" "}
                <span className="text-blue-500 dark:text-blue-400">Victor</span>
              </h2>

              <p className="mt-2 text-slate-600 dark:text-slate-400">
                Full Stack MERN Developer
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-2xl leading-8 text-slate-600 dark:text-slate-400">
            Passionate about building beautiful, responsive and scalable web
            applications that provide exceptional user experiences.
          </p>

          {/* Navigation */}
          <div className="mt-12 flex flex-wrap justify-center gap-8">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="transition duration-300 hover:text-blue-500 dark:hover:text-blue-400"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="mt-12 flex justify-center gap-5">
            <a
              href="https://github.com/happyv288"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:text-blue-400"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=victorhappiness18@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:text-blue-400"
            >
              <FaEnvelope size={22} />
            </a>
          </div>

          {/* Divider */}
          <div className="my-12 h-px w-full bg-slate-200 dark:bg-slate-800"></div>

          {/* Bottom */}
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="flex items-center gap-2 text-slate-500 dark:text-slate-500">
              © {new Date().getFullYear()} Happiness Victor
              <FaHeart className="text-red-500" />
              All Rights Reserved.
            </p>

            <motion.a
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
              href="#home"
              className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-700"
            >
              <FaArrowUp />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
