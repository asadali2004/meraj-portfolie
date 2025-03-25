import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="introduction" className="py-20 bg-gradient-to-r from-lime-100 to-teal-100 text-center">
      <div className="container mx-auto max-w-4xl px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-semibold text-gray-800 mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Introduction
        </motion.h2>

        <motion.p
          className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed text-justify bg-white/30 backdrop-blur-2xl rounded-3xl p-8 shadow-xl border border-white/40"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Hello, I'm Meraj Alam from Bihar. I am currently pursuing my bachelor's degree at Dev Bhoomi Uttarakhand University, Dehradun.
          <br /><br />
          I am a self-motivated individual with strong communication skills and a passion for continuous learning. My short-term goal is to secure a role in a reputed organization, and my long-term vision is to attain a leadership position where I can drive innovation and contribute to business growth.
          <br /><br />
          As a quick learner, I embrace challenges and learn from experiences to refine my skills. My interests include technology, problem-solving, and playing cricket.
        </motion.p>
      </div>
    </section>
  );
};

export default About;