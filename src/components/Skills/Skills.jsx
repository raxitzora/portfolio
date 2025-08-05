import React from "react";
import { FaPython, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiPytorch,
  SiLangchain,
  SiHuggingface,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandJavascript, TbBrandNextjs,TbBrandFramerMotion  } from "react-icons/tb";

const skills = [
  { icon: <FaPython size={60} className="text-yellow-500" />, name: "Python", desc: "A powerful programming language for AI and web development." },
  { icon: <TbBrandJavascript size={60} className="text-yellow-300" />, name: "JavaScript", desc: "A Programming language for WebDevelopment." }, 
  { icon: <SiMongodb size={60} className="text-green-500" />, name: "MongoDB", desc: "A NoSQL database used for scalable applications." },
  { icon: <FaReact size={60} className="text-blue-500" />, name: "ReactJS", desc: "A JavaScript library for building interactive user interfaces." },
  { icon: <FaNodeJs size={60} className="text-green-400" />, name: "NodeJS", desc: "A JavaScript runtime for backend development." },
  { icon: <SiExpress size={60} className="text-gray-500" />, name: "ExpressJS", desc: "A minimal and flexible Node.js web framework." },
  { icon: <SiLangchain size={60} className="text-blue-400" />, name: "LangChain", desc: "A framework for developing AI applications." },
  { icon: <SiPytorch size={60} className="text-orange-500" />, name: "PyTorch", desc: "An open-source machine learning framework." },
  { icon: <SiHuggingface size={60} className="text-yellow-300" />, name: "HuggingFace", desc: "An open-source AI models library." },  
  { icon: <TbBrandNextjs size={60} className="text-gray-300" />, name: "NextJS", desc: "FullStack WebDevelopment JS based framework." },  
  { icon: <SiPostgresql size={60} className="text-blue-500" />, name: "PostgreSQL", desc: "A SQL database for enterprise level applications." },
  { icon: <TbBrandFramerMotion size={60} className="text-yellow-300" />, name: "FramerMotion", desc: "A Javascript based animation library." },
];

const Skills = () => {
  return (
    <div id="skills" className="py-16">
      <h1 className="text-5xl sm:text-6xl font-extrabold text-white text-center mb-10">Skillset</h1>

      <div className="bg-gray-800/80 px-4 py-8 rounded-3xl shadow-lg max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 text-left border-2 border-transparent rounded-lg p-4 hover:border-blue-500 hover:bg-gray-700 transition duration-300"
            >
              <span>{skill.icon}</span>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">{skill.name}</h2>
                <p className="text-lg text-gray-300">{skill.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
