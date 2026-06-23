/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "var(--bg)",
          surface: "var(--bg-surface)",
          raised: "var(--bg-raised)",
          border: "var(--bg-border)",
        },
        ink: {
          DEFAULT: "var(--ink)",
          dim: "var(--ink-dim)",
          faint: "var(--ink-faint)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          bright: "var(--accent-bright)",
          dim: "var(--accent-dim)",
          glow: "var(--accent-glow)",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-geist-sans)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        mono: [
          "var(--font-geist-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "monospace",
        ],
      },
      fontSize: {
        "display-1": [
          "clamp(2.75rem, 6vw, 5.5rem)",
          { lineHeight: "1.02", letterSpacing: "-0.03em" },
        ],
        "display-2": [
          "clamp(1.875rem, 3.5vw, 2.75rem)",
          { lineHeight: "1.08", letterSpacing: "-0.02em" },
        ],
      },
      maxWidth: {
        content: "72rem",
      },
      boxShadow: {
        glow: "0 0 0 1px var(--accent-dim), 0 0 32px var(--accent-glow)",
        card: "0 1px 0 0 rgba(255,255,255,0.03) inset, 0 6px 24px rgba(0,0,0,0.12)",
      },
      backgroundImage: {
        "radial-fade":
          "radial-gradient(ellipse 70% 50% at 50% -10%, var(--accent-glow), transparent)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};
