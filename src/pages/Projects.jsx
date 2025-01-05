import React from "react";
import { Tilt } from "react-tilt"; // Import the Tilt component
import { motion } from "framer-motion";

const projects = [
  {
    name: "AirBnb Website (Wanderlust)",
    description:
      "Wanderlust is a responsive web platform that allows users to find and unique stays. It features user registration and Login, property listings, and a search and filter system for easy navigation. Built with Bootstrap, Node.js, MongoDB, EJS templates, and JavaScript",
    icon: "fas fa-hotel",
    link: "https://airbnb-project-zk1w.onrender.com/listings",
  },
  {
    name: "Chat App",
    description:
      "A dynamic real-time chat application developed with React.js, Node.js, MongoDB, Redux, Material UI, and Socket.io. Users can connect with friends, engage in group conversations. include secure user authentication with signup and signin functionality, enabling effortless communication in real-time.",
    icon: "fas fa-comment-dots",
    link: "#",
  },
  {
    name: "E-commerce Website",
    description:
      "A fully responsive e-commerce platform built with React, Bootstrap, HTML, and CSS. It features product filtering, an 'add to cart' functionality, and data storage using React Context. The project is designed for seamless user experience without a backend.",
    icon: "fas fa-shopping-cart",
    link: "https://github.com/SadkhanMulla/E-Commerce-Website",
  },
];

const Project = () => {
  return (
    <section
      id="projects"
      className="w-full py-12 bg-transparent text-white px-6 h-auto md:mt-8"
    >
      <motion.h2
        className="text-2xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 md:gap-16 md:px-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="opacity-75"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Tilt
              className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-lg shadow-lg overflow-hidden"
              options={{
                max: 25,
                scale: 1.1,
                speed: 200,
              }}
            >
              <div className="w-full h-[10rem] flex justify-center items-center">
                <i
                  className={`${project.icon} text-white text-8xl`} // Increase icon size
                ></i>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-slate-100 mb-4">
                  {project.name}
                </h3>
                <p className="text-base text-gray-400 mb-4">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 bg-cyan-500 text-gray-900 rounded-full font-semibold"
                >
                  View Project
                </a>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Project;
