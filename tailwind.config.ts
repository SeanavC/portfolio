import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "#0A0A0F",
          light: "#F7F6F3",
        },
        surface: {
          DEFAULT: "#12121A",
          light: "#EFEDE7",
        },
        accent: {
          DEFAULT: "#7C5CFF",
          dim: "#5A3FE0",
          soft: "#B7A6FF",
        },
        slate: {
          DEFAULT: "#8B8A99",
          light: "#54525F",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(124,92,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(124,92,255,0.06) 1px, transparent 1px)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(4px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.4s ease",
      },
    },
  },
  plugins: [],
};

export default config;
