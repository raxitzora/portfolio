import { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Lenis from "@studio-freight/lenis";

/* =========================
   PREMIUM SCROLL BAR
========================= */

export const PremiumScrollBar = () => {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="
      fixed
      top-0
      left-0
      right-0
      h-[2px]
      bg-white
      origin-left
      z-[999999]
      "
      style={{
        scaleX,
      }}
    />
  );
};

/* =========================
   SMOOTH SCROLL
========================= */

export const SmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: false,
      wheelMultiplier: 1,
    });

    function raf(time) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
};