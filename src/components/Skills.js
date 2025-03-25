import React from "react";
import { motion } from "framer-motion";

const skills = {
  technical: ["MS Word", "MS PowerPoint", "MS Excel", "Canva"],
  soft: ["Adaptability", "Time Management", "Leadership", "Problem Solving"],
  pharma: [
    "Drug Formulation & Development",
    "Pharmacology & Therapeutics",
    "Clinical Research & Trials",
    "Regulatory Affairs & Compliance",
    "Good Manufacturing Practices (GMP)",
    "Pharmaceutical Quality Control",
    "Community & Hospital Pharmacy",
    "Medical & Scientific Writing",
  ],
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-r from-lime-100 to-teal-100 text-center">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-semibold text-gray-800 mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Skills
        </motion.h2>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
          A diverse set of skills across technical, soft, and pharmaceutical domains, highlighting my ability to adapt and excel in various professional settings.
        </p>

        {/* Skills Categories (Grid Layout) */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {/* Technical Skills */}
          <div className="bg-white/30 backdrop-blur-2xl rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300 border border-white/40">
            <h3 className="text-2xl font-medium text-gray-800 mb-4">Technical Skills</h3>
            <ul className="text-lg text-gray-700 space-y-2">
              {skills.technical.map((skill, index) => (
                <li key={index} className="flex items-center">
                  <span className="mr-2 text-emerald-500">•</span> {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Soft Skills */}
          <div className="bg-white/30 backdrop-blur-2xl rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300 border border-white/40">
            <h3 className="text-2xl font-medium text-gray-800 mb-4">Soft Skills</h3>
            <ul className="text-lg text-gray-700 space-y-2">
              {skills.soft.map((skill, index) => (
                <li key={index} className="flex items-center">
                  <span className="mr-2 text-emerald-500">•</span> {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Pharmaceutical Expertise */}
          <div className="bg-white/30 backdrop-blur-2xl rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300 border border-white/40">
            <h3 className="text-2xl font-medium text-gray-800 mb-4">Pharmaceutical Expertise</h3>
            <ul className="text-lg text-gray-700 space-y-2">
              {skills.pharma.map((skill, index) => (
                <li key={index} className="flex items-center">
                  <span className="mr-2 text-emerald-500">•</span> {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;