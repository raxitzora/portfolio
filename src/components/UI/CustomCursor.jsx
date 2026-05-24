import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { gsap } from "gsap";

const isTouchDevice = () =>
  typeof window !== "undefined" &&
  ("ontouchstart" in window || navigator.maxTouchPoints > 0);

export default function CustomCursor() {
  const [enabled] = useState(!isTouchDevice());
  const [cursorState, setCursorState] = useState("normal");

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = {
    stiffness: 500,
    damping: 35,
    mass: 0.5,
  };

  const ringX = useSpring(mouseX, springConfig);
  const ringY = useSpring(mouseY, springConfig);

  const trailRef = useRef(null);
  const blurRef = useRef(null);

  const ringSize =
    cursorState === "hover"
      ? 80
      : cursorState === "click"
      ? 60
      : 50;

  const dotSize =
    cursorState === "click"
      ? 10
      : 8;

  const dotX = useTransform(mouseX, (v) => v - dotSize / 2);
  const dotY = useTransform(mouseY, (v) => v - dotSize / 2);

  const ringOffsetX = useTransform(ringX, (v) => v - ringSize / 2);
  const ringOffsetY = useTransform(ringY, (v) => v - ringSize / 2);

  const glowX = useTransform(mouseX, (v) => v - 60);
  const glowY = useTransform(mouseY, (v) => v - 60);

  useEffect(() => {
    const style = document.createElement("style");

    style.innerHTML = `
      * {
        cursor: none !important;
      }

      body {
        cursor: none;
      }

      .custom-cursor-particle {
        position: fixed;
        width: 6px;
        height: 6px;
        border-radius: 9999px;
        background: rgba(34,211,238,0.7);
        pointer-events: none;
        z-index: 9996;
        box-shadow: 0 0 10px rgba(34,211,238,0.8);
      }

      @media (pointer: coarse) {
        * {
          cursor: auto !important;
        }
      }
    `;

    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;

    const hoverables = document.querySelectorAll(
      "button, a, [data-cursor='hover']"
    );

    const enter = () => setCursorState("hover");
    const leave = () => setCursorState("normal");

    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;

    const mouseDown = () => setCursorState("click");
    const mouseUp = () => setCursorState("normal");

    window.addEventListener("mousedown", mouseDown);
    window.addEventListener("mouseup", mouseUp);

    return () => {
      window.removeEventListener("mousedown", mouseDown);
      window.removeEventListener("mouseup", mouseUp);
    };
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;

    const blurEl = blurRef.current;

    const updateBlur = (e) => {
      const velocity = Math.sqrt(
        e.movementX * e.movementX +
          e.movementY * e.movementY
      );

      gsap.to(blurEl, {
        scaleX: 1 + velocity / 40,
        scaleY: 1 - velocity / 100,
        opacity: velocity > 10 ? 0.15 : 0,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", updateBlur);

    return () => {
      window.removeEventListener("mousemove", updateBlur);
    };
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;

    const trailContainer = trailRef.current;

    const createParticle = (x, y) => {
      const particle = document.createElement("div");

      particle.className = "custom-cursor-particle";

      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;

      trailContainer.appendChild(particle);

      gsap.fromTo(
        particle,
        {
          scale: 1,
          opacity: 0.7,
        },
        {
          scale: 0,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
          onComplete: () => particle.remove(),
        }
      );
    };

    const move = (e) => {
      const speed = Math.sqrt(
        e.movementX * e.movementX +
          e.movementY * e.movementY
      );

      if (speed > 25) {
        createParticle(e.clientX, e.clientY);
      }
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      {/* Particle Trail */}
      <div
        ref={trailRef}
        className="fixed inset-0 pointer-events-none z-[9996]"
      />

      {/* Glow Blur */}
      <motion.div
        ref={blurRef}
        className="fixed top-0 left-0 w-24 h-24 rounded-full bg-cyan-400 blur-3xl opacity-0 pointer-events-none mix-blend-screen z-[9997]"
        style={{
          translateX: glowX,
          translateY: glowY,
        }}
      />

      {/* Main Dot */}
      <motion.div
        className="fixed top-0 left-0 rounded-full bg-cyan-300 pointer-events-none z-[9999]"
        style={{
          width: dotSize,
          height: dotSize,
          translateX: dotX,
          translateY: dotY,
          boxShadow:
            "0 0 15px rgba(34,211,238,0.9), 0 0 40px rgba(34,211,238,0.4)",
        }}
      />

      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-cyan-300 pointer-events-none z-[9998]"
        animate={{
          scale: cursorState === "hover" ? 1.2 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
        }}
        style={{
          width: ringSize,
          height: ringSize,
          translateX: ringOffsetX,
          translateY: ringOffsetY,
          boxShadow:
            "0 0 30px rgba(34,211,238,0.25)",
        }}
      />
    </>
  );
}