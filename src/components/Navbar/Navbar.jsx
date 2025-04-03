import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react'; // Icons for mobile menu toggle
import logo from '../../assets/logo.jpg';
import contact from '../../assets/contact.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (menuOpen && !e.target.closest('.mobile-menu')) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [menuOpen]);

  // Close mobile menu when a link is clicked
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="h-20 w-full flex items-center justify-between px-6 lg:px-10 text-white sticky top-0 z-50 shadow-md bg-black">
      
      {/* Logo */}
      <Link to="intro" smooth={true} duration={500}>
        <img src={logo} alt="logo" className="h-12 w-auto object-contain" />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-6 text-lg font-medium bg-gray-900 border-2 border-gray-600 rounded-3xl px-6 py-2">
        {["Home", "About", "Skills", "Projects"].map((item) => (
          <Link 
            key={item}
            to={item.toLowerCase()}
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-yellow-400 transition-all text-xl relative group"
          >
            {item}
            {/* Hover Border Effect */}
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-400 group-hover:w-full transition-all duration-300 ease-in-out"></span>
          </Link>
        ))}
      </div>

      {/* Contact Button */}
      <a href="mailto:imraxitzora@gmail.com" className="hidden md:flex">
        <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full shadow-md hover:bg-yellow-400 hover:text-white transition-all duration-300">
          Contact Me
          <img src={contact} alt="contact" className="h-5 w-5 object-contain" />
        </button>
      </a>

      {/* Mobile Menu Toggle Button */}
      <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X className="text-white h-8 w-8" /> : <Menu className="text-white h-8 w-8" />}
      </button>

      {/* Mobile Menu */}
      <div 
        className={`fixed top-20 left-0 w-full bg-black text-white transition-transform transform ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        } md:hidden mobile-menu z-50`}
      >
        <div className="flex flex-col items-center py-6 space-y-6">
          {["Home", "About", "Skills", "Projects"].map((item) => (
            <Link 
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              className="cursor-pointer text-xl py-2"
              onClick={handleLinkClick}
            >
              {item}
            </Link>
          ))}
          <a href="mailto:imraxitzora@gmail.com" className="text-xl py-2" onClick={handleLinkClick}>
            Contact Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
