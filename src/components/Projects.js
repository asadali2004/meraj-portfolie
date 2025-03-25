import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "A Review of Multi-Component Herbal Suspension for Diabetes Management",
    description:
      "This project conducts a focused review of multi-component herbal suspensions used in diabetes management. It aims to analyze the effectiveness of these formulations, explore their underlying mechanisms of action, and evaluate their potential benefits for blood sugar regulation. By synthesizing scientific literature, the review seeks to provide a comprehensive understanding of how these herbal combinations influence glucose homeostasis. It will examine the individual contributions of each herbal component and their synergistic effects, ultimately assessing their role in improving glycemic control and patient outcomes.",
    image: "/images/project1.jpg",
  },
  {
    id: 2,
    title: "Formulation and Evaluation of Polyherbal Suspension for Diabetes Management",
    description:
      "This project focuses on creating and testing a polyherbal suspension for diabetes. It aims to formulate a stable, effective suspension, then evaluate its pharmacological properties. The research will analyze how the suspension impacts glucose metabolism, seeking to validate its potential for diabetes management. This involves assessing the combined effects of the herbal components and their individual contributions to blood sugar regulation. Furthermore, it will examine the suspension's safety profile and potential interactions with conventional diabetes medications. The study seeks to provide a comprehensive evaluation, paving the way for potential clinical trials.",
    image: "/images/project2.jpg",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-r from-lime-100 to-teal-100">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-semibold text-gray-800 mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Projects
        </motion.h2>
        <p className="mt-4 text-lg text-gray-700">
          Showcasing research-driven projects on herbal formulations, highlighting my expertise in pharmaceutical research and development.
        </p>

        {/* Project Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white/30 backdrop-blur-2xl shadow-xl rounded-3xl overflow-hidden p-6 text-left transition-transform hover:scale-105 border border-white/40"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: project.id * 0.1, ease: "easeOut" }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-2xl mb-4"
              />
              <h3 className="text-2xl font-medium text-gray-900 mb-2">{project.title}</h3>
              <p className="text-gray-700 text-justify">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;