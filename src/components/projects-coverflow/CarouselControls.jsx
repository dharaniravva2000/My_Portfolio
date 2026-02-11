import { motion, useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function CarouselControls({ activeIndex, count, onPrev, onNext, onSelect }) {
  const shouldReduce = useReducedMotion();

  return (
    <div className="mt-10 flex flex-wrap items-center justify-between gap-6">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onPrev}
          aria-label="Previous project"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#3a2c1f]/80 bg-[#120d0a]/70 text-[#f3e9da] transition-colors hover:border-[#c9a16b] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a16b]/60"
        >
          <ArrowLeft size={18} />
        </button>
        <button
          type="button"
          onClick={onNext}
          aria-label="Next project"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#3a2c1f]/80 bg-[#120d0a]/70 text-[#f3e9da] transition-colors hover:border-[#c9a16b] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a16b]/60"
        >
          <ArrowRight size={18} />
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Select project">
        {Array.from({ length: count }).map((_, index) => {
          const isActive = index === activeIndex;
          return (
            <motion.button
              key={`dot-${index}`}
              type="button"
              onClick={() => onSelect(index)}
              whileHover={!shouldReduce ? { scale: 1.05 } : undefined}
              whileTap={!shouldReduce ? { scale: 0.95 } : undefined}
              className={`h-2.5 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a16b]/60 ${
                isActive
                  ? "w-8 bg-[#c9a16b]"
                  : "w-2.5 bg-[#3a2c1f]/80 hover:bg-[#c9a16b]/60"
              }`}
              aria-label={`Show project ${index + 1}`}
              aria-selected={isActive}
              role="tab"
            />
          );
        })}
      </div>
    </div>
  );
}
