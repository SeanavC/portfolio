"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/data";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [openId, setOpenId] = useState<string | null>(PROJECTS[0].id);

  return (
    <section id="work" className="relative px-5 py-28 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent"
        >
          02 — Selected Work
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 max-w-2xl text-balance font-display text-3xl font-medium sm:text-4xl"
        >
          Things I&apos;ve shipped or shaped.
        </motion.h2>

        <div className="mt-10 border-t border-black/10 dark:border-white/10">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isOpen={openId === project.id}
              onToggle={() => setOpenId(openId === project.id ? null : project.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
