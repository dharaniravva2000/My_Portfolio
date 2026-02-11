import { motion, useReducedMotion } from "motion/react";

export default function SectionHeader({ eyebrow, title, subtitle, headingId }) {
  const shouldReduce = useReducedMotion();
  const transition = shouldReduce ? { duration: 0 } : { duration: 0.6, ease: "easeOut" };
  const resolvedId = headingId || "featured-projects-title";

  return (
    <div>
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={transition}
        className="text-xs uppercase tracking-[0.4em] text-[#c9a16b]/80"
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        id={resolvedId}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ ...transition, delay: 0.05 }}
        className="mt-4 text-[clamp(2.6rem,6vw,4.6rem)] font-display uppercase leading-[0.9] text-[#f3e9da]"
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ ...transition, delay: 0.1 }}
        className="mt-4 max-w-2xl text-sm leading-relaxed text-[#d5c6b5]/70"
      >
        {subtitle}
      </motion.p>
    </div>
  );
}
