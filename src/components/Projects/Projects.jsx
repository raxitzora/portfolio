import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    image: "/assets/cyberproject.jpg",
    title: "ZoroCyberSecAI Chatbot",
    description:
      "An advanced cybersecurity AI assistant built for red teamers, blue teamers, and bug bounty hunters using FastAPI, Next.js 15, TypeScript, and Vercel AI SDK.",
    github: "https://github.com/raxitzora/CyberSecFrontend",
    live: "https://cybersecurityai.vercel.app/",
    stack: [
      "Next.js",
      "FastAPI",
      "TypeScript",
      "AI SDK",
      "Cybersecurity",
    ],
  },

  {
    image: "/assets/deckoidproject.png",
    title: "Deckoid Frontend Website",
    description:
      "A cinematic frontend engineering experience with smooth animations, immersive transitions, and modern UI architecture powered by GSAP and Framer Motion.",
    github: "https://github.com/raxitzora/Deckoid",
    live: "https://deckoid.vercel.app/",
    stack: [
      "Next.js",
      "Framer Motion",
      "GSAP",
      "TailwindCSS",
      "UI/UX",
    ],
  },

  {
    image: "/assets/frontend.png",
    title: "Modern Frontend Platform",
    description:
      "Responsive frontend platform engineered with scalable React architecture, accessible UI systems, premium animations, and modern design patterns.",
    github: "https://github.com/raxitzora/",
    live: "https://cosmic-tawny.vercel.app/",
    stack: [
      "React",
      "Next.js",
      "TailwindCSS",
      "Animations",
      "Responsive UI",
    ],
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative min-h-screen bg-black overflow-hidden py-24 px-4 sm:px-6 lg:px-10"
    >
      {/* Background Grain */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')]" />

      {/* Glow */}
      <motion.div
        animate={{
          x: [0, 60, -60, 0],
          y: [0, -40, 40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-white/5 blur-[140px] rounded-full -translate-x-1/2 -translate-y-1/2"
      />

      {/* Header */}
      <div className="relative z-20 mb-24">
        <h2
          className="text-[28px] sm:text-[50px] lg:text-[75px] leading-[0.9] uppercase text-white"
          style={{
            fontFamily: "'Press Start 2P', monospace",
          }}
        >
          PROJECT
          <br />
          ARCHIVE.
        </h2>

        <p
          className="mt-6 text-gray-500 text-sm tracking-[4px]"
          style={{
            fontFamily: "'VT323', monospace",
          }}
        >
          SELECTED DIGITAL EXPERIENCES.
        </p>
      </div>

      {/* Projects */}
      <div className="relative z-10 max-w-7xl mx-auto space-y-16">

        {projects.map((project, index) => (
          <motion.article
            key={index}
            initial={{
              opacity: 0,
              y: 100,
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
              delay: index * 0.1,
            }}
            whileHover={{
              y: -8,
            }}
            className="
            group
            relative
            overflow-hidden
            border
            border-[#2a2a2a]
            bg-[#111111]
            transition-all
            duration-500
            hover:border-white/20
            shadow-[0_10px_80px_rgba(0,0,0,0.7)]
            "
          >
            {/* Top HUD Line */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <div className="grid lg:grid-cols-2">

              {/* Image */}
              <div className="relative overflow-hidden">

                <motion.img
                  whileHover={{
                    scale: 1.05,
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                  src={project.image}
                  alt={project.title}
                  className="
                  w-full
                  h-[280px]
                  sm:h-[400px]
                  lg:h-full
                  object-contain
                  grayscale
                  brightness-90
                  contrast-125
                  transition-all
                  duration-700
                  group-hover:grayscale-0
                  group-hover:brightness-100
                  "
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                {/* HUD Label */}
                <div className="absolute top-5 left-5 border border-white/20 bg-black/50 backdrop-blur-sm px-4 py-2">
                  <p className="text-[10px] tracking-[4px] uppercase text-white/80">
                    Project 0{index + 1}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="relative p-6 sm:p-8 lg:p-10 flex flex-col justify-between">

                {/* Glow Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-white/[0.02] to-transparent" />

                <div className="relative z-10">

                  {/* Header */}
                  <div className="mb-8">

                    <p className="text-[10px] tracking-[4px] uppercase text-gray-500 mb-3">
                      Featured Build
                    </p>

                    <h3 className="text-[26px] sm:text-[38px] font-semibold text-white leading-tight">
                      {project.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p
                    className="
                    text-[14px]
                    sm:text-[15px]
                    leading-[2]
                    tracking-wide
                    text-gray-400
                    "
                  >
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mt-10">

                    <div className="flex items-center justify-between mb-5">
                      <p className="text-[10px] tracking-[4px] uppercase text-gray-500">
                        Stack
                      </p>

                      <div className="w-16 h-[1px] bg-white/20" />
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {project.stack.map((tech, i) => (
                        <motion.div
                          key={i}
                          whileHover={{
                            y: -3,
                          }}
                          className="
                          px-4
                          py-2
                          text-xs
                          sm:text-sm
                          border
                          border-[#2a2a2a]
                          bg-black
                          text-gray-300
                          tracking-wide
                          uppercase
                          hover:border-white/30
                          hover:text-white
                          transition-all
                          duration-300
                          "
                        >
                          {tech}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="relative z-10 mt-10 flex flex-wrap gap-4">

                  <motion.a
                    whileHover={{
                      y: -2,
                    }}
                    whileTap={{
                      scale: 0.96,
                    }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                    flex
                    items-center
                    gap-3
                    border
                    border-[#2b2b2b]
                    bg-black
                    px-5
                    py-3
                    text-sm
                    tracking-[2px]
                    uppercase
                    text-gray-300
                    hover:border-white/30
                    hover:text-white
                    transition-all
                    duration-300
                    "
                  >
                    <Github size={18} />
                    Github
                  </motion.a>

                  <motion.a
                    whileHover={{
                      y: -2,
                    }}
                    whileTap={{
                      scale: 0.96,
                    }}
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                    flex
                    items-center
                    gap-3
                    border
                    border-white/20
                    bg-white
                    text-black
                    px-5
                    py-3
                    text-sm
                    tracking-[2px]
                    uppercase
                    hover:bg-transparent
                    hover:text-white
                    transition-all
                    duration-300
                    "
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </motion.a>
                </div>

                {/* Bottom Progress */}
                <div className="mt-10 flex items-center justify-between">

                  <div className="w-full h-[3px] bg-[#252525] overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "92%" }}
                      transition={{
                        duration: 1.5,
                      }}
                      className="h-full bg-gradient-to-r from-white to-gray-500"
                    />
                  </div>

                  <span className="ml-4 text-xs text-gray-500 tracking-[3px]">
                    0{index + 1}
                  </span>
                </div>
              </div>
            </div>

            {/* Corner Decorations */}
            <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-white/20" />

            <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-white/20" />
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Projects;