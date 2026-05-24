import { motion } from "framer-motion";

const SectionTransition = () => {
  return (
    <div className="relative h-40 overflow-hidden">

      {/* Top Fade */}
      <motion.div
        initial={{
          opacity: 0,
          scaleX: 0.8,
        }}
        whileInView={{
          opacity: 1,
          scaleX: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="
        absolute
        top-0
        left-1/2
        -translate-x-1/2
        w-[1px]
        h-full
        bg-gradient-to-b
        from-transparent
        via-white/20
        to-transparent
        "
      />

      {/* Glow */}
      <motion.div
        animate={{
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="
        absolute
        top-1/2
        left-1/2
        -translate-x-1/2
        -translate-y-1/2
        w-40
        h-40
        bg-white/5
        blur-3xl
        rounded-full
        "
      />
    </div>
  );
};

export default SectionTransition;