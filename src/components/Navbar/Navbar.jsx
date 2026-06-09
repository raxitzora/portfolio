import React from "react";
import PillNav from "../UI/PillNav";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Navbar = () => {
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
  ];

  return (
    <header
      className="
        fixed
        top-0
        left-0
        w-full
        z-[1000]
        bg-black/80
        backdrop-blur-xl
        border-b
        border-white/10
      "
    >
      <div
        className="
          h-16
          md:h-20
          px-3
          sm:px-5
          lg:px-12
          flex
          items-center
          justify-between
          gap-4
        "
      >
        {/* NAVIGATION */}
        <div className="flex-1 min-w-0">
          <PillNav
            logo="/assets/logo.jpg"
            logoAlt="Raxit Logo"
            items={navItems}
            activeHref="#home"
            baseColor="#050505"
            pillColor="#111111"
            hoveredPillTextColor="#00ffff"
            pillTextColor="#ffffff"
            initialLoadAnimation={true}
          />
        </div>

        {/* SOCIAL LINKS */}
        <div
          className="
            hidden
            md:flex
            items-center
            gap-2
            shrink-0
            relative
            z-[9999]
          "
        >
          <a
            href="https://github.com/raxitzora"
            target="_blank"
            rel="noopener noreferrer"
            className="
              w-10
              h-10
              flex
              items-center
              justify-center
              rounded-full
              bg-[#111111]
              border
              border-white/10
              text-white
              transition-all
              duration-300
              hover:text-cyan-400
              hover:border-cyan-400/50
              hover:shadow-[0_0_20px_rgba(34,211,238,0.35)]
              hover:scale-110
            "
          >
            <FaGithub size={18} />
          </a>

          <a
            href="https://www.linkedin.com/in/raxit-zora-2a684129b/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              w-10
              h-10
              flex
              items-center
              justify-center
              rounded-full
              bg-[#111111]
              border
              border-white/10
              text-white
              transition-all
              duration-300
              hover:text-cyan-400
              hover:border-cyan-400/50
              hover:shadow-[0_0_20px_rgba(34,211,238,0.35)]
              hover:scale-110
            "
          >
            <FaLinkedinIn size={18} />
          </a>

          <a
            href="https://www.instagram.com/raxit.zora/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              w-10
              h-10
              flex
              items-center
              justify-center
              rounded-full
              bg-[#111111]
              border
              border-white/10
              text-white
              transition-all
              duration-300
              hover:text-cyan-400
              hover:border-cyan-400/50
              hover:shadow-[0_0_20px_rgba(34,211,238,0.35)]
              hover:scale-110
            "
          >
            <FaInstagram size={18} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;