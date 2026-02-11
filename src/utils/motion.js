export const fadeUp = (shouldReduce, delay = 0) => ({
  initial: shouldReduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.6 },
  transition: shouldReduce ? { duration: 0 } : { duration: 0.6, delay }
});

export const staggerContainer = (shouldReduce, stagger = 0.12) => ({
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: shouldReduce
      ? { duration: 0 }
      : { staggerChildren: stagger, delayChildren: 0.1 }
  }
});

export const fadeItem = (shouldReduce) => ({
  hidden: shouldReduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: shouldReduce ? { duration: 0 } : { duration: 0.5 } }
});
