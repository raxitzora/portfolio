import { useEffect } from "react";

import Lenis from "@studio-freight/lenis";

const SmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,

      smoothWheel: true,

      wheelMultiplier: 0.9,

      infinite: false,
    });

    // MAKE GLOBAL
    window.lenis = lenis;

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

export default SmoothScroll;