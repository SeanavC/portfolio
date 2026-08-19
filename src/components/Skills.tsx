"use client";

import { motion } from "framer-motion";
import { SKILLS } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="relative px-5 py-28 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent"
        >
          03 — Skills
        </motion.p>

        <div className="grid gap-10 sm:grid-cols-3">
          {Object.entries(SKILLS).map(([group, items], i) => (
            <motion.div
              key={group}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className="mb-4 font-display text-lg font-medium">{group}</h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 font-mono text-sm text-slate"
                  >
                    <span className="text-accent">·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
