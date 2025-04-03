import React from 'react';
import { FaPython, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiPytorch, SiLangchain, SiHuggingface } from 'react-icons/si';
import { motion } from 'framer-motion';

const skills = [
  { icon: <FaPython size={60} className="text-yellow-500 md:hover:text-yellow-300 transition duration-300"/>, name: "Python", desc: "A powerful programming language for AI and web development."},
  { icon: <SiMongodb size={60} className="text-green-500 md:hover:text-green-300 transition duration-300" />, name: "MongoDB", desc: "A NoSQL database used for scalable applications." },
  { icon: <FaReact size={60} className="text-blue-500 md:hover:text-blue-300 transition duration-300" />, name: "React", desc: "A JavaScript library for building interactive user interfaces." },
  { icon: <FaNodeJs size={60} className="text-green-400 md:hover:text-green-200 transition duration-300" />, name: "Node.js", desc: "A JavaScript runtime for backend development." },
  { icon: <SiExpress size={60} className="text-gray-500 md:hover:text-gray-300 transition duration-300" />, name: "Express", desc: "A minimal and flexible Node.js web framework." },
  { icon: <SiLangchain size={60} className="text-blue-400 md:hover:text-blue-200 transition duration-300" />, name: "LangChain", desc: "A framework for developing AI applications." },
  { icon: <SiPytorch size={60} className="text-orange-500 md:hover:text-orange-300 transition duration-300" />, name: "PyTorch", desc: "An open-source machine learning framework." },
  { icon: <SiHuggingface size={60} className="text-yellow-300 md:hover:text-yellow-200 transition duration-300" />, name: "HuggingFace", desc: "An open-source AI models library." }
];

const Skills = () => {
  return (
    <div id="skills" className="py-16">
      <h1 className="text-5xl sm:text-6xl font-extrabold text-white text-center mb-10">Skillset</h1>
      
      <div className="bg-gray-800/80 px-4 py-8 rounded-3xl shadow-lg max-w-5xl mx-auto">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              className="flex items-center space-x-4 text-left border-2 border-transparent rounded-lg p-4 hover:border-blue-500 hover:animate-pulse transition duration-300"
            >
              {skill.icon}
              <div>
                <motion.h2 
                  className="text-2xl sm:text-3xl font-bold text-white"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  {skill.name}
                </motion.h2>
                <p className="text-lg text-gray-300">{skill.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;