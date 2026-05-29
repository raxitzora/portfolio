import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

const works = [
  {
    year: "2026",
    title: "ZoroCyberSecAI",
    subtitle: "AI-Powered Cybersecurity Workspace",
    description:
      "Designed and engineered an intelligent cybersecurity platform focused on offensive security workflows, AI-assisted operations, and real-time interaction systems for security researchers and red team environments.",
    image: "/assets/cyberproject.jpg",
    live: "https://cybersecurityai.vercel.app/",
    github: "https://github.com/raxitzora/CyberSecFrontend",
    metadata:
      "Next.js 15 / FastAPI / AI Systems / Real-Time Architecture",
  },

  {
    year: "2026",
    title: "Deckoid",
    subtitle: "Cinematic Frontend Experience",
    description:
      "Built a high-end immersive frontend experience blending cinematic motion systems, smooth storytelling transitions, and modern interaction design inspired by premium digital studios.",
    image: "/assets/deckoidproject.png",
    live: "https://deckoid.vercel.app/",
    github: "https://github.com/raxitzora/Deckoid",
    metadata:
      "GSAP / Framer Motion / Motion Systems / UI Engineering",
  },

  {
    year: "2026",
    title: "Frontend Platform",
    subtitle: "Modern Web Experience Engineering",
    description:
      "Engineered a scalable frontend architecture focused on responsiveness, accessibility, premium interactions, and seamless user experience across modern devices.",
    image: "/assets/frontend.png",
    live: "https://cosmic-tawny.vercel.app/",
    github: "https://github.com/raxitzora/",
    metadata:
      "React / Next.js / Design Systems / Responsive Architecture",
  },
];

const Work = () => {
  return (
    <section
      id="projects"
      className="relative bg-black text-white overflow-hidden"
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
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 pt-32 pb-20">
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
          Selected Work
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="
          text-[48px]
          sm:text-[90px]
          lg:text-[140px]
          font-[700]
          leading-[0.9]
          tracking-[-6px]
          max-w-6xl
          "
        >
          SHOWCASING
          <br />
          WORKS
        </motion.h2>
      </div>

      {/* Work Sections */}
      <div className="relative z-10">
        {works.map((work, index) => (
          <section
            key={index}
            className="
            min-h-screen
            border-t
            border-white/10
            flex
            items-center
            "
          >
            <div
              className={`
              max-w-7xl
              mx-auto
              w-full
              px-6
              sm:px-10
              grid
              lg:grid-cols-2
              gap-20
              items-center
              ${
                index % 2 !== 0
                  ? "lg:[&>*:first-child]:order-2"
                  : ""
              }
              `}
            >
              {/* Image */}
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.92,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 1,
                }}
                className="
                relative
                overflow-hidden
                rounded-[30px]
                group
                "
              >
                <div className="absolute inset-0 bg-black/20 z-10" />

                <motion.img
                  whileHover={{
                    scale: 1.05,
                  }}
                  transition={{
                    duration: 1,
                  }}
                  src={work.image}
                  alt={work.title}
                  className="
                  w-full
                  h-[500px]
                  sm:h-[650px]
                  object-contain
                  grayscale
                  group-hover:grayscale-0
                  transition-all
                  duration-1000
                  "
                />

                {/* Floating Label */}
                <div
                  className="
                  absolute
                  top-6
                  left-6
                  z-20
                  backdrop-blur-xl
                  bg-black/40
                  border
                  border-white/10
                  px-5
                  py-3
                  rounded-full
                  "
                >
                  <p className="text-xs tracking-[4px] uppercase text-white/80">
                    {work.year}
                  </p>
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
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
                  duration: 1,
                }}
                className="relative"
              >
                {/* Subtitle */}
                <p
                  className="
                  uppercase
                  tracking-[5px]
                  text-sm
                  text-gray-500
                  mb-6
                  "
                >
                  {work.subtitle}
                </p>

                {/* Title */}
                <h3
                  className="
                  text-[42px]
                  sm:text-[70px]
                  leading-[0.95]
                  tracking-[-3px]
                  font-[700]
                  mb-10
                  "
                >
                  {work.title}
                </h3>

                {/* Description */}
                <p
                  className="
                  text-gray-400
                  text-[16px]
                  sm:text-[18px]
                  leading-[2]
                  max-w-xl
                  "
                >
                  {work.description}
                </p>

                {/* Metadata */}
                <div
                  className="
                  mt-12
                  text-sm
                  tracking-[3px]
                  uppercase
                  text-gray-500
                  border-t
                  border-white/10
                  pt-8
                  "
                >
                  {work.metadata}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-5 mt-14">
                  {/* Live */}
                  <motion.a
                    whileHover={{
                      y: -3,
                    }}
                    whileTap={{
                      scale: 0.96,
                    }}
                    href={work.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                    group
                    inline-flex
                    items-center
                    gap-3
                    bg-white
                    text-black
                    px-8
                    py-4
                    rounded-full
                    text-sm
                    uppercase
                    tracking-[3px]
                    hover:bg-neutral-200
                    transition-all
                    duration-300
                    "
                  >
                    Explore Experience

                    <ArrowUpRight
                      size={18}
                      className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                      "
                    />
                  </motion.a>

                  {/* Github */}
                  <motion.a
                    whileHover={{
                      y: -3,
                    }}
                    whileTap={{
                      scale: 0.96,
                    }}
                    href={work.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                    inline-flex
                    items-center
                    gap-3
                    border
                    border-white/10
                    px-8
                    py-4
                    rounded-full
                    text-sm
                    uppercase
                    tracking-[3px]
                    text-gray-300
                    hover:border-white/30
                    hover:text-white
                    transition-all
                    duration-300
                    "
                  >
                    <Github size={18} />
                    Source
                  </motion.a>
                </div>

                {/* Huge Background Number */}
                <div
                  className="
                  absolute
                  -top-24
                  right-0
                  text-[180px]
                  sm:text-[240px]
                  font-black
                  text-white/[0.03]
                  leading-none
                  pointer-events-none
                  select-none
                  "
                >
                  0{index + 1}
                </div>
              </motion.div>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
};

export default Work;