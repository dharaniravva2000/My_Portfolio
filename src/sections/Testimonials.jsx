import { motion, useReducedMotion } from "motion/react";
import { Quote } from "lucide-react";
import SectionHeader from "../components/SectionHeader.jsx";
import { staggerContainer, fadeItem } from "../utils/motion.js";

const testimonials = [
  {
    name: "Priya K.",
    role: "Product Manager",
    quote:
      "Delivered pixel-perfect interfaces with exceptional performance. Our stakeholders loved the polish."
  },
  {
    name: "Arjun S.",
    role: "Engineering Lead",
    quote:
      "Strong ownership, proactive communication, and consistently shipped high-quality UI under pressure."
  },
  {
    name: "Lena M.",
    role: "Startup Founder",
    quote:
      "Turned our rough idea into a premium frontend experience that helped close enterprise pilots."
  }
];

export default function Testimonials() {
  const shouldReduce = useReducedMotion();

  return (
    <section id="testimonials" className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Creative Portfolio"
          title="Social Proof"
          subtitle="Professional feedback highlighting reliability, collaboration, and polished delivery."
        />
        <motion.div
          variants={staggerContainer(shouldReduce)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="grid gap-6 md:grid-cols-3"
        >
          {testimonials.map((item) => (
            <motion.div
              key={item.name}
              variants={fadeItem(shouldReduce)}
              className="rounded-3xl border border-ink/15 bg-base-800/70 p-6"
            >
              <Quote className="text-accent-400" size={22} />
              <p className="mt-4 text-sm text-ink/70">“{item.quote}”</p>
              <div className="mt-6 text-sm">
                <p className="font-display text-lg uppercase tracking-[0.2em] text-ink">
                  {item.name}
                </p>
                <p className="text-xs uppercase tracking-[0.3em] text-ink/60">
                  {item.role}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
