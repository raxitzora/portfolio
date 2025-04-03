import React from 'react';
import cyberproject from '../../assets/cyberproject.jpg';
import carproject from '../../assets/carproject.png';
import { motion } from 'framer-motion';

const projects = [
  {
    image: cyberproject,
    title: "CyberAgent",
    description: "Implemented CyberAgent which provides real-time information about security vulnerabilities and delivers cyber attack news."
  },
  {
    image: carproject,
    title: "Car Price Prediction",
    description: "Developed a car price prediction tool using a Linear Regression model trained on historical car sales data. The project estimates prices for used cars based on various features like the car's name, company, year of manufacture, kilometers driven, and fuel type."
  },
];

const Projects = () => {
  return (
    <div className="border-2 solid bg-gray-900 p-4 sm:p-6 md:p-10 rounded-2xl md:rounded-4xl mt-8 md:mt-15" id='projects'>
      <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold text-center text-white mb-8 md:mb-12'>Projects</h1>
      {projects.map((project, index) => (
        <div key={index} className='border-2 border-gray-700 p-4 md:p-5 flex flex-col md:flex-row items-center gap-6 md:gap-10 mb-8 md:mb-10 rounded-lg'>
          <motion.img 
            src={project.image} 
            alt={`Project ${index + 1}`} 
            className='w-full md:w-1/2 h-48 md:h-auto object-cover rounded-lg shadow-lg' 
            whileHover={{ scale: 1.05 }}
            animate={{ opacity: [0.5, 1], transition: { duration: 1, repeat: Infinity, repeatType: "reverse" } }}
          />

          <motion.div 
            className='text-white font-bold text-base md:text-lg w-full md:w-1/2 border-2 border-yellow-200 p-4 rounded-lg hover:bg-blue-200 hover:text-gray-900 transition-all duration-300' 
            whileHover={{ scale: 1.05 }}
          >
            <h2 className='text-2xl md:text-3xl lg:text-4xl font-extrabold mb-2 text-gray-400'>{project.title}</h2>
            <p className='text-xl md:text-2xl lg:text-3xl font-semibold'>{project.description}</p>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
