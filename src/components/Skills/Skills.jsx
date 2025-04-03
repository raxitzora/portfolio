import React from 'react';
import { FaPython, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiPytorch, SiLangchain,SiHuggingface } from 'react-icons/si';
import { motion } from 'framer-motion';

const skills = [
  { icon: <FaPython size={70} className="hover:text-yellow-500 transition duration-300" />, name: "Python", desc: "A powerful programming language for AI and web development." },
  { icon: <SiMongodb size={70} className="hover:text-green-500 transition duration-300" />, name: "MongoDB", desc: "A NoSQL database used for scalable applications." },
  { icon: <FaReact size={70} className="hover:text-blue-500 transition duration-300" />, name: "React", desc: "A JavaScript library for building interactive user interfaces." },
  { icon: <FaNodeJs size={70} className="hover:text-green-400 transition duration-300" />, name: "Node.js", desc: "A JavaScript runtime for backend development." },
  { icon: <SiExpress size={70} className="hover:text-gray-500 transition duration-300" />, name: "Express", desc: "A minimal and flexible Node.js web framework." },
  { icon: <SiLangchain size={70} className="hover:text-blue-400 transition duration-300" />, name: "LangChain", desc: "A framework for developing AI applications." },
  { icon: <SiPytorch size={70} className="hover:text-orange-500 transition duration-300" />, name: "PyTorch", desc: "An open-source machine learning framework." },
  { icon: <SiHuggingface size={70} className="hover:text-yellow-300 transition duration-300" />, name: "HuggingFace", desc: "An open-source AI models library." }
];

const Skills = () => {
  return (
    <div id='skills'>
        <h1 className='text-6xl font-extrabold text-white text-center mt-20'>SkillsSet</h1>
    <div className=" text-white mt-15 flex justify-center ml-[20px] border-2 solid rounded-4xl bg-gray-900">
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 justify-center items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration:0.5 }}
        viewport={{ once: true }}
      >
        {skills.map((skill, index) => (
          <motion.div key={index} className="flex items-center space-x-4 text-left">
            {skill.icon}
            <div>
              <motion.h2 
                className="text-4xl font-bold"
                whileHover={{ scale: 1.1 }}
                animate={{ opacity: [0.5, 1], transition: { duration: 1, repeat: Infinity, repeatType: "reverse" } }}
              >
                {skill.name}
              </motion.h2>
              <p className="text-xl text-gray-300">{skill.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
    </div>
  );
};

export default Skills;