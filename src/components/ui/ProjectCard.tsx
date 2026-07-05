import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  highlights?: string[];
  tech: string[];
  github: string;
  live: string;
  featured?: boolean;
};

const ProjectCard = ({
  title,
  description,
  image,
  highlights,
  tech,
  github,
  live,
  featured = false,
}: ProjectCardProps) => {
  return (
    <motion.div
      layout
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className={`group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition-all duration-500 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/20 dark:border-slate-700 dark:bg-slate-900/80 dark:backdrop-blur-md ${
        featured ? "lg:grid lg:grid-cols-2" : ""
      }`}
    >
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
            featured ? "h-full min-h-[420px]" : "h-64"
          }`}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center p-8">
        {featured && (
          <span className="mb-4 inline-block w-fit rounded-full bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-500 dark:text-blue-400">
            ⭐ Featured Project
          </span>
        )}

        <h3
          className={`font-bold text-slate-900 dark:text-white ${
            featured ? "text-4xl" : "text-2xl"
          }`}
        >
          {title}
        </h3>

        <p
          className={`mt-5 text-slate-600 dark:text-slate-400 ${
            featured ? "text-lg leading-8" : ""
          }`}
        >
          {description}
        </p>

        {featured && highlights && (
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-slate-700 dark:text-slate-300"
              >
                <span className="text-green-500">✔</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        )}

        {/* Tech Stack */}
        <div className="mt-6 flex flex-wrap gap-3">
          {tech.map((item) => (
            <span
              key={item}
              className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-600 dark:text-blue-300"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            <FaExternalLinkAlt />
            Live Demo
          </a>

          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl border border-slate-300 px-6 py-3 font-medium text-slate-700 transition hover:border-blue-500 hover:bg-slate-100 dark:border-slate-600 dark:text-white dark:hover:bg-slate-800"
          >
            <FaGithub />
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
