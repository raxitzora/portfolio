import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const About = () => {
  return (
    <div className="text-center text-white mt-10 px-6" id="about">
      {/* About Title */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">About Me</h1>

      {/* About Description */}
      <p className="text-lg md:text-2xl font-extralight mt-6 leading-relaxed">
        I am a FullStack AI Engineer proficient in Python programming and JavaScript. <br />
        I have a strong understanding of AI development and website development <br />
        and am passionate about CyberSecurity.
      </p>

      {/* Social Media Links Section */}
      <div className="border-2 border-gray-300 rounded-3xl w-full md:w-2/3 lg:w-1/2 mx-auto mt-10 py-6">
        <h1 className="font-extrabold text-xl md:text-2xl">Let's connect here</h1>
        
        <div className="flex justify-center space-x-6 mt-6">
          <a href="https://www.linkedin.com/in/raxit-zora-2a684129b" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={50} className="hover:text-blue-500 transition duration-300" />
          </a>
          <a href="https://github.com/raxitzora" target="_blank" rel="noopener noreferrer">
            <FaGithub size={50} className="hover:text-gray-400 transition duration-300" />
          </a>
          <a href="https://instagram.com/raxit.zora" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={50} className="hover:text-pink-500 transition duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
