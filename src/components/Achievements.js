import React from "react";
import { motion } from "framer-motion";

const certificates = [
  { id: 1, image: "/images/cert1.jpg", title: "Say Yes to Life, No to Drugs - NCB", pdf: "/certificates/cert1.pdf" },
  { id: 2, image: "/images/cert2.jpg", title: "NIESBUD - MSDE India", pdf: "/certificates/cert2.pdf" },
  { id: 3, image: "/images/cert3.jpg", title: "Pharmacogenomics - SDBIEST Mazhon", pdf: "/certificates/cert3.pdf" },
  { id: 4, image: "/images/cert4.jpg", title: "Introduction to drug safety and pharmacovigilance An abridged course- Biopharma institute", pdf: "/certificates/cert4.pdf" },
  { id: 5, image: "/images/cert5.jpg", title: "Asian Sports & Physical Fitness Board", pdf: "/certificates/cert5.pdf" },
  { id: 6, image: "/images/cert6.jpg", title: "PC ISIT'25 - DBUU", pdf: "/certificates/cert6.pdf" },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 px-6 bg-gradient-to-r from-lime-100 to-teal-100">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-semibold text-gray-800 mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Achievements
        </motion.h2>
        <p className="mt-4 text-lg text-gray-700">
          A collection of my certifications and accomplishments, showcasing my dedication to continuous learning and professional development.
        </p>

        {/* Certificate Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <motion.a
              key={cert.id}
              href={cert.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/30 backdrop-blur-2xl shadow-xl rounded-3xl overflow-hidden p-6 flex flex-col items-center transition-transform hover:scale-105 w-full border border-white/40"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: cert.id * 0.1, ease: "easeOut" }}
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-[90%] h-auto object-cover rounded-2xl"
              />
              <p className="mt-4 text-lg text-gray-800 font-medium text-center">{cert.title}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;