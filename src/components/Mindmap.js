import React from "react";
import { motion } from "framer-motion";

const MindMap = () => {
  return (
    <section id="mindmap" className="py-20 bg-gradient-to-r from-lime-100 to-teal-100 text-center">
      <div className="container mx-auto max-w-4xl px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-semibold text-gray-800 mb-8"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Mind Mapping
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center justify-center">
          {/* Left Side: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <div className="rounded-3xl shadow-xl w-full h-full overflow-hidden">
              <img
                src="/mind.jpg" // Change to your actual image path
                alt="Mind Map"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right Side: Text */}
          <motion.p
            className="md:w-1/2 text-lg leading-relaxed text-justify bg-white/30 backdrop-blur-2xl rounded-3xl p-8 shadow-xl border border-white/40 mt-8 md:mt-0 md:ml-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            A mind map is a visual tool for structuring information. It helps in organizing ideas, fostering creativity, and improving understanding by connecting different concepts.
            <br /><br />
            Whether you're brainstorming or solving complex problems, mind mapping can help streamline your thought process efficiently.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default MindMap;