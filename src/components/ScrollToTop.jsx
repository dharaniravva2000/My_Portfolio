import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          aria-label="Scroll to top"
          onClick={() =>
            window.scrollTo({ top: 0, behavior: shouldReduce ? "auto" : "smooth" })
          }
          initial={shouldReduce ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
          transition={shouldReduce ? { duration: 0 } : { duration: 0.3 }}
          className="fixed bottom-6 right-6 z-40 rounded-full border border-ink/20 bg-base-800/80 p-3 text-ink shadow-lg backdrop-blur hover:bg-base-700"
        >
          <ArrowUp size={18} />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
