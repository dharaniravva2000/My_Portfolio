import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectCard({
  project,
  isActive,
  isVisible,
  width,
  height,
  isDragging,
  onSelect,
  motionProps
}) {
  const shouldReduce = useReducedMotion();

  return (
    <motion.article
      layout
      initial={false}
      onClick={() => {
        if (!isDragging && !isActive) {
          onSelect();
        }
      }}
      whileHover={
        !shouldReduce && isActive
          ? {
              y: -8
            }
          : undefined
      }
      className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none ${
        isActive ? "cursor-default" : "cursor-pointer"
      } [transform-style:preserve-3d] [will-change:transform] [backface-visibility:hidden]`}
      style={{ width, height, ...motionProps.style }}
      animate={motionProps.animate}
      transition={motionProps.transition}
      aria-hidden={!isVisible}
      aria-current={isActive ? "true" : undefined}
      role="listitem"
    >
      <div className="relative h-full w-full overflow-hidden rounded-[32px] border border-[#3a2c1f]/80 bg-[#120d0a]/90 shadow-[0_35px_80px_rgba(0,0,0,0.55)] backdrop-blur">
        {isActive ? (
          <motion.div
            layoutId="active-project-glow"
            className="pointer-events-none absolute -inset-[2px] rounded-[34px] border border-[#c9a16b]/50 shadow-[0_0_40px_rgba(201,161,107,0.18)]"
          />
        ) : null}

        <img
          src={project.image}
          alt={`${project.title} preview`}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0806]/95 via-[#0b0806]/40 to-transparent" />

        <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-7">
          <div>
            <p className="text-[0.6rem] uppercase tracking-[0.35em] text-[#c9a16b]/80">
              {project.subtitle}
            </p>
            <h3 className="mt-3 text-2xl font-display uppercase tracking-[0.18em] text-[#f3e9da]">
              {project.title}
            </h3>
          </div>

          <AnimatePresence mode="wait">
            {isActive ? (
              <motion.div
                key="active-content"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={shouldReduce ? { duration: 0 } : { duration: 0.4, ease: "easeOut" }}
              >
                <p className="text-sm leading-relaxed text-[#e6d6c3]/80">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#c9a16b]/30 px-3 py-1 text-[0.6rem] uppercase tracking-[0.3em] text-[#e6d6c3]/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap gap-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={!shouldReduce ? { y: -2 } : undefined}
                    whileTap={!shouldReduce ? { scale: 0.98 } : undefined}
                    className="inline-flex items-center gap-2 rounded-full border border-[#c9a16b]/40 bg-[#1a120c]/70 px-5 py-2 text-xs uppercase tracking-[0.25em] text-[#f3e9da] transition-colors hover:border-[#c9a16b] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a16b]/60"
                  >
                    <Github size={16} />
                    View Code
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={!shouldReduce ? { y: -2 } : undefined}
                    whileTap={!shouldReduce ? { scale: 0.98 } : undefined}
                    className="inline-flex items-center gap-2 rounded-full bg-[#c9a16b]/90 px-5 py-2 text-xs uppercase tracking-[0.25em] text-[#1a120c] transition-colors hover:bg-[#e3c48a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a16b]/70"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </motion.a>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="inactive-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                exit={{ opacity: 0 }}
                transition={shouldReduce ? { duration: 0 } : { duration: 0.3, ease: "easeOut" }}
              >
                <p className="text-xs uppercase tracking-[0.3em] text-[#d5c6b5]/60">
                  Explore
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.article>
  );
}
