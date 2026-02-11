import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Send } from "lucide-react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import SectionHeader from "../components/projects-coverflow/SectionHeader.jsx";
import { fadeUp } from "../utils/motion.js";

const initialState = {
  name: "",
  email: "",
  message: ""
};

export default function Contact() {
  const [form, setForm] = useState(initialState);
  const [submitting, setSubmitting] = useState(false);
  const shouldReduce = useReducedMotion();
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    if (!form.name.trim()) return "Please enter your name.";
    if (!form.email.trim()) return "Please enter your email.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      return "Please enter a valid email.";
    if (!form.message.trim()) return "Please enter a message.";
    return "";
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const error = validate();
    if (error) {
      toast.error(error);
      return;
    }

    if (!serviceId || !templateId || !publicKey) {
      toast.error("Email service is not configured. Please add EmailJS keys.");
      return;
    }

    setSubmitting(true);
    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          reply_to: form.email
        },
        { publicKey }
      );
      toast.success("Message sent! I’ll get back to you soon.");
      setForm(initialState);
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(201,161,107,0.2),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(88,62,42,0.32),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(208,176,129,0.16),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0b09] via-[#120d0a]/70 to-[#0d0b09]" />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="Let’s Connect"
            title="Let’s build something impactful together"
            subtitle="Ready to collaborate? Send a message and I’ll respond quickly."
            headingId="contact-title"
          />
          <p className="max-w-sm text-sm leading-relaxed text-[#d5c6b5]/75">
            Share a quick brief, your timeline, and what success looks like — I’ll take it from
            there.
          </p>
        </div>

        <div className="mt-12">
          <motion.form
            {...fadeUp(shouldReduce, 0)}
            onSubmit={handleSubmit}
            className="rounded-[26px] border border-[#3a2c1f]/70 bg-[#120d0a]/80 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.55)] backdrop-blur"
          >
            <div className="grid gap-4">
              <label
                className="text-xs uppercase tracking-[0.3em] text-[#d5c6b5]/70"
                htmlFor="name"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                className="rounded-md border border-[#3a2c1f]/70 bg-[#0d0b09]/80 px-4 py-3 text-sm text-[#f3e9da] placeholder:text-[#a08c76] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a16b]/70"
                placeholder="Your name"
                required
              />
            </div>
            <div className="mt-4 grid gap-4">
              <label
                className="text-xs uppercase tracking-[0.3em] text-[#d5c6b5]/70"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="rounded-md border border-[#3a2c1f]/70 bg-[#0d0b09]/80 px-4 py-3 text-sm text-[#f3e9da] placeholder:text-[#a08c76] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a16b]/70"
                placeholder="you@example.com"
                required
              />
            </div>
            <div className="mt-4 grid gap-4">
              <label
                className="text-xs uppercase tracking-[0.3em] text-[#d5c6b5]/70"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                className="rounded-md border border-[#3a2c1f]/70 bg-[#0d0b09]/80 px-4 py-3 text-sm text-[#f3e9da] placeholder:text-[#a08c76] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a16b]/70"
                placeholder="Tell me about your project goals..."
                required
              />
            </div>
            <div className="mt-6">
              <motion.button
                whileHover={!shouldReduce ? { y: -2 } : undefined}
                whileTap={!shouldReduce ? { scale: 0.98 } : undefined}
                type="submit"
                disabled={submitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#c9a16b]/90 px-5 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#1a120c] transition hover:bg-[#e3c48a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a16b]/70"
              >
                {submitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
