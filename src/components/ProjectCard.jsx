import { motion, useReducedMotion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import Button from "./Button.jsx";

export default function ProjectCard({ project }) {
  const shouldReduce = useReducedMotion();
  return (
    <motion.article
      whileHover={shouldReduce ? {} : { y: -6 }}
      transition={{ duration: 0.3 }}
      className="group h-full overflow-hidden rounded-3xl border border-ink/15 bg-base-800/70 shadow-card backdrop-blur"
    >
      {project.image ? (
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.image}
            alt={`${project.title} preview`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-base-900/90 via-transparent to-transparent" />
        </div>
      ) : null}
      <div className="flex h-full flex-col gap-4 p-6">
        <div>
          <h3 className="text-2xl font-display uppercase tracking-[0.2em] text-ink">
            {project.title}
          </h3>
          <p className="mt-3 text-sm text-ink/70">{project.summary}</p>
          <p className="mt-4 text-xs uppercase tracking-[0.3em] text-accent-400/90">
            {project.impact}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="border border-ink/20 px-3 py-2 text-[0.6rem] uppercase tracking-[0.3em] text-ink/60"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto flex flex-wrap gap-3">
          <Button
            as="a"
            href={project.github}
            target="_blank"
            rel="noreferrer"
            variant="secondary"
            className="text-xs"
          >
            <Github size={16} />
            GitHub
          </Button>
          <Button
            as="a"
            href={project.live}
            target="_blank"
            rel="noreferrer"
            variant="primary"
            className="text-xs"
          >
            <ExternalLink size={16} />
            Live Demo
          </Button>
        </div>
      </div>
    </motion.article>
  );
}
