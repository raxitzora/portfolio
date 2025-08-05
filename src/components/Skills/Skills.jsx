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
import {
  TbBrandJavascript,
  TbBrandNextjs,
  TbBrandFramerMotion,
} from "react-icons/tb";

const skills = [
  {
    icon: <FaPython size={60} className="text-yellow-500" aria-hidden="true" />,
    name: "Python",
    desc: "Powerful programming language used for data science, machine learning, and backend web development.",
  },
  {
    icon: <TbBrandJavascript size={60} className="text-yellow-300" aria-hidden="true" />,
    name: "JavaScript",
    desc: "Core technology for front-end web development and interactive browser applications.",
  },
  {
    icon: <SiMongodb size={60} className="text-green-500" aria-hidden="true" />,
    name: "MongoDB",
    desc: "Scalable NoSQL database commonly used in MERN stack applications.",
  },
  {
    icon: <FaReact size={60} className="text-blue-500" aria-hidden="true" />,
    name: "ReactJS",
    desc: "A JavaScript library for building modern and dynamic user interfaces.",
  },
  {
    icon: <FaNodeJs size={60} className="text-green-400" aria-hidden="true" />,
    name: "NodeJS",
    desc: "JavaScript runtime used for building fast and scalable server-side applications.",
  },
  {
    icon: <SiExpress size={60} className="text-gray-500" aria-hidden="true" />,
    name: "ExpressJS",
    desc: "Minimalist backend framework for Node.js used in REST APIs and web apps.",
  },
  {
    icon: <SiLangchain size={60} className="text-blue-400" aria-hidden="true" />,
    name: "LangChain",
    desc: "Framework for developing AI language models and intelligent agents.",
  },
  {
    icon: <SiPytorch size={60} className="text-orange-500" aria-hidden="true" />,
    name: "PyTorch",
    desc: "Open-source machine learning framework for building and training deep neural networks.",
  },
  {
    icon: <SiHuggingface size={60} className="text-yellow-300" aria-hidden="true" />,
    name: "HuggingFace",
    desc: "Platform for sharing, training, and deploying cutting-edge NLP models.",
  },
  {
    icon: <TbBrandNextjs size={60} className="text-gray-300" aria-hidden="true" />,
    name: "NextJS",
    desc: "React framework for full-stack applications with SEO optimization and fast routing.",
  },
  {
    icon: <SiPostgresql size={60} className="text-blue-500" aria-hidden="true" />,
    name: "PostgreSQL",
    desc: "Advanced open-source relational database used in secure and scalable applications.",
  },
  {
    icon: <TbBrandFramerMotion size={60} className="text-yellow-300" aria-hidden="true" />,
    name: "Framer Motion",
    desc: "Animation library for React used to create smooth and interactive UI transitions.",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16" aria-label="Skills Section">
      {/* ✅ Heading hierarchy: now <h2> */}
      <h2 className="text-5xl sm:text-6xl font-extrabold text-white text-center mb-10">
        Skillset
      </h2>

      <div className="bg-gray-800/80 px-4 py-8 rounded-3xl shadow-lg max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 text-left border-2 border-transparent rounded-lg p-4 hover:border-blue-500 hover:bg-gray-700 transition duration-300"
            >
              <span role="img" aria-label={skill.name + " logo"}>
                {skill.icon}
              </span>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  {skill.name}
                </h3>
                <p className="text-lg text-gray-300">{skill.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
