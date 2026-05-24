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
    icon: <FaPython size={42} className="text-yellow-500" />,
    name: "Python",
    desc: "Machine learning, backend systems, automation and AI engineering.",
  },

  {
    icon: <TbBrandJavascript size={42} className="text-yellow-300" />,
    name: "JavaScript",
    desc: "Interactive frontend systems and modern web applications.",
  },

  {
    icon: <SiMongodb size={42} className="text-green-500" />,
    name: "MongoDB",
    desc: "Scalable NoSQL database architecture for modern applications.",
  },

  {
    icon: <FaReact size={42} className="text-cyan-400" />,
    name: "ReactJS",
    desc: "Dynamic interfaces and component-driven frontend engineering.",
  },

  {
    icon: <FaNodeJs size={42} className="text-green-400" />,
    name: "NodeJS",
    desc: "Fast scalable backend runtime and API infrastructure.",
  },

  {
    icon: <SiExpress size={42} className="text-gray-300" />,
    name: "ExpressJS",
    desc: "Minimal backend framework for secure REST APIs.",
  },

  {
    icon: <SiPytorch size={42} className="text-orange-500" />,
    name: "PyTorch",
    desc: "Deep learning framework for neural network systems.",
  },

  {
    icon: <SiHuggingface size={42} className="text-yellow-300" />,
    name: "HuggingFace",
    desc: "LLM integration, NLP systems and transformer architectures.",
  },

  {
    icon: <TbBrandNextjs size={42} className="text-white" />,
    name: "NextJS",
    desc: "Production-grade React framework with SSR optimization.",
  },

  {
    icon: <SiPostgresql size={42} className="text-blue-400" />,
    name: "PostgreSQL",
    desc: "Advanced relational database systems and secure data handling.",
  },

  {
    icon: <TbBrandFramerMotion size={42} className="text-pink-400" />,
    name: "Framer Motion",
    desc: "Cinematic UI animation systems and smooth motion experiences.",
  },

  {
    icon: <SiKalilinux size={42} className="text-white" />,
    name: "Kali Linux",
    desc: "Ethical hacking, penetration testing and cybersecurity research.",
  },

  {
    icon: <SiFastapi size={42} className="text-[#00C7B7]" />,
    name: "FastAPI",
    desc: "High-performance Python framework for scalable APIs.",
  },

  {
    icon: <SiDocker size={42} className="text-blue-500" />,
    name: "Docker",
    desc: "Containerized deployment systems and infrastructure management.",
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative min-h-screen bg-black overflow-hidden py-24 px-4 sm:px-6 lg:px-10"
    >
      {/* Background Grain */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')]" />

      {/* Background Glow */}
      <motion.div
        animate={{
          x: [0, 50, -50, 0],
          y: [0, -30, 30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-white/5 blur-[140px] rounded-full -translate-x-1/2 -translate-y-1/2"
      />

      {/* Header */}
      <div className="relative z-20 mb-20">
        <h2
          className="text-[30px] sm:text-[50px] lg:text-[75px] leading-[0.9] uppercase text-white"
          style={{
            fontFamily: "'Press Start 2P', monospace",
          }}
        >
          SKILL
          <br />
          MATRIX.
        </h2>

        <p
          className="mt-6 text-gray-500 text-sm tracking-[4px]"
          style={{
            fontFamily: "'VT323', monospace",
          }}
        >
          SYSTEM CAPABILITIES LOADED.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">

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
              delay: index * 0.05,
            }}
            whileHover={{
              y: -10,
              scale: 1.02,
            }}
            className="
            group
            relative
            overflow-hidden
            border
            border-[#2b2b2b]
            bg-[#121212]
            hover:border-white/20
            transition-all
            duration-500
            p-6
            sm:p-8
            shadow-[0_10px_50px_rgba(0,0,0,0.5)]
            "
          >
            {/* Top HUD Line */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

            {/* Hover Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-white/[0.03] to-transparent" />

            {/* Card Header */}
            <div className="flex items-center gap-5 mb-6">

              {/* Icon Box */}
              <div
                className="
                w-16
                h-16
                flex
                items-center
                justify-center
                border
                border-[#2b2b2b]
                bg-black
                group-hover:scale-110
                transition-all
                duration-500
                "
              >
                {skill.icon}
              </div>

              {/* Skill Name */}
              <div>
                <p className="text-[10px] tracking-[4px] uppercase text-gray-500 mb-2">
                  Capability
                </p>

                <h3 className="text-[20px] sm:text-[24px] font-semibold tracking-wide text-white">
                  {skill.name}
                </h3>
              </div>
            </div>

            {/* Description */}
            <p
              className="
              text-[13px]
              sm:text-[14px]
              leading-[1.9]
              tracking-wide
              text-gray-400
              "
            >
              {skill.desc}
            </p>

            {/* Bottom HUD */}
            <div className="mt-8 flex justify-between items-center">
              <div className="w-full h-[3px] bg-[#252525] overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "85%" }}
                  transition={{
                    duration: 1.2,
                    delay: 0.2,
                  }}
                  className="h-full bg-gradient-to-r from-white to-gray-500"
                />
              </div>

              <span className="ml-4 text-xs text-gray-500 tracking-[2px]">
                0{index + 1}
              </span>
            </div>

            {/* Corner Decoration */}
            <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-white/20" />

            <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-white/20" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;