import { motion, useReducedMotion } from "motion/react";
import { Mail } from "lucide-react";
import useActiveSection from "../hooks/useActiveSection.js";
import Button from "./Button.jsx";
import cx from "../utils/cx.js";

const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" }
];

export default function Navbar() {
  const shouldReduce = useReducedMotion();
  const activeId = useActiveSection(navItems.map((item) => item.id));

  return (
    <motion.header
      initial={shouldReduce ? { opacity: 1, y: 0 } : { y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={shouldReduce ? { duration: 0 } : { duration: 0.6 }}
      className="sticky top-0 z-50 w-full border-b border-[#3a2c1f]/70 bg-[#0d0b09]/85 backdrop-blur"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a
          href="#hero"
          className="text-lg font-display uppercase tracking-[0.2em] text-[#f3e9da]"
          aria-label="Go to hero section"
        >
          Portfolio<span className="text-[#c9a16b]">.</span>
        </a>
        <nav
          aria-label="Primary"
          className="flex flex-1 items-center justify-center gap-2 overflow-x-auto px-4 text-[0.65rem] uppercase tracking-[0.3em] text-[#d5c6b5]/70"
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={activeId === item.id ? "page" : undefined}
              className={cx(
                "whitespace-nowrap px-3 py-2 transition-colors",
                activeId === item.id
                  ? "text-[#c9a16b]"
                  : "hover:text-[#f3e9da]"
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button
            as="a"
            href="#contact"
            variant="secondary"
            className="border-[#c9a16b]/60 text-[#f3e9da] hover:border-[#c9a16b] hover:text-white"
          >
            <Mail size={16} />
            Hire Me
          </Button>
        </div>
      </div>
    </motion.header>
  );
}
