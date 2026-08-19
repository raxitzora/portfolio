import { motion } from "framer-motion";

const skills = [
  {
    title: "AI Systems",
    value: 96,
    desc: "Prompt engineering & intelligent workflows.",
    color: "from-cyan-400 to-blue-500",
  },

  {
    title: "React + Next.js",
    value: 92,
    desc: "High-performance frontend architectures.",
    color: "from-sky-400 to-cyan-500",
  },

  {
    title: "Backend Engineering",
    value: 88,
    desc: "Scalable APIs & secure infrastructures.",
    color: "from-emerald-400 to-green-500",
  },

  {
    title: "Cybersecurity",
    value: 84,
    desc: "Secure systems & ethical hacking.",
    color: "from-violet-400 to-purple-500",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="
      relative
      bg-black
      text-white
      overflow-hidden
      py-32
      px-6
      sm:px-10
      "
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
      <div className="relative z-20 max-w-7xl mx-auto mb-24">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="
          uppercase
          tracking-[6px]
          text-sm
          text-gray-500
          mb-6
          "
        >
          About Me
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
          ABOUT MY
          <br />
          ENGINEERING
        </motion.h2>
      </div>

      {/* Main Layout */}
      <div
        className="
        relative
        z-10
        max-w-7xl
        mx-auto
        grid
        lg:grid-cols-[1fr_520px]
        gap-20
        items-center
        "
      >
        {/* LEFT CONTENT */}
        <motion.div
          initial={{
            opacity: 0,
            y: 80,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
        >
          {/* Small Intro */}
          <p
            className="
            uppercase
            tracking-[4px]
            text-sm
            text-gray-500
            mb-8
            "
          >
            Full Stack Engineer / AI Engineer
          </p>

          {/* Main Text */}
          <h3
            className="
            text-[34px]
            sm:text-[54px]
            leading-[1.1]
            tracking-[-3px]
            font-[700]
            max-w-4xl
            "
          >
            Building cinematic digital experiences with modern engineering,
            scalable systems and intelligent AI-driven workflows.
          </h3>

          {/* Description */}
          <p
            className="
            mt-10
            text-gray-400
            text-[17px]
            sm:text-[19px]
            leading-[2]
            max-w-3xl
            "
          >
            I focus on creating immersive frontend experiences, scalable backend
            systems and intelligent AI applications that blend engineering with
            modern design. My work combines performance, interaction and clean
            architecture to deliver premium digital products.
          </p>

          {/* Skills */}
          <div className="mt-16 space-y-10">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                }}
              >
                {/* Top */}
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h4
                      className="
                      text-[18px]
                      sm:text-[22px]
                      font-semibold
                      tracking-[-1px]
                      "
                    >
                      {skill.title}
                    </h4>

                    <p
                      className="
                      mt-2
                      text-sm
                      text-gray-500
                      tracking-wide
                      "
                    >
                      {skill.desc}
                    </p>
                  </div>

                  <span
                    className="
                    text-lg
                    font-medium
                    text-white
                    "
                  >
                    {skill.value}%
                  </span>
                </div>

                {/* Progress */}
                <div
                  className="
                  w-full
                  h-[6px]
                  rounded-full
                  bg-white/10
                  overflow-hidden
                  "
                >
                  <motion.div
                    initial={{
                      width: 0,
                    }}
                    whileInView={{
                      width: `${skill.value}%`,
                    }}
                    transition={{
                      duration: 1.2,
                    }}
                    className={`
                    h-full
                    rounded-full
                    bg-gradient-to-r
                    ${skill.color}
                    `}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.92,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="
          relative
          group
          "
        >
          {/* Glow */}
          <div
            className="
            absolute
            -inset-6
            bg-gradient-to-br
            from-cyan-500/20
            via-violet-500/10
            to-transparent
            blur-3xl
            opacity-70
            "
          />

          {/* Image Wrapper */}
          <div
            className="
            relative
            overflow-hidden
            rounded-[32px]
            border
            border-white/10
            bg-white/[0.03]
            backdrop-blur-xl
            "
          >
            <img
              src="/assets/logo.jpg"
              alt="Raxit"
              className="
              w-full
              h-[600px]
              sm:h-[720px]
              object-cover
              grayscale
              contrast-125
              brightness-90
              transition-all
              duration-1000
              group-hover:scale-105
              group-hover:grayscale-0
              group-hover:brightness-100
              "
            />

            {/* Overlay */}
            <div
              className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/70
              via-transparent
              to-transparent
              "
            />

            {/* Bottom Content */}
            <div
              className="
              absolute
              bottom-0
              left-0
              w-full
              p-8
              sm:p-10
              "
            >
              <p
                className="
                uppercase
                tracking-[4px]
                text-sm
                text-gray-400
                mb-4
                "
              >
                Raxit Zora
              </p>

              <h4
                className="
                text-[28px]
                sm:text-[40px]
                leading-none
                tracking-[-2px]
                font-[700]
                "
              >
                Full Stack
                <br />
                & AI Engineer
              </h4>
            </div>

            {/* Floating Badge */}
            <div
              className="
              absolute
              top-6
              left-6
              px-5
              py-3
              rounded-full
              border
              border-white/10
              bg-black/40
              backdrop-blur-xl
              "
            >
              <p
                className="
                text-[11px]
                uppercase
                tracking-[4px]
                text-cyan-400
                "
              >
                Available for Work
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;