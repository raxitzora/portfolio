import { motion } from "framer-motion";

const skills = [
  {
    title: "AI Systems",
    value: 96,
    desc: "Prompt engineering & intelligent workflows.",
  },
  {
    title: "React + Next.js",
    value: 92,
    desc: "High-performance frontend architectures.",
  },
  {
    title: "Backend Engineering",
    value: 88,
    desc: "Scalable APIs & secure infrastructures.",
  },
  {
    title: "Cybersecurity",
    value: 84,
    desc: "Secure systems & ethical hacking.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-black overflow-hidden text-white flex items-center justify-center px-4 sm:px-6 lg:px-10 py-24"
    >
      {/* Background Grain */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')]" />

      {/* Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-white/5 blur-[140px] rounded-full -translate-x-1/2 -translate-y-1/2" />

      {/* LEFT TITLE */}
      <div className="absolute top-6 left-4 sm:top-10 sm:left-10 z-20">
        <h1
          className="text-[28px] sm:text-[45px] lg:text-[70px] leading-[0.9] uppercase text-white"
          style={{
            fontFamily: "'Press Start 2P', monospace",
          }}
        >
          THE
          <br />
          DEVELOPER.
        </h1>
      </div>

      {/* RIGHT TERMINAL TEXT */}
      <div className="absolute top-8 right-4 sm:top-24 sm:right-16">
        <p
          className="text-gray-500 text-sm tracking-[3px]"
          style={{
            fontFamily: "'VT323', monospace",
          }}
        >
          "Protagonist loaded."
        </p>
      </div>

      {/* MAIN WRAPPER */}
      <div className="relative flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl gap-10 lg:gap-0 mt-28 sm:mt-36">

        {/* LEFT CARD */}
        <motion.div
          initial={{ opacity: 0, x: -120, rotate: -8 }}
          whileInView={{ opacity: 1, x: 0, rotate: -4 }}
          transition={{ duration: 1 }}
          whileHover={{
            y: -15,
            rotate: -6,
            scale: 1.02,
          }}
          className="
          group
          relative lg:absolute
          lg:left-[6%]
          lg:top-20
          w-full
          max-w-[320px]
          sm:max-w-[380px]
          lg:max-w-[420px]
          min-h-[380px]
          sm:min-h-[520px]
          bg-[#ebebeb]
          text-black
          px-7
          sm:px-10
          lg:px-14
          py-10
          sm:py-14
          shadow-[0_20px_80px_rgba(255,255,255,0.08)]
          rotate-[-2deg]
          lg:rotate-[-4deg]
          transition-all
          duration-500
          "
        >
          <div className="absolute top-5 left-5 text-4xl opacity-70">
            ❝
          </div>

          <div className="mt-14 sm:mt-20">
            <p
              className="
              text-[15px]
              sm:text-[18px]
              lg:text-[20px]
              leading-[1.9]
              tracking-wide
              text-center
              font-medium
              text-[#111]
              "
            >
              I create cinematic digital experiences with elite engineering,
              futuristic interfaces, and high-performance scalable systems.
            </p>

          </div>
        </motion.div>

        {/* CENTER CARD */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          whileHover={{
            rotateY: 6,
            rotateX: -6,
            y: -10,
          }}
          className="
          group
          relative
          z-30
          w-full
          max-w-[350px]
          sm:max-w-[430px]
          bg-[#161616]
          border
          border-[#3a3a3a]
          shadow-[0_20px_100px_rgba(0,0,0,0.8)]
          transition-all
          duration-500
          hover:border-white/20
          "
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {/* HEADER */}
          <div
            className="
            flex
            justify-between
            items-center
            px-4
            sm:px-5
            py-4
            border-b
            border-[#2e2e2e]
            "
          >
            <div>
              <p className="text-[10px] tracking-[4px] uppercase text-gray-500">
                Stage 3
              </p>

              <h2
                className="
                text-[22px]
                sm:text-[26px]
                font-semibold
                mt-1
                tracking-wide
                text-white
                "
              >
                Raxit Zora
              </h2>
            </div>

            <p className="text-gray-400 text-sm tracking-wide">
              Age 21
            </p>
          </div>

          {/* IMAGE */}
          <div className="relative overflow-hidden">
            <img
              src="/assets/raxit9.jpg"
              alt="Raxit"
              className="
              w-full
              h-[300px]
              sm:h-[420px]
              lg:h-[520px]
              object-cover
              grayscale
              contrast-125
              brightness-90
              transition-all
              duration-700
              group-hover:scale-105
              group-hover:brightness-100
              "
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

            {/* HUD Overlay */}
            <div className="absolute top-4 left-4 border border-white/20 px-3 py-1 backdrop-blur-sm">
              <p className="text-[10px] tracking-[3px] text-white/80 uppercase">
                Active
              </p>
            </div>
          </div>

          {/* ROLE */}
          <div className="border-t border-b border-[#2e2e2e] py-4 text-center">
            <p
              className="
              tracking-[3px]
              sm:tracking-[5px]
              text-[10px]
              sm:text-[13px]
              uppercase
              text-gray-200
              font-light
              "
              style={{
                fontFamily: "'VT323', monospace",
              }}
            >
              FULL STACK ENGINEER / AI ENGINEER
            </p>
          </div>

          {/* SKILLS */}
          <div
            className="
            p-5
            sm:p-7
            space-y-6
            sm:space-y-7
            "
          >
            {skills.map((skill) => (
              <div key={skill.title}>
                <div className="flex justify-between items-center mb-3">
                  <h3
                    className="
                    text-[11px]
                    sm:text-[13px]
                    uppercase
                    tracking-[3px]
                    text-white
                    font-medium
                    "
                  >
                    {skill.title}
                  </h3>

                  <span className="text-sm text-gray-400">
                    {skill.value}
                  </span>
                </div>

                <div
                  className="
                  w-full
                  h-[4px]
                  bg-[#2b2b2b]
                  overflow-hidden
                  "
                >
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.value}%` }}
                    transition={{ duration: 1.2 }}
                    className="
                    h-full
                    bg-gradient-to-r
                    from-white
                    to-gray-400
                    "
                  />
                </div>

                <p
                  className="
                  text-[11px]
                  sm:text-xs
                  text-gray-400
                  mt-3
                  leading-[1.8]
                  tracking-wide
                  "
                >
                  {skill.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT CARD */}
        <motion.div
          initial={{ opacity: 0, x: 120, rotate: 8 }}
          whileInView={{ opacity: 1, x: 0, rotate: 4 }}
          transition={{ duration: 1 }}
          whileHover={{
            y: -15,
            rotate: 6,
            scale: 1.02,
          }}
          className="
          group
          relative lg:absolute
          lg:right-[6%]
          lg:top-20
          w-full
          max-w-[320px]
          sm:max-w-[380px]
          lg:max-w-[420px]
          min-h-[380px]
          sm:min-h-[520px]
          bg-[#ebebeb]
          text-black
          px-7
          sm:px-10
          lg:px-14
          py-10
          sm:py-14
          shadow-[0_20px_80px_rgba(255,255,255,0.08)]
          rotate-[2deg]
          lg:rotate-[4deg]
          transition-all
          duration-500
          "
        >
          <div className="absolute top-5 right-5 text-4xl opacity-70">
            ❞
          </div>

          <div className="mt-14 sm:mt-20">
            <p
              className="
              text-[15px]
              sm:text-[18px]
              lg:text-[20px]
              leading-[1.9]
              tracking-wide
              text-center
              font-medium
              text-[#111]
              "
            >
              One of the most creative AI engineers and frontend developers with
              a powerful eye for futuristic product experiences.
            </p>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;