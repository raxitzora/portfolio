import { useState } from "react";

import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";

import {
  AiOutlineRobot,
} from "react-icons/ai";

import {
  SiCyberdefenders,
} from "react-icons/si";

import {
  FaLaptopCode,
} from "react-icons/fa";

import {
  MdCloud,
} from "react-icons/md";

import {
  FiSmartphone,
} from "react-icons/fi";
import { Server } from "lucide-react";

const techStack = [
  {
    icon: <AiOutlineRobot />,
    title: "AI Systems",
  },
  {
    icon: <SiCyberdefenders />,
    title: "Cybersecurity",
  },
  {
    icon: <FaLaptopCode />,
    title: "Frontend",
  },
  {
    icon:<Server />,
    title: "Backend",
  },
  {
    icon: <MdCloud />,
    title: "Cloud",
  },
  {
    icon: <FiSmartphone />,
    title: "Mobile Apps",
  },
];

const Intro = () => {
  const [showResume, setShowResume] = useState(false);

  const { scrollYProgress } = useScroll();

  const heroY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -150]
  );

  const heroOpacity = useTransform(
    scrollYProgress,
    [0, 0.35],
    [1, 0]
  );

  return (
    <>
      <section
        id="home"
        className="
        relative
        min-h-screen
        bg-black
        overflow-hidden
        px-4
        sm:px-6
        lg:px-12
        flex
        items-center
        "
      >
        {/* =========================
            BACKGROUND
        ========================== */}

        {/* Noise */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')]" />

        {/* Grid */}
        <div
          className="
          absolute
          inset-0
          opacity-[0.03]
          [background-image:linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)]
          [background-size:70px_70px]
          "
        />

        {/* Glow */}
        <motion.div
          animate={{
            x: [0, 60, -60, 0],
            y: [0, -30, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
          absolute
          top-1/2
          left-1/2
          w-[700px]
          h-[700px]
          bg-white/5
          blur-[140px]
          rounded-full
          -translate-x-1/2
          -translate-y-1/2
          "
        />

        {/* HUD Lines */}
        <div className="hidden lg:block absolute left-6 top-0 bottom-0 w-px bg-white/10" />
        <div className="hidden lg:block absolute right-6 top-0 bottom-0 w-px bg-white/10" />

        {/* =========================
            MAIN CONTENT
        ========================== */}

        <motion.div
          style={{
            y: heroY,
            opacity: heroOpacity,
          }}
          className="
          relative
          z-20
          w-full
          max-w-7xl
          mx-auto
          "
        >
          {/* Top Meta */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
            flex
            items-center
            justify-between
            mb-10
            "
          >
            <p
              className="
              text-[10px]
              sm:text-xs
              tracking-[5px]
              uppercase
              text-gray-500
              "
            >
              AI • FULL STACK • CYBERSECURITY
            </p>

            <div
              className="
              hidden
              sm:flex
              items-center
              gap-3
              border
              border-[#2a2a2a]
              bg-[#111]
              px-4
              py-2
              "
            >
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

              <p className="text-[10px] uppercase tracking-[4px] text-gray-400">
                Available For Work
              </p>
            </div>
          </motion.div>

          {/* Main Layout */}
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">

            {/* LEFT */}
            <div>

              {/* Heading */}
              <motion.h1
                initial={{
                  opacity: 0,
                  y: 80,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1,
                }}
                className="
                text-[48px]
                sm:text-[72px]
                md:text-[96px]
                lg:text-[120px]
                font-black
                leading-[0.9]
                tracking-[-3px]
                uppercase
                text-white
                "
              >
                RAXIT
                <br />

                <span className="text-gray-400">
                  ZORA
                </span>
              </motion.h1>

              {/* Role */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1,
                  delay: 0.2,
                }}
                className="
                mt-6
                flex
                flex-wrap
                gap-3
                "
              >
                {[
                  "Full Stack Engineer",
                  "AI Engineering",
                  "Cybersecurity",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="
                    border
                    border-[#2a2a2a]
                    bg-[#111]
                    px-4
                    py-2
                    text-xs
                    sm:text-sm
                    tracking-[3px]
                    uppercase
                    text-gray-300
                    "
                  >
                    {item}
                  </div>
                ))}
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1,
                  delay: 0.3,
                }}
                className="
                mt-10
                max-w-2xl
                text-gray-400
                text-sm
                sm:text-lg
                leading-[2]
                tracking-wide
                "
              >
                Building cinematic digital experiences,
                scalable AI systems, secure backend
                architectures, and futuristic web
                applications with modern engineering
                practices and premium user interfaces.
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1,
                  delay: 0.4,
                }}
                className="
                mt-12
                flex
                flex-wrap
                gap-5
                "
              >
                <a
                  href="#projects"
                  className="
                  group
                  relative
                  overflow-hidden
                  border
                  border-white/20
                  px-8
                  py-4
                  text-sm
                  uppercase
                  tracking-[3px]
                  text-white
                  transition-all
                  duration-500
                  "
                >
                  <span className="relative z-20">
                    View Projects
                  </span>

                  <div
                    className="
                    absolute
                    inset-0
                    bg-white
                    translate-y-full
                    group-hover:translate-y-0
                    transition-transform
                    duration-500
                    "
                  />

                  <span className="absolute inset-0 flex items-center justify-center text-black opacity-0 group-hover:opacity-100 z-30 transition duration-500">
                    View Projects
                  </span>
                </a>

                <button
                  onClick={() => setShowResume(true)}
                  className="
                  border
                  border-[#2a2a2a]
                  bg-[#111]
                  px-8
                  py-4
                  text-sm
                  uppercase
                  tracking-[3px]
                  text-gray-300
                  hover:border-white/20
                  hover:text-white
                  transition-all
                  duration-300
                  "
                >
                  Download Resume
                </button>
              </motion.div>
            </div>

            {/* RIGHT */}
            <motion.div
              initial={{
                opacity: 0,
                x: 100,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 1,
              }}
              className="hidden lg:block"
            >
              <div
                className="
                relative
                border
                border-[#2a2a2a]
                bg-[#111111]
                p-8
                overflow-hidden
                "
              >
                {/* Top Line */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                {/* Cards */}
                <div className="grid grid-cols-2 gap-4">

                  {techStack.map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{
                        y: -6,
                      }}
                      className="
                      group
                      border
                      border-[#222]
                      bg-black
                      p-6
                      transition-all
                      duration-500
                      hover:border-white/20
                      "
                    >
                      <div className="text-3xl text-white mb-4">
                        {item.icon}
                      </div>

                      <p className="text-xs uppercase tracking-[3px] text-gray-400">
                        {item.title}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Status */}
                <div className="mt-10">

                  <div className="flex justify-between mb-4">
                    <p className="text-[10px] uppercase tracking-[4px] text-gray-500">
                      System Status
                    </p>

                    <p className="text-[10px] uppercase tracking-[4px] text-gray-500">
                      99%
                    </p>
                  </div>

                  <div className="w-full h-[4px] bg-[#222] overflow-hidden">
                    <motion.div
                      initial={{
                        width: 0,
                      }}
                      animate={{
                        width: "99%",
                      }}
                      transition={{
                        duration: 2,
                      }}
                      className="h-full bg-gradient-to-r from-white to-gray-500"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* =========================
          RESUME MODAL
      ========================== */}

      <AnimatePresence>
        {showResume && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="
            fixed
            inset-0
            bg-black/95
            z-[999999]
            flex
            items-center
            justify-center
            p-4
            "
          >
            <motion.div
              initial={{
                scale: 0.9,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.9,
                opacity: 0,
              }}
              className="
              relative
              w-full
              max-w-6xl
              h-[90vh]
              border
              border-[#2a2a2a]
              bg-[#111]
              overflow-hidden
              "
            >
              <iframe
                src="/assets/Resume_Raxitzora.pdf"
                title="Resume"
                className="w-full h-full"
              />

              <button
                onClick={() => setShowResume(false)}
                className="
                absolute
                top-5
                right-5
                border
                border-white/20
                bg-black/80
                px-5
                py-3
                text-xs
                uppercase
                tracking-[3px]
                text-white
                hover:bg-white
                hover:text-black
                transition-all
                duration-300
                "
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Intro;