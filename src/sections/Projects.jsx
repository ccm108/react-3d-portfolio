import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../constants/projectsData";

export default function Projects() {
  return (
    <section id="projects" className="c-space mt-0">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-heading">Projects</h2>
        <p className="subtext">Take A Peek At My Work</p>
        
      </motion.div>

      <div className="flex flex-wrap gap-7 justify-center">
        {projects.map((project, index) => (
          <motion.div
            key={`project-${index}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: "spring", delay: index * 0.3, duration: 0.75 }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
