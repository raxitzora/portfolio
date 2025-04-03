import React from 'react';
import cyberproject from '../../assets/cyberproject.jpg';
import carproject from '../../assets/carproject.png';
import { motion } from 'framer-motion';

const projects = [
  {
    image: cyberproject,
    title: "CyberAgent",
    description: "A real-time cyber intelligence system providing security vulnerability insights and attack news updates.",
  },
  {
    image: carproject,
    title: "Car Price Prediction",
    description: "A machine learning model that estimates used car prices based on features like brand, year, mileage, and fuel type.",
  },
];

const Projects = () => {
  return (
    <div id="projects" className="bg-gray-900 py-16 px-6">
      <h1 className="text-5xl sm:text-6xl font-extrabold text-center text-white mb-12">Projects</h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="border border-gray-700 p-6 rounded-lg bg-gray-800/80 shadow-lg"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            {/* Project Image */}
            <motion.img
              src={project.image}
              alt={`Project ${index + 1}`}
              className="w-full h-52 object-cover rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
            />

            {/* Project Details */}
            <div className="mt-4 text-white">
              <h2 className="text-3xl font-bold text-yellow-300 mb-2">{project.title}</h2>
              <p className="text-lg text-gray-300">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
