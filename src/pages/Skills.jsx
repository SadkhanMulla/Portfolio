import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  {
    name: "React.js",
    description: "A JavaScript library for building user interfaces.",
    icon: "fab fa-react", 
  },
  {
    name: "Node.js",
    description: "A JavaScript runtime built on Chrome's V8 JavaScript engine.",
    icon: "fab fa-node", 
  },
  {
    name: "MongoDB",
    description: "A NoSQL database that stores data in flexible, JSON-like documents.",
    icon: "fas fa-database", 
  },
  {
    name: "Express.js",
    description: "A minimal and flexible Node.js web application framework.",
    icon: "fas fa-plug", 
  },
  {
    name: "Redux",
    description: "A predictable state container for JavaScript apps.",
    icon: "fas fa-cogs", 
  },
  {
    name: "MySQL",
    description: "An open-source relational database management system.",
    icon: "fas fa-database", 
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full py-16 bg-transparent text-white px-6 mb-6 md:mb-8 mt-8 md:mt-16"
    >
      <motion.h2
        className="text-2xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Skills
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-br from-black via-gray-800 to-black rounded-lg shadow-lg p-6"
            initial={{ opacity: 0, y: 140}}
            whileInView={{opacity:1, y: 0}}
            viewport={{once: false}}
            // animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 1,
              // delay: index * 0.2, 
            }}
          >
            <div className="flex items-center mb-4">
              <i className={`${skill.icon} text-4xl text-cyan-500 mr-4`}></i>
              <h3 className="text-2xl font-semibold">{skill.name}</h3>
            </div>
            <p className="text-lg text-gray-300">{skill.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
