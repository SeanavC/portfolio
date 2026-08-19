"use client";

import { useEffect, useState } from "react";
import { NAV_SECTIONS } from "@/lib/data";
import { useTheme } from "./ThemeProvider";

export default function HUD() {
  const [active, setActive] = useState("home");
  const [time, setTime] = useState("");
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const sections = NAV_SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => !!el
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Europe/London",
        })
      );
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-5 py-4 sm:px-8">
      <div className="mx-auto flex max-w-6xl items-center justify-between font-mono text-xs">
        <a
          href="#home"
          className="flex items-baseline gap-2 text-slate dark:text-slate transition-colors hover:text-accent"
        >
          <span className="text-accent">SC</span>
          <span className="hidden sm:inline">/ LONDON, UK / {time}</span>
        </a>

        <nav
          aria-label="Section navigation"
          className="flex items-center gap-1 rounded-full border border-black/10 bg-white/60 px-1.5 py-1.5 backdrop-blur-md dark:border-white/10 dark:bg-black/40"
        >
          {NAV_SECTIONS.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`rounded-full px-3 py-1.5 transition-colors ${
                active === section.id
                  ? "bg-accent text-white"
                  : "text-slate hover:text-black dark:hover:text-white"
              }`}
            >
              <span className="text-accent/70 mr-1">{section.coord}</span>
              {section.label}
            </a>
          ))}
        </nav>

        <button
          onClick={toggle}
          aria-label="Toggle theme"
          className="flex h-8 w-8 items-center justify-center rounded-full border border-black/10 text-slate transition-colors hover:text-accent dark:border-white/10"
        >
          {theme === "dark" ? "☀" : "☾"}
        </button>
      </div>
    </header>
  );
}
