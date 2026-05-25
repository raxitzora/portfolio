import React from "react";
import { motion } from "framer-motion";

import { FaPython, FaReact, FaNodeJs } from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiPytorch,
  SiHuggingface,
  SiPostgresql,
  SiKalilinux,
  SiFastapi,
  SiDocker,
} from "react-icons/si";

import {
  TbBrandJavascript,
  TbBrandNextjs,
  TbBrandFramerMotion,
} from "react-icons/tb";

const skills = [
  {
    icon: (
      <FaPython
        size={34}
        className="
        text-yellow-400
        group-hover:rotate-[8deg]
        group-hover:scale-110
        transition-all
        duration-500
        "
      />
    ),
    name: "Python",
    category: "AI ENGINEERING",
    desc: "Machine learning systems, backend architecture, automation pipelines and intelligent software engineering.",
  },

  {
    icon: (
      <TbBrandJavascript
        size={34}
        className="
        text-yellow-300
        group-hover:rotate-[8deg]
        group-hover:scale-110
        transition-all
        duration-500
        "
      />
    ),
    name: "JavaScript",
    category: "FRONTEND SYSTEMS",
    desc: "Interactive frontend engineering with scalable architectures and immersive user experiences.",
  },

  {
    icon: (
      <SiMongodb
        size={34}
        className="
        text-green-500
        group-hover:rotate-[8deg]
        group-hover:scale-110
        transition-all
        duration-500
        "
      />
    ),
    name: "MongoDB",
    category: "DATABASE SYSTEMS",
    desc: "Flexible NoSQL infrastructure engineered for modern production-grade applications.",
  },

  {
    icon: (
      <FaReact
        size={34}
        className="
        text-cyan-400
        group-hover:rotate-[8deg]
        group-hover:scale-110
        transition-all
        duration-500
        "
      />
    ),
    name: "React",
    category: "UI ENGINEERING",
    desc: "Component-driven interfaces focused on responsiveness, performance and scalability.",
  },

  {
    icon: (
      <FaNodeJs
        size={34}
        className="
        text-green-400
        group-hover:rotate-[8deg]
        group-hover:scale-110
        transition-all
        duration-500
        "
      />
    ),
    name: "NodeJS",
    category: "BACKEND SYSTEMS",
    desc: "Fast and scalable runtime environments powering APIs and real-time services.",
  },

  {
    icon: (
      <SiExpress
        size={34}
        className="
        text-gray-300
        group-hover:rotate-[8deg]
        group-hover:scale-110
        transition-all
        duration-500
        "
      />
    ),
    name: "Express",
    category: "API ARCHITECTURE",
    desc: "Secure REST infrastructure and lightweight backend engineering workflows.",
  },

  {
    icon: (
      <SiPytorch
        size={34}
        className="
        text-orange-500
        group-hover:rotate-[8deg]
        group-hover:scale-110
        transition-all
        duration-500
        "
      />
    ),
    name: "PyTorch",
    category: "DEEP LEARNING",
    desc: "Neural network systems, transformer experimentation and AI model engineering.",
  },

  {
    icon: (
      <SiHuggingface
        size={34}
        className="
        text-yellow-300
        group-hover:rotate-[8deg]
        group-hover:scale-110
        transition-all
        duration-500
        "
      />
    ),
    name: "HuggingFace",
    category: "LLM SYSTEMS",
    desc: "Transformer integration, NLP workflows and intelligent conversational systems.",
  },

  {
    icon: (
      <TbBrandNextjs
        size={34}
        className="
        text-white
        group-hover:rotate-[8deg]
        group-hover:scale-110
        transition-all
        duration-500
        "
      />
    ),
    name: "Next.js",
    category: "FULLSTACK ENGINEERING",
    desc: "Production-grade frontend architecture with SSR optimization and modern rendering.",
  },

  {
    icon: (
      <SiPostgresql
        size={34}
        className="
        text-blue-400
        group-hover:rotate-[8deg]
        group-hover:scale-110
        transition-all
        duration-500
        "
      />
    ),
    name: "PostgreSQL",
    category: "DATA ENGINEERING",
    desc: "Advanced relational database systems with structured and scalable data handling.",
  },

  {
    icon: (
      <TbBrandFramerMotion
        size={34}
        className="
        text-pink-400
        group-hover:rotate-[8deg]
        group-hover:scale-110
        transition-all
        duration-500
        "
      />
    ),
    name: "Framer Motion",
    category: "MOTION DESIGN",
    desc: "Cinematic animation systems and premium interaction-driven user experiences.",
  },

  {
    icon: (
      <SiKalilinux
        size={34}
        className="
        text-white
        group-hover:rotate-[8deg]
        group-hover:scale-110
        transition-all
        duration-500
        "
      />
    ),
    name: "Kali Linux",
    category: "CYBER SECURITY",
    desc: "Penetration testing workflows, ethical hacking environments and security research.",
  },

  {
    icon: (
      <SiFastapi
        size={34}
        className="
        text-[#00C7B7]
        group-hover:rotate-[8deg]
        group-hover:scale-110
        transition-all
        duration-500
        "
      />
    ),
    name: "FastAPI",
    category: "HIGH PERFORMANCE APIs",
    desc: "Modern Python backend systems optimized for speed, scalability and AI infrastructure.",
  },

  {
    icon: (
      <SiDocker
        size={34}
        className="
        text-blue-500
        group-hover:rotate-[8deg]
        group-hover:scale-110
        transition-all
        duration-500
        "
      />
    ),
    name: "Docker",
    category: "DEVOPS",
    desc: "Containerized infrastructure management and reproducible deployment workflows.",
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative bg-black text-white overflow-hidden py-32"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 120, -120, 0],
            y: [0, -80, 80, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
          absolute
          top-1/2
          left-1/2
          w-[800px]
          h-[800px]
          rounded-full
          bg-white/[0.03]
          blur-[160px]
          -translate-x-1/2
          -translate-y-1/2
          "
        />
      </div>

      {/* Header */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 mb-24">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
          uppercase
          tracking-[6px]
          text-sm
          text-gray-500
          mb-6
          "
        >
          Core Expertise
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="
          text-[50px]
          sm:text-[90px]
          lg:text-[140px]
          font-[700]
          leading-[0.9]
          tracking-[-6px]
          max-w-6xl
          "
        >
          TECHNOLOGIES
          <br />
          I WORK WITH
        </motion.h2>
      </div>

      {/* Skills List */}
      <div className="relative z-10 border-t border-white/10">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 80,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: index * 0.03,
            }}
            className="
            group
            border-b
            border-white/10
            "
          >
            <div
              className="
              max-w-7xl
              mx-auto
              px-6
              sm:px-10
              py-10
              grid
              lg:grid-cols-[120px_1fr_2fr]
              gap-10
              items-center
              transition-all
              duration-500
              group-hover:bg-white/[0.02]
              "
            >
              {/* Number */}
              <div
                className="
                text-[14px]
                tracking-[4px]
                text-gray-600
                uppercase
                "
              >
                0{index + 1}
              </div>

              {/* Skill */}
              <div className="flex items-center gap-6">
                {/* Icon Box */}
                <div
                  className="
                  w-20
                  h-20
                  rounded-2xl
                  border
                  border-white/10
                  bg-gradient-to-br
                  from-white/[0.05]
                  to-white/[0.02]
                  backdrop-blur-xl
                  flex
                  items-center
                  justify-center
                  transition-all
                  duration-500
                  group-hover:scale-110
                  group-hover:border-white/20
                  group-hover:bg-white/[0.06]
                  shadow-[0_0_30px_rgba(255,255,255,0.03)]
                  "
                >
                  {skill.icon}
                </div>

                <div>
                  <p
                    className="
                    text-[11px]
                    uppercase
                    tracking-[4px]
                    text-gray-500
                    mb-2
                    "
                  >
                    {skill.category}
                  </p>

                  <h3
                    className="
                    text-[28px]
                    sm:text-[40px]
                    font-[600]
                    tracking-[-2px]
                    leading-none
                    "
                  >
                    {skill.name}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <div
                className="
                flex
                items-center
                justify-between
                gap-10
                "
              >
                <p
                  className="
                  text-gray-400
                  text-[15px]
                  sm:text-[17px]
                  leading-[2]
                  max-w-2xl
                  "
                >
                  {skill.desc}
                </p>

                {/* Arrow */}
                <motion.div
                  whileHover={{
                    x: 5,
                  }}
                  className="
                  hidden
                  lg:flex
                  w-14
                  h-14
                  rounded-full
                  border
                  border-white/10
                  items-center
                  justify-center
                  text-gray-500
                  group-hover:text-white
                  group-hover:border-white/20
                  transition-all
                  duration-500
                  "
                >
                  →
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;