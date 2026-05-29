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
    // ==========================
// SMOOTH CINEMATIC PROGRESS
// ==========================

let currentProgress = 0;

let targetProgress = 0;

let touchStartY = 0;
let hasTriggeredMobile = false;

const updateAnimation = () => {
  currentProgress +=
    (targetProgress - currentProgress) * 0.08;

  const progress = currentProgress;

  // TITLE
  gsap.set(titleRef.current, {
    scale: 1 + progress * 0.35,

    rotateX: progress * 3,

    y: -progress * 60,

    opacity: 1 - progress,

    filter: `blur(${progress * 18}px)`,
  });

  // SUBTITLE
  gsap.set(subtitleRef.current, {
    y: -progress * 40,

    opacity: 1 - progress,

    filter: `blur(${progress * 6}px)`,
  });

  // INDICATOR
  gsap.set(scrollIndicatorRef.current, {
    opacity: 1 - progress * 2,

    y: progress * 50,
  });

  // PARTICLES
  gsap.set(particlesRef.current, {
    opacity: 1 - progress * 1.5,

    scale: 1 + progress * 0.25,

    y: -progress * 80,
  });

  // PANEL
 gsap.set(loaderRef.current, {
  yPercent: -progress * 100,

  scale: 1 - progress * 0.03,

  rotateX: progress * 2,

  transformPerspective: 2000,

  filter: `blur(${progress * 3}px)`,

  opacity: 1 - progress * 0.15,
});

  // COMPLETE
  if (
    progress >= 0.995 &&
    !finishedRef.current
  ) {
    finishedRef.current = true;

    gsap.to(loaderRef.current, {
      opacity: 0,

      duration: 0.7,

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

  requestAnimationFrame(updateAnimation);
};

updateAnimation();

// DESKTOP SCROLL
const handleWheel = (e) => {
  if (finishedRef.current) return;

  targetProgress += e.deltaY * 0.0018;

  targetProgress = Math.max(
    0,
    Math.min(targetProgress, 1)
  );
};

// MOBILE TOUCH
const handleTouchStart = (e) => {
  touchStartY = e.touches[0].clientY;
};

const handleTouchMove = (e) => {
  if (finishedRef.current) return;

  const currentY = e.touches[0].clientY;

  const delta = touchStartY - currentY;

  // ONE POWERFUL SWIPE
  if (
    Math.abs(delta) > 35 &&
    !hasTriggeredMobile
  ) {
    hasTriggeredMobile = true;

    gsap.to(
      { value: targetProgress },
      {
        value: 1,
        duration: 1.4,
        ease: "power4.inOut",
        onUpdate() {
          targetProgress = this.targets()[0].value;
        },
      }
    );
  }
};

window.addEventListener(
  "wheel",
  handleWheel,
  {
    passive: true,
  }
);

window.addEventListener(
  "touchstart",
  handleTouchStart,
  {
    passive: true,
  }
);

window.addEventListener(
  "touchmove",
  handleTouchMove,
  {
    passive: true,
  }
);

    return () => {
     window.removeEventListener(
  "wheel",
  handleWheel
);

window.removeEventListener(
  "touchstart",
  handleTouchStart
);

window.removeEventListener(
  "touchmove",
  handleTouchMove
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
        {[...Array(window.innerWidth < 768 ? 8 : 18)].map((_, i) => (
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
{/* CONTENT */}
<div
  className="
  relative
  z-20
  w-full
  min-h-[100svh]
  flex
  flex-col
  items-center
  justify-between
py-20
  overflow-hidden
  px-6
  "
>
  {/* CENTER WRAPPER */}
  <div
    ref={titleRef}
    className="
    relative
    flex
    flex-col
    items-center
    justify-center
    text-center
    "
  >
    {/* SOFT CINEMATIC GLOW */}
    <div
      className="
      absolute
      w-[500px]
      h-[500px]
      rounded-full
      bg-white/[0.06]
      blur-[140px]
      "
    />

    {/* MAIN TITLE */}
    <motion.h1
      initial={{
        opacity: 0,
        y: 80,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
      relative
      uppercase
      font-black
      text-white/90
drop-shadow-[0_0_12px_rgba(255,255,255,0.35)]
      leading-[0.9]
      tracking-[-3px]
      sm:tracking-[-5px]
      text-[32px]
sm:text-[60px]
md:text-[90px]
lg:text-[140px]
xl:text-[180px]
      "
    >
      <span
        className="
        block
        text-white/90
drop-shadow-[0_0_12px_rgba(255,255,255,0.35)]
        "
      >
        Welcome To
      </span>

      <span
        className="
        block
        bg-gradient-to-b
        from-white
        to-zinc-500
        bg-clip-text
        text-transparent
        "
      >
        Developer's World
      </span>
    </motion.h1>

    {/* SUBTLE LINE */}
    <motion.div
      initial={{
        opacity: 0,
        scaleX: 0,
      }}
      animate={{
        opacity: 1,
        scaleX: 1,
      }}
      transition={{
        delay: 0.4,
        duration: 1,
      }}
      className="
      mt-8
      w-[120px]
      h-[1px]
      bg-gradient-to-r
      from-transparent
      via-white/50
      to-transparent
      "
    />
  </div>

  {/* SCROLL INDICATOR */}
  <motion.div
    ref={scrollIndicatorRef}
    initial={{
      opacity: 0,
      y: 20,
    }}
    animate={{
      opacity: 1,
      y: 0,
    }}
    transition={{
      delay: 0.8,
      duration: 1,
    }}
    className="
    absolute
    bottom-8
    sm:bottom-12
    left-1/2
    -translate-x-1/2
    flex
    flex-col
    items-center
    "
  >
    {/* DEVICE FRAME */}
    <div
      className="
      relative
      w-[58px]
h-[96px]
sm:w-[72px]
sm:h-[120px]
      border
      border-white/40
      rounded-[32px]
      bg-white/[0.02]
      backdrop-blur-xl
      overflow-hidden
      shadow-[0_0_30px_rgba(255,255,255,0.08)]
      "
    >
      {/* MOVING LIGHT */}
      <motion.div
        animate={{
          y: [0, 70, 0],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        left-1/2
        top-4
        -translate-x-1/2
        w-[2px]
        h-10
        rounded-full
        bg-gradient-to-b
        from-white
        to-transparent
        "
      />

      {/* SCREEN GLOW */}
      <div
        className="
        absolute
        inset-0
        bg-gradient-to-b
        from-white/[0.08]
        to-transparent
        "
      />
    </div>

    {/* SCROLL TEXT */}
    <motion.p
      animate={{
        opacity: [0.5, 1, 0.5],
        y: [0, 4, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
      mt-6
      uppercase
      tracking-[4px]
sm:tracking-[7px]
text-[12px]
sm:text-xl
text-center
whitespace-nowrap
      font-extrabold
     text-red-500
drop-shadow-[0_0_12px_rgba(255,255,255,0.35)] 
      "
    >
      SCROLL TO ENTER
    </motion.p>
  </motion.div>
</div>
      {/* TRANSITION OVERLAY */}

{/* CINEMATIC TRANSITION */}

{/* PORTAL TRANSITION */}
<motion.div
  animate={{
    scale: [1, 1.08, 1],
    opacity: [0.04, 0.08, 0.04],
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="
  absolute
  inset-0
  pointer-events-none
  "
>
  <div
    className="
    absolute
    inset-0
    bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]
    "
  />
</motion.div>

    </section>
  );
};

export default Loader;