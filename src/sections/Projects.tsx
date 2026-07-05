import { motion } from "framer-motion";
import { useState } from "react";

import ProjectCard from "../components/ui/ProjectCard";
import SectionTitle from "../components/common/SectionTitle";
import { projects } from "../data/portfolio";

const Projects = () => {
  const filters = ["All", "Frontend", "MERN"];

  const [selected, setSelected] = useState("All");

  // Featured Project (Audiophile)
  const featuredProject = projects.find((project) => project.id === 1);

  // Remaining Projects
  const filteredProjects =
    selected === "All"
      ? projects.filter((project) => project.id !== 1)
      : projects.filter(
          (project) => project.category === selected && project.id !== 1,
        );

  return (
    <section
      id="projects"
      className="bg-white py-24 text-slate-900 transition-colors duration-300 dark:bg-slate-900 dark:text-white"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionTitle label="Projects" title="My Recent Work" />
        </motion.div>

        {/* Featured Project */}
        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <ProjectCard {...featuredProject} featured />
          </motion.div>
        )}

        {/* Filter Buttons */}
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelected(filter)}
              className={`rounded-full px-6 py-2 font-medium transition-all duration-300 ${
                selected === filter
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                  : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid gap-10 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
