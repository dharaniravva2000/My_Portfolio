import { lazy, Suspense } from "react";
import { Toaster } from "sonner";
import Navbar from "./components/Navbar.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import SkeletonCard from "./components/SkeletonCard.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Skills from "./sections/Skills.jsx";
import Footer from "./sections/Footer.jsx";

const Projects = lazy(() => import("./sections/Projects.jsx"));
const Contact = lazy(() => import("./sections/Contact.jsx"));

function SectionFallback({ id }) {
  return (
    <section id={id} className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="h-4 w-28 rounded-full bg-base-700/80" />
        <div className="mt-4 h-8 w-64 rounded-full bg-base-700/80" />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <SkeletonCard />
          <SkeletonCard />
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Suspense fallback={<SectionFallback id="projects" />}>
          <Projects />
        </Suspense>
        <About />
        <Suspense fallback={<SectionFallback id="contact" />}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
      <ScrollToTop />
      <Toaster richColors position="top-right" theme="dark" />
    </div>
  );
}
