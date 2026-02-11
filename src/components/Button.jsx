import { motion, useReducedMotion } from "motion/react";
import cx from "../utils/cx.js";

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-xs font-semibold uppercase tracking-[0.3em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-base-900";

const variants = {
  primary:
    "bg-accent-500 text-base-900 shadow-glow hover:bg-accent-400",
  secondary:
    "border border-ink/20 text-ink/80 hover:text-ink hover:border-ink/50 bg-transparent",
  ghost: "text-ink/60 hover:text-ink"
};

export default function Button({
  as = "button",
  variant = "primary",
  className,
  children,
  ...props
}) {
  const shouldReduce = useReducedMotion();
  const classes = cx(baseStyles, variants[variant], className);
  const hover = shouldReduce ? {} : { scale: 1.03 };
  const tap = shouldReduce ? {} : { scale: 0.98 };

  if (as === "a") {
    return (
      <motion.a
        whileHover={hover}
        whileTap={tap}
        className={classes}
        {...props}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={hover}
      whileTap={tap}
      className={classes}
      {...props}
    >
      {children}
    </motion.button>
  );
}
