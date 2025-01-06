import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="w-full h-auto py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-10 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="flex flex-col md:flex-row items-center md:items-start space-y-10 md:space-y-0 md:space-x-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration:1 }}
          >
            <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-6">
              Hello, I’m{" "}
              <span className="text-cyan-400 font-semibold">Sadkhan Mulla</span>
              , a passionate MERN Stack Developer with a love for creating
              efficient and user-centric web applications. My expertise spans
              JavaScript, React.js, Node.js, and MongoDB, allowing me to deliver
              seamless user experiences and scalable backend solutions.
            </p>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-6">
              I’m deeply invested in problem-solving and continuously enhance my
              skills by exploring data structures, algorithms, and modern
              frameworks. I believe in writing clean, maintainable code that
              delivers real-world value.
            </p>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              I improve my problem-solving skills on LeetCode, stay updated with
              tech trends, and collaborate on innovative projects.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, x: -100 }}
          // animate={{ opacity: 1, x:0 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
        >
          <p className="text-lg md:text-xl text-gray-400">
            I’m always open to collaborating on exciting projects.{" "}
            <a href="mailto:saadkhanmulla@gmail.com">
              <span className="text-cyan-400 font-semibold">
                Let’s connect and build something amazing!
              </span>
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
