import React from "react";
import PillNav from "../UI/PillNav";

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
        gap-3
        overflow-hidden
        "
      >
        {/* Navigation */}
        <div
          className="
          flex-1
          min-w-0
          overflow-x-auto
          scrollbar-none
          "
        >
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

        {/* Desktop Status */}
        <div
          className="
          hidden
          md:flex
          items-center
          gap-2
          text-xs
          font-mono
          text-white/70
          whitespace-nowrap
          "
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />

          <span>ONLINE / SYS:OK</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;