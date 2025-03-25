import React from "react";
import { FaEnvelope, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contacts" className="py-20 bg-gradient-to-r from-lime-100 to-teal-100 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-8">Contact Info</h2>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto mb-8">
          Reach out via email or connect with me on social media.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-8">
          {/* Email */}
         <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=merajalam.17195@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center text-gray-800 hover:text-emerald-600 transition-colors duration-300 bg-white/30 backdrop-blur-2xl p-4 rounded-full shadow-md"
>
  <FaEnvelope className="mr-2 text-2xl" />
  <span>Email</span>
</a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/merajalam8021/" // Replace with your LinkedIn profile URL
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-800 hover:text-emerald-600 transition-colors duration-300 bg-white/30 backdrop-blur-2xl p-4 rounded-full shadow-md"
          >
            <FaLinkedin className="mr-2 text-2xl" />
            <span>LinkedIn</span>
          </a>

          {/* GitHub */}
          <a
            href="https://www.instagram.com/i_am_meraj_alam?igsh=MTZ1eDl6YTl6dmE3aA==&utm_source=ig_contact_invite" // Replace with your GitHub profile URL
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-800 hover:text-emerald-600 transition-colors duration-300 bg-white/30 backdrop-blur-2xl p-4 rounded-full shadow-md"
          >
            <FaInstagram className="mr-2 text-2xl" />

            <span>Instagram</span>
          </a>

          {/* Twitter */}
          <a
            href="https://www.facebook.com/profile.php?id=100012772981280&mibextid=ZbWKwL" // Replace with your Twitter profile URL
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-800 hover:text-emerald-600 transition-colors duration-300 bg-white/30 backdrop-blur-2xl p-4 rounded-full shadow-md"
          >
            <FaFacebook className="mr-2 text-2xl" />
            <span>Facebook</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;