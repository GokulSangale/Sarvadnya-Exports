import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FBF7F0",
        "cream-dim": "#F1E9DC",
        ink: "#201C1A",
        pomegranate: {
          DEFAULT: "#7A1F2B",
          light: "#9C2E3B",
          dark: "#54141C",
        },
        ruby: "#C8102E",
        forest: {
          DEFAULT: "#1F3D2B",
          light: "#2C5540",
        },
        gold: {
          DEFAULT: "#B8974E",
          light: "#D4B876",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      backgroundImage: {
        "crown-divider":
          "radial-gradient(circle at 10px -6px, transparent 12px, currentColor 12px)",
      },
      boxShadow: {
        premium: "0 20px 60px -15px rgba(32, 28, 26, 0.25)",
        card: "0 10px 30px -10px rgba(32, 28, 26, 0.12)",
      },
      keyframes: {
        "seed-pulse": {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.15)", opacity: "0.8" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      animation: {
        "seed-pulse": "seed-pulse 2.4s ease-in-out infinite",
        "float-slow": "float-slow 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
