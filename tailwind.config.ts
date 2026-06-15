import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Mirrors ieee-ies.org exactly (values pulled from their live stylesheet).
        // NOTE: light theme — `ink`/`ink-soft` are the (light) surfaces and
        // `paper`/`paper-dim` are the (dark) text. Names kept to avoid churn.
        ink: "#FFFFFF", // page background — IES body { background:#fff }
        "ink-soft": "#F5F5F5", // alternating section — IES #f5f5f5
        paper: "#333333", // primary text — IES body { color:#333 }
        "paper-dim": "#777777", // muted text — IES #777
        coal: "#1A1A1A", // near-black, for text on accent fills
        // IES brand palette, exact hexes
        ieee: "#006699", // IES blue
        "ieee-deep": "#004263", // IES deep navy
        signal: "#EC8C00", // IES orange accent
        "signal-soft": "#F2A33C",
        // Rwandan flag accents — used sparingly, as punctuation
        sun: "#FAD201",
        leaf: "#1EB53A",
        sky: "#00A3DD",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.05em",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-rev": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        "grid-pan": {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "60px 60px" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
      },
      animation: {
        marquee: "marquee 38s linear infinite",
        "marquee-rev": "marquee-rev 38s linear infinite",
        "grid-pan": "grid-pan 8s linear infinite",
        blink: "blink 1.1s step-end infinite",
      },
    },
  },
  plugins: [],
};

export default config;
