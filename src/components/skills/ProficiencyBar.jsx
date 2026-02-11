import { motion, useReducedMotion } from "motion/react";

export default function ProficiencyBar({ label, value }) {
  const shouldReduce = useReducedMotion();

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-xs uppercase tracking-[0.22em] text-white/70">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div
        className="h-2 w-full rounded-full bg-white/10"
        role="progressbar"
        aria-label={`${label} proficiency`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={value}
      >
        <motion.div
          className="h-2 rounded-full bg-gradient-to-r from-[#F4B63D] via-[#D18A1B] to-[#F4B63D] shadow-[0_0_18px_rgba(244,182,61,0.45)]"
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true, amount: 0.6 }}
          transition={
            shouldReduce
              ? { duration: 0 }
              : { duration: 0.6, ease: "easeOut", delay: 0.1 }
          }
        />
      </div>
    </div>
  );
}
