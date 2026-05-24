import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "ML Engineer",
    company: "Unified Mentor",
    type: "Remote",
    duration: "JAN 2025 – FEB 2025",
    side: "left",
    skills: [
      "Python",
      "Machine Learning",
      "Data Preprocessing",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
    ],
  },

  {
    title: "Full Stack Engineer",
    company: "Deckoid Solution",
    type: "Hybrid",
    duration: "JULY 2025 – PRESENT",
    side: "right",
    skills: [
      "Next.js",
      "TailwindCSS",
      "MERN Stack",
      "UI/UX",
      "API Development",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
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
          CAREER
          <br />
          LOG.
        </h2>

        <p
          className="mt-6 text-gray-500 text-sm tracking-[4px]"
          style={{
            fontFamily: "'VT323', monospace",
          }}
        >
          PROFESSIONAL EXPERIENCE TIMELINE.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-6xl mx-auto">

        {/* Center Line */}
        <div className="absolute left-1/2 top-0 hidden lg:block w-[1px] h-full bg-gradient-to-b from-transparent via-white/20 to-transparent" />

        <div className="space-y-20">

          {experiences.map((exp, index) => (
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
                delay: index * 0.2,
              }}
              className={`relative flex items-center ${
                exp.side === "left"
                  ? "lg:justify-start"
                  : "lg:justify-end"
              }`}
            >
              {/* Timeline Dot */}
              <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 z-30">
                <motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="w-5 h-5 rounded-full bg-white shadow-[0_0_30px_rgba(255,255,255,0.8)]"
                />
              </div>

              {/* Experience Card */}
              <motion.div
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="
                group
                relative
                w-full
                lg:w-[46%]
                border
                border-[#2b2b2b]
                bg-[#111111]
                backdrop-blur-xl
                overflow-hidden
                transition-all
                duration-500
                hover:border-white/20
                shadow-[0_10px_60px_rgba(0,0,0,0.7)]
                "
              >
                {/* Top Line */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                {/* Glow Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-white/[0.03] to-transparent" />

                {/* Content */}
                <div className="relative z-10 p-6 sm:p-8 lg:p-10">

                  {/* Header */}
                  <div className="flex items-start justify-between gap-4 mb-8">

                    <div className="flex gap-4">

                      {/* Icon */}
                      <div
                        className="
                        w-14
                        h-14
                        flex
                        items-center
                        justify-center
                        border
                        border-[#2b2b2b]
                        bg-black
                        "
                      >
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>

                      <div>
                        <p className="text-[10px] tracking-[4px] uppercase text-gray-500 mb-2">
                          Position
                        </p>

                        <h3 className="text-[22px] sm:text-[26px] font-semibold text-white tracking-wide">
                          {exp.title}
                        </h3>

                        <p className="mt-2 text-gray-400 text-sm tracking-[2px] uppercase">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    {/* Duration */}
                    <div className="text-right">
                      <p className="text-[10px] tracking-[3px] uppercase text-gray-500 mb-2">
                        Timeline
                      </p>

                      <p className="text-sm text-white">
                        {exp.duration}
                      </p>

                      <p className="mt-2 text-xs text-gray-500 uppercase tracking-[2px]">
                        {exp.type}
                      </p>
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
                    Worked on scalable software systems, frontend architectures,
                    machine learning workflows, and high-performance digital
                    experiences with modern development technologies.
                  </p>

                  {/* Skills */}
                  <div className="mt-10">

                    <div className="flex items-center justify-between mb-5">
                      <p className="text-[10px] tracking-[4px] uppercase text-gray-500">
                        Technologies
                      </p>

                      <div className="w-16 h-[1px] bg-white/20" />
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {exp.skills.map((skill, i) => (
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
                          {skill}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom HUD */}
                  <div className="mt-10 flex justify-between items-center">

                    <div className="w-full h-[3px] bg-[#252525] overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "88%" }}
                        transition={{
                          duration: 1.4,
                        }}
                        className="h-full bg-gradient-to-r from-white to-gray-500"
                      />
                    </div>

                    <span className="ml-4 text-xs text-gray-500 tracking-[3px]">
                      0{index + 1}
                    </span>
                  </div>
                </div>

                {/* Corner Decorations */}
                <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-white/20" />

                <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-white/20" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;