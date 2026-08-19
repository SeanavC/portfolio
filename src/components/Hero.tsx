"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LINKS } from "@/lib/data";

const ROLES = ["Software Engineer", "ML & Data Engineer", "AI Product-Minded Builder"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-center px-5 pt-24 sm:px-8"
    >
      <div className="mx-auto w-full max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent"
        >
          01 — Available for Software Eng / ML / AI PM roles
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-balance font-display text-5xl font-semibold leading-[1.05] sm:text-6xl md:text-7xl"
        >
          Seanav
          <br />
          Chattopadhyay
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 flex h-8 items-center font-mono text-lg text-slate sm:text-xl"
        >
          <span className="mr-2 text-accent">/</span>
          <span key={roleIndex} className="animate-fadeIn">
            {ROLES[roleIndex]}
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-6 max-w-xl text-balance text-base text-slate sm:text-lg"
        >
          First Class Computer Science graduate building across the full stack of a system —
          from data ingestion to the services that run on it. Currently building an ML
          document-classification pipeline and studying for AWS Solutions Architect – Associate.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#work"
            className="rounded-full bg-accent px-6 py-3 font-mono text-sm text-white transition-transform hover:scale-[1.03] hover:bg-accent-dim"
          >
            View Work ↓
          </a>
          <a
            href={LINKS.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-black/15 px-6 py-3 font-mono text-sm text-slate transition-colors hover:border-accent hover:text-accent dark:border-white/15"
          >
            Download CV
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="pointer-events-none absolute bottom-10 left-1/2 -translate-x-1/2 font-mono text-xs text-slate"
      >
        scroll ↓
      </motion.div>
    </section>
  );
}
