import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import aboutImage from "../assets/about.jpg";
import collageImage from "../assets/about-collage.jpg";
import createImage from "../assets/about-create.jpg";

const aboutContent = {
  name: "About Me",
  role: "Building premium web experiences",
  intro: [
    "Software Developer experience at Cognizant, India.",
    "Currently pursuing a Master’s in Computer Science in Birmingham, UK.",
    "Focused on React, JavaScript, responsive UI, and motion-rich experiences.",
    "Bonus: I can design posters and logos too, so the brand stays cohesive."
  ],
  keywords: ["creative", "versatile", "detail-driven", "bold"],
  builds: ["Responsive websites", "Interactive UI systems", "Performance-first frontend apps"],
  quote: "Make it feel effortless — but unmistakably premium.",
  cta: {
    link: { label: "Let’s Connect", href: "#contact" }
  },
  palette: ["#C9A16B", "#D0B081", "#8A6B4A", "#F3E9DA", "#2B1F16"],
  collageImages: [
    {
      id: "img-1",
      src: aboutImage,
      alt: "Seaside portrait",
      className: "lg:top-0 lg:left-0 lg:w-[300px]",
      rotate: -4,
      objectPos: "50% 30%"
    },
    {
      id: "img-2",
      src: collageImage,
      alt: "Studio moodboard workspace",
      className: "lg:top-10 lg:right-4 lg:w-[260px]",
      rotate: 4,
      objectPos: "50% 50%"
    },
    {
      id: "img-3",
      src: createImage,
      alt: "Born to create poster",
      className: "lg:bottom-2 lg:right-10 lg:w-[240px]",
      rotate: -2,
      objectPos: "50% 40%"
    }
  ]
};

const containerVariant = (shouldReduce) => ({
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: shouldReduce ? { duration: 0 } : { staggerChildren: 0.12, delayChildren: 0.1 }
  }
});

const fadeUpVariant = (shouldReduce, delay = 0) => ({
  hidden: shouldReduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: shouldReduce
      ? { duration: 0 }
      : { duration: 0.6, delay, ease: "easeOut" }
  }
});

function PaperBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(201,161,107,0.25),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(88,62,42,0.35),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(208,176,129,0.18),transparent_60%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0b09] via-[#120d0a]/70 to-[#0d0b09]" />
      <div className="absolute inset-0 opacity-35 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%22120%22%20height%3D%22120%22%20viewBox%3D%220%200%20120%20120%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cfilter%20id%3D%22n%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.9%22%20numOctaves%3D%221%22%20stitchTiles%3D%22stitch%22/%3E%3C/filter%3E%3Crect%20width%3D%22120%22%20height%3D%22120%22%20filter%3D%22url(%23n)%22%20opacity%3D%220.25%22/%3E%3C/svg%3E')]" />
    </div>
  );
}

function TapeCorners() {
  return (
    <>
      <span className="absolute -top-3 left-6 h-4 w-20 -rotate-3 bg-[#c9a16b]/70 shadow-[0_4px_12px_rgba(0,0,0,0.2)]" />
      <span className="absolute -top-2 right-6 h-3 w-16 rotate-6 bg-[#c9a16b]/70 shadow-[0_4px_12px_rgba(0,0,0,0.2)]" />
    </>
  );
}

