import React from "react";
import PillNav from "../UI/PillNav";

const Navbar = () => {
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects Work ", href: "#projects" },
  ];
  
  return (
    <header className="fixed top-0 left-0 w-full h-20 bg-black/80 backdrop-blur-sm border-b border-white/20 flex items-center justify-between px-4 md:px-6 lg:px-12 z-[1000]">
      {/* Left side: logo and navigation via PillNav */}
      <PillNav
        logo="/assets/logo.jpg"
        logoAlt="Raxit Logo"
        items={navItems}
        activeHref="#home"
        // styling props for the futuristic HUD look
        baseColor="#050505"
        pillColor="transparent"
        hoveredPillTextColor="#00ffff"
        pillTextColor="#ffffff"
        initialLoadAnimation={true}
        className="flex-1"
      />
      {/* Right side: system status */}
      <div className="flex items-center space-x-2 text-xs font-mono text-white/70">
        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
        <span>ONLINE / SYS:OK</span>
      </div>
    </header>
  );
};

export default Navbar;