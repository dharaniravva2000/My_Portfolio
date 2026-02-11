import { motion, useReducedMotion } from "motion/react";
import SectionHeader from "../components/projects-coverflow/SectionHeader.jsx";
import SkillIconCard from "../components/skills/SkillIconCard.jsx";

// Skill icon grid data (kept separate for easy editing).
const iconBase = import.meta.env.BASE_URL || "/";

const skillsData = [
  { label: "React", iconSrc: `${iconBase}skills/react.svg` },
  { label: "JavaScript", iconSrc: `${iconBase}skills/javascript.svg` },
  { label: "Tailwind", iconSrc: `${iconBase}skills/tailwindcss.svg` },
  { label: "Motion", iconSrc: `${iconBase}skills/framer.svg` },
  { label: "Figma", iconSrc: `${iconBase}skills/figma.svg` },
  { label: "GitHub", iconSrc: `${iconBase}skills/github.svg` },
  { label: "Vite", iconSrc: `${iconBase}skills/vite.svg` },
  { label: "CSS3", iconSrc: `${iconBase}skills/css3.svg` },
  { label: "HTML5", iconSrc: `${iconBase}skills/html5.svg` }
];

const skillPositions = [
  { x: 12, y: 25 },
  { x: 32, y: 12 },
  { x: 52, y: 28 },
  { x: 72, y: 14 },
  { x: 88, y: 38 },
  { x: 18, y: 62 },
  { x: 44, y: 55 },
  { x: 70, y: 72 },
  { x: 54, y: 88 }
];

export default function SkillsSection() {
  const shouldReduce = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: shouldReduce
        ? { duration: 0 }
        : { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerGrid = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: shouldReduce
        ? { duration: 0 }
        : { staggerChildren: 0.08, delayChildren: 0.1 }
    }
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: shouldReduce
        ? { duration: 0 }
        : { duration: 0.45, ease: "easeOut" }
    }
  };

  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="relative scroll-mt-24 overflow-hidden py-24"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(201,161,107,0.2),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(88,62,42,0.32),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(208,176,129,0.16),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0b09] via-[#120d0a]/70 to-[#0d0b09]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="My Expertise"
            title="Skills & Tools"
            subtitle="Curating high-performance interfaces with cinematic motion and refined visual craft."
            headingId="skills-title"
          />
          <p className="max-w-sm text-sm leading-relaxed text-[#d5c6b5]/75">
            Built to deliver premium UI systems, brand-grade interaction, and resilient frontend delivery.
          </p>
        </div>

        <div className="relative mt-12">
          <div className="pointer-events-none absolute right-0 top-10 h-56 w-56 -translate-y-1/2 rounded-full bg-[#c9a16b]/25 blur-[140px] lg:h-72 lg:w-72" />

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            className="space-y-6"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-[#c9a16b]/80">
              Design & Development Stack
            </p>
            <motion.div
              variants={staggerGrid}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="relative grid grid-cols-2 gap-4 sm:block sm:h-[520px]"
            >
              {skillsData.map((skill, index) => {
                const position = skillPositions[index] || { x: 50, y: 50 };
                return (
                  <motion.div
                    key={skill.label}
                    variants={itemVariant}
                    className="relative sm:absolute sm:-translate-x-1/2 sm:-translate-y-1/2"
                    style={{ left: `${position.x}%`, top: `${position.y}%` }}
                  >
                    <motion.div
                      animate={
                        shouldReduce
                          ? undefined
                          : {
                              x: [0, 6, 0, -6, 0],
                              y: [0, -6, 0, 6, 0]
                            }
                      }
                      transition={
                        shouldReduce
                          ? { duration: 0 }
                          : {
                              duration: 8 + (index % 3) * 1.2,
                              ease: "easeInOut",
                              repeat: Infinity,
                              delay: index * 0.3
                            }
                      }
                    >
                    <SkillIconCard
                      iconSrc={skill.iconSrc}
                      label={skill.label}
                      floatDelay={index * 0.2}
                      orbitRadius={4 + (index % 3) * 2}
                        orbitDuration={5.2 + (index % 4) * 0.6}
                      />
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            className="mt-12 flex flex-wrap items-center gap-4 rounded-[26px] border border-[#3a2c1f]/70 bg-[#120d0a]/80 px-6 py-5 shadow-[0_30px_80px_rgba(0,0,0,0.55)] backdrop-blur"
          >
            <div className="min-w-[240px] flex-1">
              <h3 className="text-xl font-display uppercase tracking-[0.18em] text-[#f3e9da]">
                Frontend Craft in Motion
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#d5c6b5]/80">
                Building fast, responsive interfaces with cinematic motion and a premium brand finish.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <motion.a
                href="#projects"
                whileHover={!shouldReduce ? { y: -2 } : undefined}
                whileTap={!shouldReduce ? { scale: 0.98 } : undefined}
                className="inline-flex items-center justify-center rounded-full bg-[#c9a16b]/90 px-5 py-2 text-xs uppercase tracking-[0.3em] text-[#1a120c] transition hover:bg-[#e3c48a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a16b]/70"
              >
                View Projects
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
