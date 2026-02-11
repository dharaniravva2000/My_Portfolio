import { useCallback, useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import projects from "../../data/projects.js";
import SectionHeader from "./SectionHeader.jsx";
import ProjectCard from "./ProjectCard.jsx";
import CarouselControls from "./CarouselControls.jsx";

const SWIPE_THRESHOLD = 70;
const SWIPE_VELOCITY = 550;

const normalizeIndex = (index, total) => ((index % total) + total) % total;

const getOffset = (index, activeIndex, total) => {
  let offset = index - activeIndex;
  const half = Math.floor(total / 2);
  if (offset > half) offset -= total;
  if (offset < -half) offset += total;
  return offset;
};

const useViewport = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const update = () => setWidth(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return width;
};

export default function ProjectsCoverflow() {
  const shouldReduce = useReducedMotion();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const width = useViewport();

  const total = projects.length;
  const activeIndex = normalizeIndex(currentIndex, total);

  const layout = useMemo(() => {
    const isMobile = width < 640;
    const isTablet = width >= 640 && width < 1024;

    return {
      isMobile,
      isTablet,
      cardWidth: isMobile ? 250 : isTablet ? 300 : 360,
      cardHeight: isMobile ? 360 : isTablet ? 420 : 480,
      step: isMobile ? 190 : isTablet ? 230 : 280,
      maxOffset: isTablet || isMobile ? 1 : 2
    };
  }, [width]);

  const transition = shouldReduce
    ? { duration: 0 }
    : {
        type: "spring",
        stiffness: 240,
        damping: 30,
        mass: 0.7
      };

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => prev - 1);
  }, []);

  const handleDragEnd = useCallback(
    (_event, info) => {
      setTimeout(() => setIsDragging(false), 0);
      if (info.offset.x < -SWIPE_THRESHOLD || info.velocity.x < -SWIPE_VELOCITY) {
        goNext();
        return;
      }
      if (info.offset.x > SWIPE_THRESHOLD || info.velocity.x > SWIPE_VELOCITY) {
        goPrev();
      }
    },
    [goNext, goPrev]
  );

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        goNext();
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goPrev();
      }
    },
    [goNext, goPrev]
  );

  return (
    <section
      id="projects"
      className="relative scroll-mt-24 overflow-hidden py-24"
      aria-labelledby="featured-projects-title"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(201,161,107,0.25),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(88,62,42,0.35),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(208,176,129,0.18),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0b09] via-[#120d0a]/70 to-[#0d0b09]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="Studio Selection"
            title="Featured Projects"
            subtitle="Crafted digital experiences with a focus on refined motion, narrative flow, and lasting impact."
            headingId="featured-projects-title"
          />
          <p className="max-w-sm text-sm leading-relaxed text-[#d5c6b5]/75">
            Each build blends cinematic interaction with performance-first engineering. Swipe through to see
            the current edit.
          </p>
        </div>

        <div
          className="relative mt-12 flex h-[460px] items-center justify-center md:h-[520px]"
          style={{ perspective: 1400 }}
        >
          <motion.div
            className="relative h-full w-full outline-none focus-visible:ring-2 focus-visible:ring-[#c9a16b]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d0b09]"
            drag={shouldReduce ? false : "x"}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.18}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={handleDragEnd}
            onKeyDown={handleKeyDown}
            role="list"
            aria-roledescription="carousel"
            aria-label="Featured projects"
            tabIndex={0}
          >
            {projects.map((project, index) => {
              const offset = getOffset(index, activeIndex, total);
              const absOffset = Math.abs(offset);
              const isActive = offset === 0;
              const isVisible = absOffset <= layout.maxOffset;
              const direction = offset > 0 ? -1 : 1;
              const rotate = absOffset === 1 ? 18 : absOffset >= 2 ? 28 : 0;
              const scale = absOffset === 0 ? 1 : absOffset === 1 ? 0.86 : absOffset === 2 ? 0.72 : 0.6;
              const opacity = absOffset === 0 ? 1 : absOffset === 1 ? 0.65 : absOffset === 2 ? 0.35 : 0;
              const brightness = absOffset === 0 ? 1 : absOffset === 1 ? 0.85 : 0.7;
              const depth = absOffset === 0 ? 60 : absOffset === 1 ? 10 : -40;

              return (
                <ProjectCard
                  key={project.id}
                  project={project}
                  isActive={isActive}
                  isVisible={isVisible}
                  width={layout.cardWidth}
                  height={layout.cardHeight}
                  isDragging={isDragging}
                  onSelect={() => setCurrentIndex(index)}
                  motionProps={{
                    animate: {
                      x: offset * layout.step,
                      rotateY: direction * rotate,
                      scale,
                      opacity,
                      z: depth
                    },
                    transition,
                    style: {
                      zIndex: 100 - absOffset,
                      pointerEvents: isVisible ? "auto" : "none",
                      filter: `brightness(${brightness})`
                    }
                  }}
                />
              );
            })}
          </motion.div>
        </div>

        <CarouselControls
          activeIndex={activeIndex}
          count={total}
          onPrev={goPrev}
          onNext={goNext}
          onSelect={setCurrentIndex}
        />
      </div>
    </section>
  );
}
