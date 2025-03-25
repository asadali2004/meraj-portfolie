import { motion } from "framer-motion";
import Lottie from "lottie-react";
import healthcareAnimation from "../assets/healthcare.json";
import doctorImg from "../assets/merajbhai.png";

const Home = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-lime-100 to-teal-100 flex flex-col">
      {/* Organic Lottie Background - Adjusted Color and Opacity */}
      <Lottie
        animationData={healthcareAnimation}
        loop={true}
        className="absolute inset-0 w-full h-full opacity-20" // Further reduced opacity for subtler effect
      />

      {/* Content Section */}
      <div className="relative z-10 flex flex-col-reverse sm:flex-row items-center justify-center sm:justify-between min-h-screen p-6 sm:px-12">
        {/* Left Section - Organic Text and Layout (Enhanced) */}
        <div className="w-full sm:w-2/3 text-gray-800 text-center sm:text-left">
          <motion.h1
            initial={{ opacity: 0, y: -40 }} // Increased initial animation distance
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, ease: "easeOut" }} // Slightly longer duration
            className="text-4xl sm:text-6xl md:text-7xl font-semibold text-gray-800 leading-tight" // Adjusted text color
          >
            Meraj Alam
          </motion.h1>
          <p className="text-lg sm:text-xl md:text-2xl font-medium mt-3 bg-gradient-to-r from-emerald-500 to-green-600 text-transparent bg-clip-text">
            Aspiring Healthcare Professional
          </p>
          <motion.p
            initial={{ opacity: 0, y: 30 }} // Increased initial animation distance
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, ease: "easeOut" }} // Slightly longer duration
            className="mt-6 text-md sm:text-lg text-gray-700 max-w-md mx-auto sm:mx-0 p-6 bg-white/20 backdrop-blur-xl rounded-3xl border border-white/30 shadow-lg" // Adjusted background and border
          >
            As a B.Pharma candidate and aspiring healthcare professional, I am committed to driving innovation and improving patient care through research and expertise.
          </motion.p>
        </div>

        {/* Right Section - Organic Image Styling (Enhanced) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }} // Further reduced initial scale
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }} // Slightly longer duration
          className="w-full sm:w-1/3 flex justify-center sm:justify-end"
        >
          <img
            src={doctorImg}
            alt="Healthcare Professional"
            className="w-[70%] sm:w-[80%] h-auto object-cover rounded-full shadow-2xl border border-white/20" // Rounded image and adjusted shadow/border
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;