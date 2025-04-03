import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react'; // Icons for mobile menu toggle
import logo from '../../assets/logo.jpg';
import contact from '../../assets/contact.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='h-20 w-full flex items-center justify-between px-6 lg:px-10 text-white sticky top-0 z-50 shadow-md bg-black'>
      
      {/* Logo */}
      <Link to='intro' smooth={true} duration={500}>
        <img src={logo} alt="logo" className='h-12 w-auto object-contain' />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-6 text-lg font-medium bg-gray-900 border-2 border-gray-600 rounded-3xl w-[450px] justify-center h-[50px] items-center">
        <Link to="intro" smooth={true} duration={500} className='cursor-pointer hover:text-yellow-400 transition-all text-xl'>
          Home
        </Link>
        <Link to="about" smooth={true} duration={500} className='cursor-pointer hover:text-yellow-400 transition-all text-xl'>
          About
        </Link>
        <Link to="skills" smooth={true} duration={500} className='cursor-pointer hover:text-yellow-400 transition-all text-xl'>
          Skills
        </Link>
        <Link to="projects" smooth={true} duration={500} className='cursor-pointer hover:text-yellow-400 transition-all text-xl'>
          Projects
        </Link>
      </div>

      {/* Contact Button */}
      <a href="mailto:imraxitzora@gmail.com" className="hidden md:flex">
        <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full shadow-md hover:bg-yellow-400 hover:text-white transition-all duration-300">
          Contact Me
          <img src={contact} alt="contact" className='h-5 w-5 object-contain' />
        </button>
      </a>

      {/* Mobile Menu Toggle Button */}
      <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X className="text-white h-8 w-8" /> : <Menu className="text-white h-8 w-8" />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-black text-white flex flex-col items-center py-4 space-y-4 md:hidden">
          <Link to="intro" smooth={true} duration={500} className='cursor-pointer text-xl' onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="about" smooth={true} duration={500} className='cursor-pointer text-xl' onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link to="skills" smooth={true} duration={500} className='cursor-pointer text-xl' onClick={() => setMenuOpen(false)}>
            Skills
          </Link>
          <Link to="projects" smooth={true} duration={500} className='cursor-pointer text-xl' onClick={() => setMenuOpen(false)}>
            Projects
          </Link>
          <a href="mailto:imraxitzora@gmail.com" className="text-xl">
            Contact Me
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
