import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll
} from "motion/react";
import { ArrowUpRight, Globe } from "lucide-react";
import profileImage from "../assets/profile-sticker.png";

const heroContent = {
  microLeft: "FRONTEND DEVELOPER",
  microRight: "REACT • JAVASCRIPT • MOTION",
  kicker: "I BUILD FAST, BOLD DIGITAL EXPERIENCES",
  titleLines: ["DHARANI", "RAVVA"],
  statement:
    "Building responsive, high-performance web apps with React, Tailwind, and modern motion systems.",
  year: "2026",
  ctaPrimary: { label: "View Projects", href: "#projects" },
  ctaSecondary: { label: "Contact Me", href: "#contact" },
  portraitSrc: profileImage
};

function HeroBackgroundTexture({ shouldReduce }) {
  return (
    <motion.div
      initial={shouldReduce ? { opacity: 1 } : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={shouldReduce ? { duration: 0 } : { duration: 0.7, ease: "easeOut" }}
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0b09] via-[#120d0a] to-[#0d0b09]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(201,161,107,0.22),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_18%,rgba(88,62,42,0.35),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(208,176,129,0.18),transparent_60%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/70" />
      <div className="absolute inset-0 opacity-35 mix-blend-soft-light bg-[url('data:image/svg+xml,%3Csvg%20width%3D%22120%22%20height%3D%22120%22%20viewBox%3D%220%200%20120%20120%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cfilter%20id%3D%22n%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.9%22%20numOctaves%3D%221%22%20stitchTiles%3D%22stitch%22/%3E%3C/filter%3E%3Crect%20width%3D%22120%22%20height%3D%22120%22%20filter%3D%22url(%23n)%22%20opacity%3D%220.25%22/%3E%3C/svg%3E')]" />
    </motion.div>
  );
}

function HeroLayeredTitle({ style, isOutline = false, shouldReduce }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: shouldReduce
        ? { duration: 0 }
        : { staggerChildren: 0.08, delayChildren: 0.2 }
    }
  };

  const lineVariant = {
    hidden: { y: 70, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: shouldReduce
        ? { duration: 0 }
        : { duration: 0.75, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className={`pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center uppercase leading-[0.7] tracking-[-0.01em] px-6 sm:px-10 ${
        isOutline ? "z-30" : "z-0"
      }`}
      // Force the psychedelic display font even if Tailwind config isn't picked up.
      style={{
        ...style,
        fontFamily:
          "'Shrikhand', 'Pilowlava Atome', 'Pilowlava', 'Bowlby One SC', 'Cooper Black', 'Recoleta', 'Bebas Neue', sans-serif"
      }}
    >
      {heroContent.titleLines.map((line) => (
        <motion.span
          key={`${line}-${isOutline ? "outline" : "fill"}`}
          variants={lineVariant}
          className={`text-[clamp(4.4rem,17vw,12.5rem)] sm:text-[clamp(5.8rem,19vw,15rem)] ${
            isOutline ? "text-transparent" : "text-[#c9a16b]"
          }`}
          style={
            isOutline
              ? {
                  WebkitTextStroke: "1.5px rgba(243,233,218,0.55)",
                  textShadow: "none",
                  opacity: 0.4,
                  mixBlendMode: "screen"
                }
              : {
                  textShadow:
                    "0 20px 35px rgba(0,0,0,0.35), 0 3px 0 rgba(0,0,0,0.2)"
              }
          }
        >
          {line}
        </motion.span>
      ))}
    </motion.div>
  );
}

function HeroPortrait({ style, shouldReduce }) {
  return (
    <motion.div
      style={style}
      initial={
        shouldReduce
          ? { opacity: 1 }
          : { opacity: 0, clipPath: "inset(100% 0% 0% 0%)" }
      }
      animate={
        shouldReduce
          ? { opacity: 1 }
          : { opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }
      }
      transition={shouldReduce ? { duration: 0 } : { duration: 0.9, ease: "easeOut", delay: 0.35 }}
      className="relative mx-auto w-full max-w-[360px] sm:max-w-[460px] lg:max-w-[620px] z-20"
    >
      <div className="relative">
        <img
          src={heroContent.portraitSrc}
          alt="Portrait of Dharani"
          className="h-[560px] w-full object-contain object-top grayscale contrast-150 sm:h-[620px] lg:h-[680px] [filter:drop-shadow(0_30px_70px_rgba(0,0,0,0.55))_drop-shadow(0_0_18px_rgba(248,248,248,0.12))]"
          loading="eager"
        />
        <div className="pointer-events-none absolute inset-0 opacity-25 mix-blend-soft-light bg-[url('data:image/svg+xml,%3Csvg%20width%3D%22120%22%20height%3D%22120%22%20viewBox%3D%220%200%20120%20120%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cfilter%20id%3D%22n%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.9%22%20numOctaves%3D%221%22%20stitchTiles%3D%22stitch%22/%3E%3C/filter%3E%3Crect%20width%3D%22120%22%20height%3D%22120%22%20filter%3D%22url(%23n)%22%20opacity%3D%220.22%22/%3E%3C/svg%3E')]" />
      </div>
    </motion.div>
  );
}

function HeroMetaBadges({ shouldReduce }) {
  return (
    <motion.div
      initial={shouldReduce ? { opacity: 1 } : { opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={shouldReduce ? { duration: 0 } : { duration: 0.6, ease: "easeOut", delay: 0.05 }}
      className="flex flex-wrap items-center justify-between gap-4 text-[0.6rem] uppercase tracking-[0.4em] text-[#d5c6b5]/75"
    >
      <span>{heroContent.microLeft}</span>
      <span>{heroContent.microRight}</span>
    </motion.div>
  );
}

function HeroCTA({ shouldReduce }) {
  return (
    <motion.div
      initial={shouldReduce ? { opacity: 1 } : { opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={shouldReduce ? { duration: 0 } : { duration: 0.6, ease: "easeOut", delay: 0.3 }}
      className="mt-6 flex flex-wrap gap-3"
    >
      <motion.a
        href={heroContent.ctaPrimary.href}
        whileHover={!shouldReduce ? { y: -2 } : undefined}
        whileTap={!shouldReduce ? { scale: 0.98 } : undefined}
        className="inline-flex items-center justify-center rounded-full bg-[#c9a16b]/90 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#1a120c] transition hover:bg-[#e3c48a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a16b]/70"
      >
        {heroContent.ctaPrimary.label}
        <ArrowUpRight size={16} />
      </motion.a>
      <motion.a
        href={heroContent.ctaSecondary.href}
        whileHover={!shouldReduce ? { y: -2 } : undefined}
        whileTap={!shouldReduce ? { scale: 0.98 } : undefined}
        className="inline-flex items-center justify-center rounded-full border border-[#c9a16b]/60 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#f3e9da] transition hover:border-[#c9a16b] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a16b]/70"
      >
        {heroContent.ctaSecondary.label}
      </motion.a>
    </motion.div>
  );
}

export default function HeroPoster() {
  const shouldReduce = useReducedMotion();
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 120, damping: 20, mass: 0.3 });
  const smoothY = useSpring(mouseY, { stiffness: 120, damping: 20, mass: 0.3 });

  const titleX = useTransform(smoothX, (v) => v * 24);
  const titleY = useTransform(smoothY, (v) => v * 14);
  const portraitX = useTransform(smoothX, (v) => v * 16);
  const portraitY = useTransform(smoothY, (v) => v * 22);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.96]);
  const heroTranslate = useTransform(scrollYProgress, [0, 1], [0, -40]);

  const handleMouseMove = (event) => {
    if (shouldReduce || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    if (shouldReduce) return;
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[100svh] overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <HeroBackgroundTexture shouldReduce={shouldReduce} />

      <motion.div
        style={{
          scale: shouldReduce ? 1 : heroScale,
          y: shouldReduce ? 0 : heroTranslate
        }}
        className="relative mx-auto flex min-h-[90svh] max-w-6xl flex-col justify-between px-4 py-10 sm:px-6"
      >
        <HeroMetaBadges shouldReduce={shouldReduce} />

        <motion.p
          initial={shouldReduce ? { opacity: 1 } : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={shouldReduce ? { duration: 0 } : { duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="mt-10 text-center text-[0.65rem] uppercase tracking-[0.55em] text-[#f3e9da]/80"
        >
          {heroContent.kicker}
        </motion.p>

        <div className="relative mt-4 flex min-h-[52vh] items-center justify-center">
          <HeroLayeredTitle style={{ x: titleX, y: titleY }} shouldReduce={shouldReduce} />
          <HeroPortrait shouldReduce={shouldReduce} style={{ x: portraitX, y: portraitY }} />
          <HeroLayeredTitle style={{ x: titleX, y: titleY }} shouldReduce={shouldReduce} isOutline />
        </div>

        <motion.div
          initial={shouldReduce ? { opacity: 1 } : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={shouldReduce ? { duration: 0 } : { duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="mt-6 flex flex-wrap items-end justify-between gap-6 text-[0.6rem] uppercase tracking-[0.35em] text-[#d5c6b5]/80"
        >
          <div className="max-w-md">
            <p className="text-xs uppercase tracking-[0.3em] text-[#f3e9da]/85">{heroContent.statement}</p>
            <HeroCTA shouldReduce={shouldReduce} />
          </div>
          <span className="flex items-center gap-2 text-lg font-semibold text-[#f3e9da]">
            {heroContent.year}
            <ArrowUpRight size={18} className="text-[#c9a16b]" />
            <Globe size={18} className="text-[#c9a16b]" />
          </span>
        </motion.div>
      </motion.div>

      
    </section>
  );
}
