import { useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";

import gsap from "gsap";

const Loader = ({ onFinish }) => {
  const loaderRef = useRef(null);

  const titleRef = useRef(null);

  const subtitleRef = useRef(null);

  const scrollIndicatorRef = useRef(null);

  const particlesRef = useRef([]);

  const progressRef = useRef(0);

  const finishedRef = useRef(false);

  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // HARD LOCK PAGE
    document.body.style.overflow = "hidden";

    window.scrollTo(0, 0);

    const letters =
      titleRef.current.querySelectorAll(".letter");

    // INTRO TIMELINE
    const tl = gsap.timeline();

    tl.fromTo(
      letters,
      {
        opacity: 0,
        y: 80,
        rotateX: -70,
        filter: "blur(12px)",
      },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        filter: "blur(0px)",
        stagger: 0.04,
        duration: 1,
        ease: "power4.out",
      }
    )

      .fromTo(
        subtitleRef.current,
        {
          opacity: 0,
          y: 20,
          filter: "blur(10px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.7"
      )

      .fromTo(
        scrollIndicatorRef.current,
        {
          opacity: 0,
          y: 10,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
        },
        "-=0.4"
      );

    // FLOATING PARTICLES
    particlesRef.current.forEach((particle, i) => {
      gsap.to(particle, {
        x: `${Math.random() * 80 - 40}`,
        y: `${Math.random() * 80 - 40}`,
        duration: 6 + i,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    // FAKE LOADER SCROLL
    const handleWheel = (e) => {
      if (finishedRef.current) return;

      progressRef.current += e.deltaY * 0.0022;

      progressRef.current = Math.max(
        0,
        Math.min(progressRef.current, 1)
      );

      const progress = progressRef.current;

      // TITLE
      gsap.to(titleRef.current, {
        scale: 1 + progress * 2.2,
        rotateX: progress * 18,
        z: progress * 300,
        y: -progress * 180,
        opacity: 1 - progress,
        filter: `blur(${progress * 28}px)`,
        duration: 0.22,
        ease: "power3.out",
      });

      // SUBTITLE
      gsap.to(subtitleRef.current, {
        y: -progress * 50,
        opacity: 1 - progress,
        filter: `blur(${progress * 8}px)`,
        duration: 0.22,
        ease: "power3.out",
      });

      // SCROLL INDICATOR
      gsap.to(scrollIndicatorRef.current, {
        opacity: 1 - progress * 2,
        y: progress * 60,
        duration: 0.22,
        ease: "power3.out",
      });

      // PARTICLES
      gsap.to(particlesRef.current, {
        opacity: 1 - progress * 1.5,
        scale: 1 + progress * 0.4,
        y: -progress * 120,
        duration: 0.22,
        ease: "power3.out",
      });

      // LOADER PANEL
      gsap.to(loaderRef.current, {
  yPercent: -progress * 100,

  scale: 1 - progress * 0.08,

  filter: `blur(${progress * 8}px)`,

  duration: 0.45,

  ease: "expo.out",
});

      // COMPLETE
      if (progress >= 1) {
        finishedRef.current = true;

        gsap.to(loaderRef.current, {
          opacity: 0,
          duration: 0.45,
          ease: "power2.out",

          onComplete: () => {
            document.body.style.overflow =
              "auto";

            setHidden(true);

            if (onFinish) {
              onFinish();
            }
          },
        });
      }
    };

    window.addEventListener(
      "wheel",
      handleWheel,
      {
        passive: true,
      }
    );

    return () => {
      window.removeEventListener(
        "wheel",
        handleWheel
      );

      document.body.style.overflow = "auto";
    };
  }, [onFinish]);

  if (hidden) return null;

  return (
    <section
      ref={loaderRef}
      style={{
        willChange: "transform, opacity",
        backfaceVisibility: "hidden",
      }}
      className="
      fixed
      inset-0
      z-[999999]
      bg-black
      overflow-hidden
      perspective-[2000px]
      "
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0">

        {/* MAIN GLOW */}
        <div
          className="
          absolute
          top-1/2
          left-1/2
          w-[600px]
          h-[600px]
          rounded-full
          bg-white/[0.03]
          blur-[140px]
          -translate-x-1/2
          -translate-y-1/2
          "
        />

        {/* SECONDARY GLOW */}
        <div
          className="
          absolute
          top-[30%]
          left-[20%]
          w-[250px]
          h-[250px]
          rounded-full
          bg-white/[0.02]
          blur-[100px]
          "
        />

        {/* GRID */}
        <div
          className="
          absolute
          inset-0
          opacity-[0.015]
          [background-image:linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)]
          [background-size:100px_100px]
          "
        />

        {/* VIGNETTE */}
        <div
          className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_0%,black_90%)]
          "
        />

        {/* PARTICLES */}
        {[...Array(18)].map((_, i) => (
          <div
            key={i}
            ref={(el) =>
              (particlesRef.current[i] = el)
            }
            className="
            absolute
            rounded-full
            bg-white/10
            blur-xl
            "
            style={{
              width: `${Math.random() * 90 + 20}px`,
              height: `${Math.random() * 90 + 20}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* CONTENT */}
      <div
        className="
        relative
        z-20
        w-full
        h-full
        flex
        flex-col
        items-center
        justify-center
        text-center
        px-6
        "
      >
        {/* TOP LABEL */}
        <p
          className="
          mb-5
          uppercase
          tracking-[8px]
          text-[10px]
          sm:text-xl
          text-red-500
          "
        >
          Welcome To My Digital World
        </p>

        {/* TITLE */}
      <h1
  ref={titleRef}
  className="
  relative
  max-w-[1600px]
  mx-auto
  text-[72px]
  sm:text-[120px]
  md:text-[160px]
  lg:text-[220px]
  xl:text-[260px]
  font-black
  uppercase
  leading-[0.82]
  tracking-[-10px]
  text-white
  "
>
  {/* GLOW */}
  <span
    className="
    absolute
    inset-0
    opacity-30
    text-white
    "
  >
    RAXIT
  </span>

  {/* MAIN */}
  <span
    className="
    relative
    block
    bg-gradient-to-b
    from-white
    via-white
    to-zinc-500
    bg-clip-text
    text-transparent
    "
  >
    {"RAXIT".split("").map((char, i) => (
      <span
        key={i}
        className="letter inline-block"
      >
        {char}
      </span>
    ))}
  </span>

  <span
    className="
    relative
    block
    ml-8
    sm:ml-16
    text-zinc-700
    "
  >
    {"ZORA".split("").map((char, i) => (
      <span
        key={i}
        className="letter inline-block"
      >
        {char}
      </span>
    ))}
  </span>
</h1>

        {/* SUBTITLE */}
       <div
  ref={subtitleRef}
  className="
  mt-8
  flex
  flex-wrap
  items-center
  justify-center
  gap-3
  uppercase
  "
>
  {[
    "FULL STACK ENGINEER",
    "AI ENGINEER",
    "CYBER SECURITY",
  ].map((item, index) => (
    <div
      key={index}
      className="
      border
      border-white/10
      bg-white/[0.03]
      backdrop-blur-xl
      px-5
      py-3
      text-[10px]
      sm:text-xs
      tracking-[4px]
      text-zinc-300
      "
    >
      {item}
    </div>
  ))}
</div>

        {/* SCROLL INDICATOR */}
        <div
  ref={scrollIndicatorRef}
  className="
  absolute
  bottom-10
  left-1/2
  -translate-x-1/2
  flex
  flex-col
  items-center
  "
>
  {/* OUTER */}
  <div
    className="
    relative
    w-28
    h-28
    flex
    items-center
    justify-center
    "
  >
    {/* ROTATING RING */}
    <motion.div
      animate={{
        rotate: 360,
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "linear",
      }}
      className="
      absolute
      inset-0
      rounded-full
      border
      border-white/10
      "
    />

    {/* CENTER DOT */}
    <motion.div
      animate={{
        scale: [1, 1.4, 1],
        opacity: [0.4, 1, 0.4],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
      }}
      className="
      w-3
      h-3
      rounded-full
      bg-white
      shadow-[0_0_20px_rgba(255,255,255,0.8)]
      "
    />

    {/* LINE */}
    <motion.div
      animate={{
        y: [0, 14, 0],
      }}
      transition={{
        duration: 1.8,
        repeat: Infinity,
      }}
      className="
      absolute
      top-16
      w-[1px]
      h-16
      bg-gradient-to-b
      from-white
      to-transparent
      "
    />
  </div>

  {/* TEXT */}
  <p
    className="
    mt-5
    uppercase
    tracking-[6px]
    text-[11px]
    text-white
    "
  >
    SCROLL TO ENTER
  </p>
</div>
      </div>
      {/* TRANSITION OVERLAY */}
<div
  className="
  absolute
  inset-0
  pointer-events-none
  "
>
  {/* TOP SHUTTER */}
  <motion.div
    animate={{
      y: [0, -20, 0],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
    absolute
    top-0
    left-0
    w-full
    h-[20vh]
    bg-gradient-to-b
    from-white/[0.03]
    to-transparent
    "
  />

  {/* BOTTOM SHUTTER */}
  <motion.div
    animate={{
      y: [0, 20, 0],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
    absolute
    bottom-0
    left-0
    w-full
    h-[20vh]
    bg-gradient-to-t
    from-white/[0.03]
    to-transparent
    "
  />
</div>
    </section>
  );
};

export default Loader;