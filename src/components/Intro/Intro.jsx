import { useState } from "react";

import {
  motion,
  AnimatePresence,
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
    icon: <Server />,
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
  const [showResume, setShowResume] =
    useState(false);

  return (
    <>
      <section
        id="home"
        className="
        relative
        min-h-[100svh]
        pt-20
        bg-black
        overflow-hidden
        px-4
        sm:px-6
        lg:px-12
        flex
        items-center
        "
      >
        {/* BACKGROUND */}

        {/* Noise */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')]" />

        {/* Grid */}
        <div
          className="
          absolute
          inset-0
          opacity-[0.02]
          [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
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

        {/* VIGNETTE */}
        <div
          className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_0%,black_90%)]
          "
        />

        {/* SIDE LINES */}
        <div className="hidden lg:block absolute left-6 top-0 bottom-0 w-px bg-white/10" />

        <div className="hidden lg:block absolute right-6 top-0 bottom-0 w-px bg-white/10" />

        {/* CONTENT */}
        <div
          className="
          relative
          z-20
          w-full
          max-w-7xl
          mx-auto
          "
        >
          {/* TOP BAR */}
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
              delay: 0.2,
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
              uppercase
              tracking-[5px]
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

              <p
                className="
                text-[10px]
                uppercase
                tracking-[4px]
                text-gray-400
                "
              >
                Available For Work
              </p>
            </div>
          </motion.div>

          {/* MAIN GRID */}
          <div
            className="
            grid
            lg:grid-cols-[1.2fr_0.8fr]
            gap-16
            items-center
            "
          >
            {/* LEFT */}
            <motion.div
              initial={{
                opacity: 0,
                y: 80,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {/* TITLE */}
              <h1
                className="
                text-[52px]
                sm:text-[80px]
                md:text-[110px]
                lg:text-[140px]
                font-black
                uppercase
                leading-[0.9]
                tracking-[-4px]
                sm:tracking-[-6px]
                text-white
                "
              >
                RAXIT

                <br />

                <span className="text-gray-500">
                  ZORA
                </span>
              </h1>

              {/* ROLE TAGS */}
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
                  duration: 1,
                  delay: 0.2,
                }}
                className="
                mt-8
                flex
                flex-wrap
                gap-3
                "
              >
                {[
                  "Full Stack Engineer",
                  "AI Engineer",
                  "Cyber Security",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="
                    border
                    border-[#222]
                    bg-[#111]
                    px-4
                    py-2
                    text-[10px]
                    sm:text-xs
                    uppercase
                    tracking-[3px]
                    text-gray-300
                    "
                  >
                    {item}
                  </div>
                ))}
              </motion.div>

              {/* DESCRIPTION */}
              <motion.p
                initial={{
                  opacity: 0,
                  y: 20,
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
                "
              >
                Building cinematic digital
                experiences, AI systems,
                scalable full-stack platforms,
                and secure architectures with
                modern engineering practices and
                premium user experiences.
              </motion.p>

              {/* BUTTONS */}
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
                {/* PROJECTS */}
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
                  text-xs
                  sm:text-sm
                  uppercase
                  tracking-[3px]
                  text-white
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

                  <span
                    className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                    text-black
                    opacity-0
                    group-hover:opacity-100
                    transition
                    duration-500
                    z-30
                    "
                  >
                    View Projects
                  </span>
                </a>

                {/* RESUME */}
               {/* RESUME */}
<a
  href="/assets/Resume_Raxitzora.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="
  group
  relative
  overflow-hidden
  border
  border-[#222]
  bg-[#111]
  px-8
  py-4
  text-xs
  sm:text-sm
  uppercase
  tracking-[3px]
  text-gray-300
  transition-all
  duration-500
  hover:border-white
  hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]
  "
>
  <span className="relative z-20 transition-colors duration-500 group-hover:text-black">
    Resume
  </span>

  <div
    className="
    absolute
    inset-0
    bg-white
    -translate-x-full
    group-hover:translate-x-0
    transition-transform
    duration-500
    ease-out
    "
  />

  <span
    className="
    absolute
    inset-0
    flex
    items-center
    justify-center
    text-black
    opacity-0
    group-hover:opacity-100
    transition-all
    duration-500
    z-30
    "
  >
    Resume
  </span>
</a>
              </motion.div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{
                opacity: 0,
                x: 80,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 1.2,
                delay: 0.2,
              }}
              className="hidden lg:block"
            >
              <div
                className="
                relative
                border
                border-[#222]
                bg-[#111]
                p-8
                overflow-hidden
                "
              >
                {/* TOP LIGHT */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                {/* TECH GRID */}
                <div className="grid grid-cols-2 gap-4">
                  {techStack.map(
                    (item, index) => (
                      <motion.div
                        key={index}
                        whileHover={{
                          y: -6,
                        }}
                        className="
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

                        <p
                          className="
                          text-xs
                          uppercase
                          tracking-[3px]
                          text-gray-400
                          "
                        >
                          {item.title}
                        </p>
                      </motion.div>
                    )
                  )}
                </div>

                {/* STATUS */}
                <div className="mt-10">
                  <div className="flex justify-between mb-4">
                    <p
                      className="
                      text-[10px]
                      uppercase
                      tracking-[4px]
                      text-gray-500
                      "
                    >
                      System Status
                    </p>

                    <p
                      className="
                      text-[10px]
                      uppercase
                      tracking-[4px]
                      text-gray-500
                      "
                    >
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
                      className="
                      h-full
                      bg-gradient-to-r
                      from-white
                      to-gray-500
                      "
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

  
    </>
  );
};

export default Intro;