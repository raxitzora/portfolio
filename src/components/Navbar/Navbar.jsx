import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (menuOpen && !e.target.closest('.mobile-menu') && !e.target.closest('#menu-toggle')) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [menuOpen]);

  const handleLinkClick = () => setMenuOpen(false);

  const navItems = ["Home", "About", "Skills","Experience" ,"Projects"];

  return (
    <nav className="h-28 w-full flex items-center justify-between px-8 lg:px-16 text-white sticky top-0 z-50 shadow-lg bg-black">
      
      {/* Logo */}
      <Link to="intro" smooth={true} duration={500} className="cursor-pointer">
        <img src="/assets/logo.jpg" alt="Logo" className="h-16 w-auto object-contain" />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 text-lg font-bold bg-gray-900 border-4 border-gray-500 rounded-full px-12 py-5">
        {navItems.map((item) => (
          <Link
            key={item}
            to={item.toLowerCase()}
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-yellow-400 transition-all text-xl relative group"
          >
            {item}
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-400 group-hover:w-full transition-all duration-300 ease-in-out"></span>
          </Link>
        ))}
      </div>

      {/* Contact Button */}
      <a href="mailto:imraxitzora@gmail.com" className="hidden md:flex">
        <button className="flex items-center gap-3 bg-white text-black px-6 py-3 text-lg rounded-full shadow-lg hover:bg-yellow-400 hover:text-white transition-all duration-300">
          Contact Me
          <img src="/assets/contact.png" alt="Contact" className="h-5 w-5 object-contain" />
        </button>
      </a>

      {/* Mobile Menu Toggle */}
      <button id="menu-toggle" className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? (
          <X className="text-white h-8 w-8" />
        ) : (
          <Menu className="text-white h-8 w-8" />
        )}
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed top-20 left-0 w-full bg-black text-white transition-all duration-300 transform ${
          menuOpen ? 'translate-y-0' : '-translate-y-full'
        } md:hidden z-50 mobile-menu`}
      >
        <div className="flex flex-col items-center py-6 space-y-6">
          {navItems.map((item) => (
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
