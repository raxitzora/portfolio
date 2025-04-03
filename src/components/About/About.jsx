import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const About = () => {
  return (
    <div className="text-center text-white mt-25" id='about'>
      <h1 className='text-6xl font-bold'>About Me</h1>
      <p className='text-2xl font-extralight mt-12'>
        I am a FullStack AI Engineer proficient in Python programming and JavaScript. <br />
        I have a strong understanding of AI development and website development <br />
        and am passionate about CyberSecurity.
      </p>
      
      {/* Social Media Links */}
      <div className='border-2 border-gray-300 solid w-70 rounded-3xl justify-center ml-[720px] mt-15'>
        <h1 className='font-extrabold text-2xl'>Let's connect here</h1>
      <div className="flex justify-center space-x-6 mt-8">
        <a href="https://www.linkedin.com/in/www.linkedin.com/in/raxit-zora-2a684129b
" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={60} className="hover:text-blue-500 transition duration-300" />
        </a>
        <a href="https://github.com/raxitzora" target="_blank" rel="noopener noreferrer">
          <FaGithub size={60} className="hover:text-gray-400 transition duration-300" />
        </a>
        <a href="https://instagram.com/raxit.zora" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={60} className="hover:text-pink-500 transition duration-300" />
        </a>
      </div>
      </div>
    </div>
  );
}; 

export default About;
