"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { LINKS } from "@/lib/data";

const SOCIALS = [
  { label: "GitHub", value: "github.com/SeanavC", href: LINKS.github },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/seanav-chattopadhyay",
    href: LINKS.linkedin,
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(LINKS.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable (e.g. non-secure context) — select nothing, fail quietly
    }
  };

  return (
    <section id="contact" className="relative px-5 py-28 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent"
        >
          04 — Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-balance font-display text-4xl font-semibold leading-tight sm:text-5xl"
        >
          Let&apos;s build something.
        </motion.h2>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          <motion.button
            type="button"
            onClick={copyEmail}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group flex items-center justify-between gap-8 rounded-2xl border border-black/10 px-6 py-4 text-left transition-colors hover:border-accent dark:border-white/10 sm:min-w-[280px]"
            aria-label={`Copy email address ${LINKS.email}`}
          >
            <span>
              <span className="block font-mono text-xs text-slate">Email</span>
              <span className="mt-1 block font-display text-base">
                {LINKS.email}
              </span>
            </span>
            <span
              className={
                copied
                  ? "font-mono text-xs text-accent"
                  : "font-mono text-xs text-slate opacity-0 transition-opacity group-hover:opacity-100"
              }
            >
              {copied ? "Copied ✓" : "Copy"}
            </span>
          </motion.button>

          {SOCIALS.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i + 1) * 0.08 }}
              className="group flex items-center justify-between gap-8 rounded-2xl border border-black/10 px-6 py-4 transition-colors hover:border-accent dark:border-white/10 sm:min-w-[280px]"
            >
              <span>
                <span className="block font-mono text-xs text-slate">{c.label}</span>
                <span className="mt-1 block font-display text-base">{c.value}</span>
              </span>
              <span className="text-accent opacity-0 transition-opacity group-hover:opacity-100">
                ↗
              </span>
            </motion.a>
          ))}
        </div>

        <footer className="mt-24 flex flex-col gap-2 border-t border-black/10 pt-6 font-mono text-xs text-slate dark:border-white/10 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Seanav Chattopadhyay</span>
          <span>Built with Next.js · Deployed on Vercel</span>
        </footer>
      </div>
    </section>
  );
}