function CollageCard({ children, className, rotate = 0, delay = 0 }) {
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      variants={fadeUpVariant(shouldReduce, delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      whileHover={
        shouldReduce
          ? undefined
          : { y: -6, rotate: rotate * 0.3, transition: { duration: 0.25 } }
      }
      style={{ rotate }}
      className={`relative rounded-[26px] border border-[#c9a16b]/30 bg-[#1a120c]/85 p-3 shadow-[0_18px_40px_rgba(0,0,0,0.35)] ${className}`}
    >
      <TapeCorners />
      {children}
    </motion.div>
  );
}

function HandwrittenNote({ children, className }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-[#c9a16b]/50 bg-[#1a120c]/80 px-3 py-1 text-[0.85rem] text-[#f3e9da] shadow-[0_8px_18px_rgba(0,0,0,0.22)] ${className}`}
      style={{ fontFamily: "Caveat, Comic Sans MS, cursive" }}
    >
      {children}
    </span>
  );
}

function SwatchRow({ colors }) {
  return (
    <div className="flex items-center gap-2">
      {colors.map((color) => (
        <span
          key={color}
          className="h-5 w-5 rounded-full border border-[#c9a16b]/40 shadow-[0_4px_8px_rgba(0,0,0,0.35)]"
          style={{ backgroundColor: color }}
          aria-label={`Color swatch ${color}`}
        />
      ))}
    </div>
  );
}

function AboutCTA({ cta }) {
  return (
    <div className="mt-6">
      <a
        href={cta.link.href}
        className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d5c6b5] underline decoration-[#c9a16b]/40 underline-offset-4 transition hover:text-[#f3e9da]"
      >
        {cta.link.label}
      </a>
    </div>
  );
}

export default function AboutMoodboardSection() {
  const shouldReduce = useReducedMotion();

  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 text-[#f3e9da]"
      aria-labelledby="about-title"
    >
      <PaperBackground />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          variants={containerVariant(shouldReduce)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <motion.div variants={fadeUpVariant(shouldReduce, 0.05)}>
            <p className="text-xs uppercase tracking-[0.4em] text-[#c9a16b]">
              {aboutContent.role}
            </p>
            <h2
              id="about-title"
              className="mt-4 text-[clamp(2.8rem,7vw,4.8rem)] font-serif leading-[0.9] text-[#f3e9da]"
            >
              {aboutContent.name}
            </h2>
            <div className="mt-5 space-y-3 text-sm leading-relaxed text-[#d5c6b5]/80">
              {aboutContent.intro.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {aboutContent.keywords.map((tag) => (
                <HandwrittenNote key={tag}>#{tag}</HandwrittenNote>
              ))}
            </div>

            <div className="mt-6">
              <p className="text-xs uppercase tracking-[0.3em] text-[#c9a16b]">What I build</p>
              <ul className="mt-3 space-y-2 text-sm text-[#d5c6b5]/85">
                {aboutContent.builds.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#c9a16b]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <AboutCTA cta={aboutContent.cta} />
          </motion.div>

          <motion.div
            variants={fadeUpVariant(shouldReduce, 0.1)}
            className="relative grid gap-6 lg:block lg:min-h-[620px]"
          >
            {aboutContent.collageImages.map((image, index) => (
              <CollageCard
                key={image.id}
                className={`lg:absolute ${image.className}`}
                rotate={image.rotate}
                delay={0.1 + index * 0.08}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-56 w-full rounded-[20px] object-cover sm:h-64 lg:h-52 lg:w-full"
                  style={{ objectPosition: image.objectPos }}
                  loading="lazy"
                />
              </CollageCard>
            ))}

            <CollageCard
              className="lg:absolute lg:bottom-4 lg:left-8 lg:w-[260px]"
              rotate={2}
              delay={0.3}
            >
              <div className="rounded-[18px] bg-[#1a120c]/90 px-4 py-5 text-sm text-[#d5c6b5]/80">
                <p className="text-xs uppercase tracking-[0.3em] text-[#c9a16b]">Quote</p>
                <p className="mt-3 text-base font-semibold text-[#f3e9da]">
                  “{aboutContent.quote}”
                </p>
              </div>
            </CollageCard>

            <motion.div
              variants={fadeUpVariant(shouldReduce, 0.35)}
              className="lg:absolute lg:top-[55%] lg:left-[8%] flex items-center gap-3 rounded-full border border-[#c9a16b]/40 bg-[#1a120c]/90 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[#d5c6b5] shadow-[0_12px_22px_rgba(0,0,0,0.35)]"
              style={{ fontFamily: "Caveat, Comic Sans MS, cursive" }}
            >
              Available for freelance
            </motion.div>

            <motion.div
              variants={fadeUpVariant(shouldReduce, 0.4)}
              className="lg:absolute lg:top-[20%] lg:left-[58%] flex flex-col gap-2 rounded-[18px] border border-[#c9a16b]/30 bg-[#1a120c]/90 px-4 py-3 text-xs uppercase tracking-[0.3em] text-[#d5c6b5]"
            >
              <span className="text-[#c9a16b]">Palette</span>
              <SwatchRow colors={aboutContent.palette} />
            </motion.div>

            <motion.svg
              initial={shouldReduce ? { opacity: 1 } : { opacity: 0, y: 10 }}
              whileInView={shouldReduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={shouldReduce ? { duration: 0 } : { duration: 0.6, delay: 0.5 }}
              className="pointer-events-none hidden lg:block absolute left-[35%] top-[6%]"
              width="140"
              height="120"
              viewBox="0 0 140 120"
              fill="none"
            >
              <path
                d="M5 110 C40 70, 80 65, 125 20"
                stroke="#c9a16b"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="6 6"
              />
              <path
                d="M120 18 L132 12 L128 26"
                stroke="#c9a16b"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </motion.svg>

            <motion.svg
              initial={shouldReduce ? { opacity: 1 } : { opacity: 0, y: 10 }}
              whileInView={shouldReduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={shouldReduce ? { duration: 0 } : { duration: 0.6, delay: 0.55 }}
              className="pointer-events-none hidden lg:block absolute right-[5%] bottom-[18%]"
              width="160"
              height="120"
              viewBox="0 0 160 120"
              fill="none"
            >
              <path
                d="M10 20 C60 30, 90 55, 140 95"
                stroke="#d0b081"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="5 7"
              />
              <path
                d="M140 95 L150 86 L146 104"
                stroke="#d0b081"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </motion.svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
