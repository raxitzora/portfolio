import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ["Home", "About", "Skills", "Experience", "Projects"];

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="h-20 w-full flex items-center justify-between px-6 lg:px-16 text-white sticky top-0 z-50 shadow-lg bg-black">
      {/* Logo */}
      <a href="#home" className="flex items-center">
        <img
          src="/assets/logo.jpg"
          alt="Logo"
          className="h-12 w-auto object-contain"
        />
      </a>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 text-lg font-bold bg-gray-900 border border-gray-600 rounded-full px-10 py-4">
        {navItems.map((item) => (
          <ScrollLink
            key={item}
            to={item.toLowerCase()}
            smooth={true}
            duration={500}
            offset={-80} // ✅ ensures correct scroll position
            className="cursor-pointer hover:text-yellow-400 transition-all text-xl relative group"
          >
            {item}
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-400 group-hover:w-full transition-all duration-300 ease-in-out"></span>
          </ScrollLink>
        ))}
      </div>

      {/* Contact Button (Desktop only) */}
      <a href="mailto:imraxitzora@gmail.com" className="hidden md:flex">
        <button className="flex items-center gap-3 bg-white text-black px-6 py-3 text-lg rounded-full shadow-lg hover:bg-yellow-400 hover:text-white transition-all duration-300">
          Contact Me
          <img
            src="/assets/contact.png"
            alt="Contact"
            className="h-5 w-5 object-contain"
          />
        </button>
      </a>

      {/* Mobile Menu Toggle */}
      <button
        id="menu-toggle"
        className="md:hidden z-[60]"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        {menuOpen ? (
          <X className="text-white h-8 w-8" />
        ) : (
          <Menu className="text-white h-8 w-8" />
        )}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-95 flex flex-col items-center justify-center space-y-8 z-50 md:hidden mobile-menu">
          {navItems.map((item) => (
            <ScrollLink
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer text-2xl hover:text-yellow-400 transition-all"
              onClick={handleLinkClick}
            >
              {item}
            </ScrollLink>
          ))}
          <a
            href="mailto:imraxitzora@gmail.com"
            className="text-2xl hover:text-yellow-400 transition-all"
            onClick={handleLinkClick}
          >
            Contact Me
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
