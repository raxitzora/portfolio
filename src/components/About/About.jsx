import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="text-center text-white mt-20 px-4 sm:px-6 lg:px-12"
    >
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold animate-fadeInUp">
        <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
          About Me
        </span>
      </h2>

      {/* Paragraph */}
      <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl lg:text-2xl font-light mt-6 leading-relaxed animate-fadeIn delay-200 px-2">
        I'm{" "}
        <span className="font-semibold text-cyan-400">Raxit Zora</span>, a{" "}
        <strong className="text-red-500">Full Stack AI Engineer</strong>{" "}
        proficient in Python, JavaScript, and modern frameworks like React,
        Next.js, and Node.js. <br className="hidden sm:block" />
        I specialize in developing AI-powered web applications and secure
        systems with a focus on{" "}
        <span className="text-red-400 font-semibold">Cybersecurity</span> and
        ethical hacking. <br className="hidden sm:block" />
        My passion lies in building fast, accessible, and intelligent user
        experiences.
      </p>

      {/* Social Media Section */}
      <div
        className="border border-gray-600 backdrop-blur-md bg-white/5 rounded-3xl w-full max-w-xl sm:max-w-2xl mx-auto mt-12 py-8 px-6 animate-fadeInUp delay-500 shadow-lg shadow-cyan-500/20"
        aria-label="Social links section"
      >
        <h3 className="font-bold text-xl sm:text-2xl md:text-3xl text-white">
          Let’s Connect
        </h3>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mt-6">
          <a
            href="https://www.linkedin.com/in/raxit-zora-2a684129b"
            target="_blank"
            rel="noopener noreferrer"
            title="Connect with me on LinkedIn"
            aria-label="LinkedIn"
            className="transform hover:scale-110 transition duration-300"
          >
            <FaLinkedin size={40} className="sm:size-45 text-blue-400 hover:text-blue-600" />
          </a>

          <a
            href="https://github.com/raxitzora"
            target="_blank"
            rel="noopener noreferrer"
            title="Check out my GitHub"
            aria-label="GitHub"
            className="transform hover:scale-110 transition duration-300"
          >
            <FaGithub size={40} className="sm:size-45 text-gray-300 hover:text-white" />
          </a>

          <a
            href="https://instagram.com/raxit.zora"
            target="_blank"
            rel="noopener noreferrer"
            title="Follow me on Instagram"
            aria-label="Instagram"
            className="transform hover:scale-110 transition duration-300"
          >
            <FaInstagram size={40} className="sm:size-45 text-pink-400 hover:text-pink-600" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
