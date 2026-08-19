"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/lib/data";

export default function ProjectCard({
  project,
  isOpen,
  onToggle,
}: {
  project: Project;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      layout
      className="border-b border-black/10 dark:border-white/10"
    >
      <button
        onClick={onToggle}
        className="group flex w-full items-center gap-6 py-7 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-mono text-sm text-accent">{project.index}</span>

        <span className="flex-1">
          <span className="block font-display text-2xl font-medium transition-colors group-hover:text-accent sm:text-3xl">
            {project.name}
          </span>
          <span className="mt-1 block font-mono text-xs text-slate">
            {project.role} · {project.period}
          </span>
        </span>

        <span className="hidden max-w-xs text-right text-sm text-slate md:block">
          {project.summary}
        </span>

        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          className="shrink-0 font-mono text-xl text-accent"
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="grid gap-6 pb-8 pl-0 sm:pl-12 md:grid-cols-[2fr_1fr]">
              <div className="space-y-4">
                <p className="text-balance text-sm leading-relaxed text-slate sm:text-base">
                  {project.detail}
                </p>

                {project.highlights && (
                  <ul className="space-y-2.5">
                    {project.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm leading-relaxed text-slate"
                      >
                        <span className="mt-0.5 shrink-0 font-mono text-accent">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-black/10 px-3 py-1 font-mono text-xs text-slate dark:border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.links && (
                  <div className="flex flex-wrap gap-4">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-sm text-accent hover:underline"
                      >
                        {link.label} ↗
                      </a>
                    ))}
                  </div>
                )}

                {project.kind === "case-study" && (
                  <span className="inline-block rounded-full bg-accent/10 px-3 py-1 font-mono text-xs text-accent">
                    Case Study — No public repo
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
