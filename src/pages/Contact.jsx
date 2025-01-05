import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full py-24 bg-transparent text-white px-6"
    >
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 text-transparent bg-clip-text">
          Contact Me
        </h2>
        
        <div className="text-gray-300 mb-6">
          <p className="text-sm">
            <strong>Email:</strong> saadkhanmulla@gmail.com
          </p>
          <p className="text-sm">
            <strong>Phone:</strong> +91 9529329131
          </p>
        </div>

        <div>
          <a
            href="mailto:saadkhanmulla@gmail.com"
            className="inline-block px-6 py-2 bg-cyan-500 text-gray-900 rounded-full font-semibold"
          >
            Send an Email
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
