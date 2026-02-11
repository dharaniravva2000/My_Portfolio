import { motion, useReducedMotion } from "motion/react";

export default function SkillIconCard({
  iconSrc,
  label,
  floatDelay = 0,
  orbitRadius = 6,
  orbitDuration = 6
}) {
  const shouldReduce = useReducedMotion();
  const base = import.meta.env.BASE_URL || "/";
  const resolvedSrc =
    iconSrc?.startsWith("/") && !iconSrc.startsWith(base)
      ? `${base}${iconSrc.slice(1)}`
      : iconSrc;

  return (
    <motion.button
      type="button"
      aria-label={label}
      whileHover={!shouldReduce ? { y: -4, scale: 1.02 } : undefined}
      whileTap={!shouldReduce ? { scale: 0.98 } : undefined}
      className="group inline-flex items-center gap-3 rounded-2xl border border-[#3a2c1f]/70 bg-[#1a120c]/60 px-4 py-3 text-left text-sm text-[#f3e9da] transition-all hover:border-[#c9a16b]/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a16b]/60"
    >
      <motion.span
        aria-hidden="true"
        animate={
          shouldReduce
            ? undefined
            : {
                x: [0, orbitRadius, 0, -orbitRadius, 0],
                y: [-orbitRadius, 0, orbitRadius, 0, -orbitRadius]
              }
        }
        transition={
          shouldReduce
            ? { duration: 0 }
            : {
                duration: orbitDuration,
                ease: "easeInOut",
                repeat: Infinity,
                delay: floatDelay
              }
        }
        className="flex h-11 w-11 items-center justify-center rounded-full bg-[#120d0a]/80 text-[#c9a16b] ring-1 ring-[#3a2c1f]/80 [will-change:transform]"
      >
        <img
          src={resolvedSrc}
          alt=""
          aria-hidden="true"
          className="h-5 w-5 object-contain"
          loading="lazy"
        />
      </motion.span>
      <span className="text-xs uppercase tracking-[0.2em] text-[#d5c6b5]/80">{label}</span>
    </motion.button>
  );
}
