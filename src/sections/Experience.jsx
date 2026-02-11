import { motion, useReducedMotion } from "motion/react";
import { Briefcase } from "lucide-react";
import SectionHeader from "../components/SectionHeader.jsx";
import { staggerContainer, fadeItem } from "../utils/motion.js";

const experiences = [
  {
    role: "Software Developer",
    company: "Cognizant",
    period: "2022 — Present",
    summary:
      "Delivered frontend features, collaborated with cross-functional squads, and drove UI performance improvements across client projects."
  },
  {
    role: "Freelance / Internship",
    company: "Available on request",
    period: "2020 — 2022",
    summary:
      "Built responsive marketing sites and interactive prototypes for early-stage teams and academic projects."
  }
];

export default function Experience() {
  const shouldReduce = useReducedMotion();

  return (
    <section id="experience" className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Creative Portfolio"
          title="Experience Timeline"
          subtitle="Frontend delivery, collaboration, and consistent execution across teams."
        />
        <motion.div
          variants={staggerContainer(shouldReduce)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="relative grid gap-6"
        >
          <div className="absolute left-3 top-0 h-full w-px bg-ink/15 md:left-5" />
          {experiences.map((item) => (
            <motion.div
              key={item.role}
              variants={fadeItem(shouldReduce)}
              className="relative rounded-3xl border border-ink/15 bg-base-800/70 p-6 pl-12"
            >
              <span className="absolute left-0 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-ink/20 bg-base-900">
                <Briefcase size={18} className="text-accent-400" />
              </span>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-display text-xl uppercase tracking-[0.2em] text-ink">
                  {item.role}
                </h3>
                <span className="text-xs uppercase tracking-[0.3em] text-ink/50">
                  {item.period}
                </span>
              </div>
              <p className="mt-2 text-xs uppercase tracking-[0.3em] text-accent-400/80">
                {item.company}
              </p>
              <p className="mt-4 text-sm text-ink/70">{item.summary}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
