import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const About = () => {
  return (
    <div
      className="text-center text-white mt-20 px-6"
      id="about"
    >
      {/* Title */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold animate-fadeInUp">
        <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
          About Me
        </span>
      </h1>

      {/* Description */}
      <p className="text-lg md:text-2xl font-light mt-6 leading-relaxed animate-fadeIn delay-200">
        I am a <span className="font-semibold text-cyan-400">FullStack AI Engineer</span> proficient in Python and JavaScript. <br />
        I specialize in AI development and building modern, responsive websites. <br />
        I'm also deeply passionate about <span className="text-red-400 font-semibold">CyberSecurity</span>.
      </p>

      {/* Social Connect Box */}
      <div className="border border-gray-600 backdrop-blur-md bg-white/5 rounded-3xl w-full md:w-2/3 lg:w-1/2 mx-auto mt-12 py-8 px-4 animate-fadeInUp delay-500 shadow-lg shadow-cyan-500/20">
        <h2 className="font-bold text-2xl md:text-3xl text-white">Let’s Connect</h2>

        <div className="flex justify-center gap-10 mt-6">
          <a
            href="https://www.linkedin.com/in/raxit-zora-2a684129b"
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-110 transition duration-300"
          >
            <FaLinkedin size={45} className="text-blue-400 hover:text-blue-600" />
          </a>
          <a
            href="https://github.com/raxitzora"
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-110 transition duration-300"
          >
            <FaGithub size={45} className="text-gray-300 hover:text-white" />
          </a>
          <a
            href="https://instagram.com/raxit.zora"
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-110 transition duration-300"
          >
            <FaInstagram size={45} className="text-pink-400 hover:text-pink-600" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
