"use client";

import { motion } from "framer-motion";

const META = [
  { label: "Based", value: "London, UK" },
  { label: "Education", value: "BSc CS, First Class — Univ. of Kent" },
  { label: "Placement", value: "Mattel EMEA, 2024–2025" },
  { label: "Studying", value: "AWS Solutions Architect – Associate" },
];

export default function About() {
  return (
    <section id="about" className="relative px-5 py-28 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent"
        >
          02 — About
        </motion.p>

        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-balance font-display text-2xl font-medium leading-snug sm:text-3xl"
          >
            I enjoy working across the full lifecycle of a data or software system — from
            ingesting and modelling data through to building and deploying the services that run
            on it. A year at Mattel EMEA took me through AI rollout, data governance, and
            e-commerce infrastructure supporting a $3.5M+ product line; now I&apos;m building ML
            systems of my own and looking for where to point that next, full-time.
          </motion.p>

          <motion.dl
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-4 border-l border-black/10 pl-6 font-mono text-sm dark:border-white/10"
          >
            {META.map((item) => (
              <div key={item.label}>
                <dt className="text-slate">{item.label}</dt>
                <dd className="mt-0.5 text-black dark:text-white">{item.value}</dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  );
}
