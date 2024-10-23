// src/components/Navbar.jsx
import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-5 md:p-10 bg-gray-900 text-white">
      {/* Logo on the left */}
      <div className="text-lg font-bold">
        <img src="/src/assets/RaxitZoraLogo.jpg" alt="Profile Logo" className="h-14 md:h-20" />
      </div>
      
      {/* Social media links on the right */}
      <div className="flex space-x-4">
        <a href='https://www.linkedin.com/in/raxit-zora-2a684129b/?originalSubdomain=in' target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="h-6 w-6 hover:text-blue-500 transition" />
        </a>
        <a href="https://github.com/raxitzora/" target="_blank" rel="noopener noreferrer">
          <FaGithub className="h-6 w-6 hover:text-gray-500 transition" />
        </a>
        <a href="https://www.instagram.com/raxit.zora?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="h-6 w-6 hover:text-pink-500 transition" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
