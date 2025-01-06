import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section id="home" className="w-full h-[100vh] bg-slate-900 text-white flex justify-center items-center px-6 relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 w-full max-w-6xl">
        <motion.div
          className="flex flex-col justify-center items-center md:items-start space-y-6 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Hi, I'm Sadkhan
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto md:mx-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            A passionate <span className="text-cyan-400">MERN Stack Developer </span> 
            and <span className="text-blue-400">DSA enthusiast</span>. I build scalable, efficient, and user-friendly web applications that make a real difference.
          </motion.p>

          <motion.div
            className="flex space-x-6 mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <a
              href="#projects"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-3 rounded-full text-white text-base md:text-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition duration-300"
            >
             My Work
            </a>
            <a
              href="https://www.linkedin.com/in/sadkhan-mulla1811/"
              target="_blank"
              rel="noopener noreferrer" 
              className="bg-transparent border-2 border-cyan-500 px-8 py-3 rounded-full text-cyan-500 text-lg font-semibold hover:bg-cyan-500 hover:text-white transition duration-300"
            >
              Connect with Me
            </a>
          </motion.div>
        </motion.div>

        
        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <img
            src="/images/home.png" 
            alt="Illustration"
            className="w-full h-full object-contain max-w-[400px]"
          />
        </motion.div>
      </div>

      <motion.div
        className="absolute top-12 left-12 w-24 h-24 rounded-full bg-cyan-500 opacity-30"
        animate={{ y: [0, 20, 0], x: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-16 right-16 w-28 h-28 rounded-full bg-blue-500 opacity-30"
        animate={{ y: [0, -20, 0], x: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <a
          href="#about"
          className="flex flex-col items-center text-gray-400 hover:text-cyan-400 transition duration-300"
        >
          <span className="text-sm">Scroll Down</span>
          <i className="fas fa-chevron-down animate-bounce mt-2"></i>
        </a>
      </motion.div>
    </section>
  );
};

export default Home;
