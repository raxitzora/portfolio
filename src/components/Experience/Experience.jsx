import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "ML Engineer",
    company: "Unified Mentor",
    type: "Remote",
    duration: "JAN 2025 — FEB 2025",
    description:
      "Worked on machine learning workflows, data preprocessing pipelines, predictive systems and AI-driven engineering solutions focused on scalable model experimentation and intelligent automation.",
    skills: [
      "Python",
      "Machine Learning",
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
    duration: "JULY 2025 — PRESENT",
    description:
      "Engineering scalable frontend systems, immersive UI experiences, modern backend architectures and high-performance digital products using modern full stack technologies.",
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
          Professional Journey
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
          WORK
          <br />
          EXPERIENCE
        </motion.h2>
      </div>

      {/* Experience List */}
      <div className="relative z-10 border-t border-white/10">
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
              delay: index * 0.1,
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
              py-14
              transition-all
              duration-500
              group-hover:bg-white/[0.02]
              "
            >
              {/* Top Row */}
              <div
                className="
                flex
                flex-col
                lg:flex-row
                lg:items-start
                lg:justify-between
                gap-10
                "
              >
                {/* Left */}
                <div className="flex gap-6">
                  {/* Icon */}
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
                    shadow-[0_0_30px_rgba(255,255,255,0.03)]
                    group-hover:scale-110
                    group-hover:border-white/20
                    "
                  >
                    <Briefcase
                      className="
                      w-8
                      h-8
                      text-cyan-400
                      transition-all
                      duration-500
                      group-hover:rotate-[8deg]
                      group-hover:scale-110
                      "
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <p
                      className="
                      uppercase
                      tracking-[4px]
                      text-[11px]
                      text-gray-500
                      mb-3
                      "
                    >
                      {exp.type}
                    </p>

                    <h3
                      className="
                      text-[34px]
                      sm:text-[52px]
                      leading-none
                      tracking-[-3px]
                      font-[700]
                      "
                    >
                      {exp.title}
                    </h3>

                    <p
                      className="
                      mt-4
                      text-gray-400
                      text-[16px]
                      uppercase
                      tracking-[4px]
                      "
                    >
                      {exp.company}
                    </p>
                  </div>
                </div>

                {/* Right */}
                <div className="lg:text-right">
                  <p
                    className="
                    text-[13px]
                    uppercase
                    tracking-[4px]
                    text-gray-500
                    mb-3
                    "
                  >
                    Timeline
                  </p>

                  <p
                    className="
                    text-white
                    text-[18px]
                    sm:text-[22px]
                    font-medium
                    "
                  >
                    {exp.duration}
                  </p>
                </div>
              </div>

              {/* Bottom */}
              <div
                className="
                mt-14
                grid
                lg:grid-cols-[1.3fr_1fr]
                gap-16
                items-start
                "
              >
                {/* Description */}
                <p
                  className="
                  text-gray-400
                  text-[16px]
                  sm:text-[18px]
                  leading-[2]
                  max-w-3xl
                  "
                >
                  {exp.description}
                </p>

                {/* Skills */}
                <div>
                  <p
                    className="
                    uppercase
                    tracking-[4px]
                    text-[11px]
                    text-gray-500
                    mb-6
                    "
                  >
                    Technologies
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {exp.skills.map((skill, i) => (
                      <motion.div
                        key={i}
                        whileHover={{
                          y: -3,
                        }}
                        className="
                        px-5
                        py-3
                        rounded-full
                        border
                        border-white/10
                        bg-white/[0.03]
                        text-sm
                        text-gray-300
                        tracking-[2px]
                        uppercase
                        transition-all
                        duration-300
                        hover:border-white/20
                        hover:bg-white/[0.06]
                        hover:text-white
                        "
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Number */}
              <div
                className="
                mt-14
                border-t
                border-white/10
                pt-8
                "
              >
                <div
                  className="
                  text-[14px]
                  tracking-[4px]
                  uppercase
                  text-gray-600
                  "
                >
                  0{index + 1}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;