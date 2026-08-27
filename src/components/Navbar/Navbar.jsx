import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import PillNav from "../UI/PillNav";
import { FaGithub, FaLinkedinIn, FaInstagram, FaCheck } from "react-icons/fa";

const Navbar = () => {
  const [activeHref, setActiveHref] = useState("#home");
  const [scrolled, setScrolled] = useState(false);
  const [toastLabel, setToastLabel] = useState("");

  const islandRef = useRef(null);
  const toastRef = useRef(null);
  const toastIconRef = useRef(null);
  const toastLabelRef = useRef(null);
  const toastTimelineRef = useRef(null);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
  ];

  // Scroll -> compact island state
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!islandRef.current) return;
    gsap.to(islandRef.current, {
      paddingLeft: scrolled ? 10 : 16,
      paddingRight: scrolled ? 10 : 16,
      paddingTop: scrolled ? 6 : 9,
      paddingBottom: scrolled ? 6 : 9,
      marginTop: scrolled ? 6 : 14,
      scale: scrolled ? 0.94 : 1,
      boxShadow: scrolled
        ? "0 10px 30px rgba(0,0,0,0.55)"
        : "0 6px 20px rgba(0,0,0,0.35)",
      duration: 0.7,
      ease: "elastic.out(1, 0.6)",
    });
  }, [scrolled]);

  // Initialize the toast pill to its collapsed/hidden resting state on mount
  useEffect(() => {
    if (!toastRef.current) return;
    gsap.set(toastRef.current, { width: 0, opacity: 0 });
    if (toastIconRef.current) {
      gsap.set(toastIconRef.current, { scale: 0, rotate: -90 });
    }
    if (toastLabelRef.current) {
      gsap.set(toastLabelRef.current, { opacity: 0, x: -6 });
    }

    return () => {
      toastTimelineRef.current?.kill();
    };
  }, []);

  const playToast = (label) => {
    const el = toastRef.current;
    const icon = toastIconRef.current;
    const labelEl = toastLabelRef.current;
    if (!el || !icon || !labelEl) return;

    toastTimelineRef.current?.kill();

    // Write the new label into the DOM synchronously (not via setState) so the
    // width measurement below reflects THIS label, not a stale render.
    labelEl.textContent = label;
    setToastLabel(label);

    // Measure natural width for the new label, then collapse to 0 before animating.
    gsap.set(el, { width: "auto", opacity: 0 });
    const targetWidth = el.getBoundingClientRect().width;
    gsap.set(el, { width: 0, opacity: 1 });
    gsap.set(icon, { scale: 0, rotate: -90 });
    gsap.set(labelEl, { opacity: 0, x: -6 });

    const tl = gsap.timeline();

    tl.to(el, {
      width: targetWidth,
      duration: 0.55,
      ease: "elastic.out(1, 0.55)",
    })
      .to(
        icon,
        { scale: 1, rotate: 0, duration: 0.5, ease: "elastic.out(1, 0.4)" },
        0.08
      )
      .to(
        labelEl,
        { opacity: 1, x: 0, duration: 0.35, ease: "power2.out" },
        0.16
      )
      .to(el, {
        width: 0,
        opacity: 1,
        duration: 0.4,
        ease: "power3.in",
        delay: 1.1,
      });

    toastTimelineRef.current = tl;
  };

  const handleItemClick = (href) => {
    setActiveHref(href);
    const match = navItems.find((item) => item.href === href);
    if (match) playToast(match.label);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-[1000] pointer-events-none">
      {/* ISLAND — centered independently, toast floats off its right edge */}
      <div className="relative w-full flex justify-center">
        <div
          ref={islandRef}
          className="w-fit max-w-[80vw] flex items-center rounded-full bg-black/90 backdrop-blur-2xl border border-white/10 pointer-events-auto relative"
          style={{ padding: "9px 16px", marginTop: 14 }}
        >
          <PillNav
            logo="/assets/logo.jpg"
            logoAlt="Raxit Logo"
            items={navItems}
            activeHref={activeHref}
            onItemClick={handleItemClick}
            baseColor="#050505"
            pillColor="#111111"
            hoveredPillTextColor="#00ffff"
            pillTextColor="#ffffff"
            initialLoadAnimation={true}
          />

          {/* Mute-switch style toast — floats beside the island, not inside its padding */}
          <div
            ref={toastRef}
            className="absolute top-1/2 -translate-y-1/2 left-full ml-3 flex items-center gap-2 rounded-full bg-black/90 backdrop-blur-2xl border border-white/10 overflow-hidden whitespace-nowrap pointer-events-none"
            style={{ height: 42, padding: "0 14px" }}
          >
            <span
              ref={toastIconRef}
              className="flex items-center justify-center w-5 h-5 rounded-full bg-cyan-400 text-black shrink-0"
            >
              <FaCheck size={10} />
            </span>
            <span
              ref={toastLabelRef}
              className="text-white text-[13px] font-semibold uppercase tracking-wide"
            >
              {toastLabel}
            </span>
          </div>
        </div>
      </div>

      {/* SOCIAL ICONS — fully separate cluster, pinned top-right */}
     <div className="hidden md:flex items-center gap-2 fixed top-4 right-5 pointer-events-auto z-[1001]">
  <a
    href="https://github.com/raxitzora"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 flex items-center justify-center rounded-full bg-[#111111] border border-white/10 text-white transition-all duration-300 hover:text-cyan-400 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.35)] hover:scale-110"
  >
    <FaGithub size={18} />
  </a>

  <a
    href="https://www.linkedin.com/in/raxit-zora-2a684129b/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 flex items-center justify-center rounded-full bg-[#111111] border border-white/10 text-white transition-all duration-300 hover:text-cyan-400 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.35)] hover:scale-110"
  >
    <FaLinkedinIn size={18} />
  </a>

  <a
    href="https://www.instagram.com/raxit.zora/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 flex items-center justify-center rounded-full bg-[#111111] border border-white/10 text-white transition-all duration-300 hover:text-cyan-400 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.35)] hover:scale-110"
  >
    <FaInstagram size={18} />
  </a>
</div>
    </header>
  );
};

export default Navbar;