import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaVideo, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 bg-white/30 backdrop-blur-2xl shadow-xl z-50 py-3 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-emerald-500 to-teal-600 text-transparent bg-clip-text font-serif">
          𝙈𝘼 𝙚-𝙋𝙤𝙧𝙩𝙛𝙤𝙡𝙞𝙤
        </h1>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 text-2xl"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul className="hidden md:flex space-x-4 items-center">
          {["Home", "Introduction", "Mindmap", "Skills", "Projects", "Achievements", "Contacts"].map((item, index) => (
            <li key={index}>
              <Link
                to={item.toLowerCase().replace(/\s/g, "")}
                smooth={true}
                duration={500}
                className="bg-gradient-to-r from-green-100 to-lime-200 text-gray-700 px-4 py-2 rounded-full font-medium shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                {item}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="video"
              smooth={true}
              duration={500}
              className="flex items-center bg-gradient-to-r from-orange-200 to-yellow-300 text-gray-700 px-5 py-2 rounded-full font-medium shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <FaVideo className="mr-2" /> Video CV
            </Link>
          </li>
          <li>
            <a
              href="/MerajNewCv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-200 to-indigo-300 text-gray-700 px-5 py-2 rounded-full font-medium shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              My Resume
            </a>
          </li>
        </ul>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            className="absolute top-14 left-0 w-full bg-white/60 backdrop-blur-2xl flex flex-col items-center py-4 space-y-4 md:hidden shadow-xl rounded-b-2xl"
          >
            {/* ... (rest of the mobile menu code) ... */}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;