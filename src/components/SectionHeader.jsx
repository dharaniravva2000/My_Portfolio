import { motion, useReducedMotion } from "motion/react";
import { fadeUp } from "../utils/motion.js";

const DEFAULT_META = "FEB 10, 2026";

export default function SectionHeader({ eyebrow, title, subtitle, meta }) {
  const shouldReduce = useReducedMotion();
  return (
    <div className="mb-12">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <motion.p
          {...fadeUp(shouldReduce, 0)}
          className="text-xs uppercase tracking-[0.4em] text-ink/50"
        >
          {eyebrow}
        </motion.p>
        <motion.p
          {...fadeUp(shouldReduce, 0)}
          className="text-xs uppercase tracking-[0.4em] text-ink/50"
        >
          {meta || DEFAULT_META}
        </motion.p>
      </div>
      <motion.h2
        {...fadeUp(shouldReduce, 0.05)}
        className="mt-5 text-[clamp(2.2rem,5vw,4rem)] font-display uppercase leading-[0.9] text-ink"
      >
        {title}
      </motion.h2>
      {subtitle ? (
        <motion.p
          {...fadeUp(shouldReduce, 0.1)}
          className="mt-4 max-w-2xl text-sm text-ink/70"
        >
          {subtitle}
        </motion.p>
      ) : null}
    </div>
  );
}
