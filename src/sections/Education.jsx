import { motion, useReducedMotion } from "motion/react";
import { GraduationCap } from "lucide-react";
import SectionHeader from "../components/SectionHeader.jsx";
import { staggerContainer, fadeItem } from "../utils/motion.js";

const education = [
  {
    degree: "Master’s in Computer Science",
    institution: "Currently Pursuing",
    period: "2024 — Present",
    details: [
      "Advanced coursework in scalable systems and modern web engineering.",
      "Research focus on performance optimization and UX." 
    ]
  },
  {
    degree: "Bachelor’s Degree",
    institution: "University Name (Editable)",
    period: "2018 — 2022",
    details: [
      "Computer Science fundamentals, data structures, and web development.",
      "Academic project leadership and hackathon participation." 
    ]
  }
];

export default function Education() {
  const shouldReduce = useReducedMotion();

  return (
    <section id="education" className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Creative Portfolio"
          title="My Education"
          subtitle="Grounded in computer science with an ongoing focus on modern frontend engineering."
        />
        <motion.div
          variants={staggerContainer(shouldReduce)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="grid gap-6 md:grid-cols-2"
        >
          {education.map((item) => (
            <motion.div
              key={item.degree}
              variants={fadeItem(shouldReduce)}
              className="relative overflow-hidden rounded-3xl border border-ink/15 bg-base-800/70 p-6"
            >
              <div className="pointer-events-none absolute -left-10 top-6 h-28 w-28 rounded-full bg-accent-500/40 blur-2xl" />
              <div className="flex items-center gap-3 text-accent-400">
                <GraduationCap size={20} />
                <h3 className="font-display text-xl uppercase tracking-[0.2em] text-ink">
                  {item.degree}
                </h3>
              </div>
              <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs uppercase tracking-[0.3em] text-ink/60">
                <span>{item.institution}</span>
                <span>{item.period}</span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-ink/70">
                {item.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
