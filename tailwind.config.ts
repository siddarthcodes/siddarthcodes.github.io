import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#121212",
        surface: {
          DEFAULT: "rgba(255, 255, 255, 0.03)",
          hover: "rgba(255, 255, 255, 0.07)",
          card: "rgba(22, 22, 26, 0.7)",
        },
        accent: {
          DEFAULT: "#6366f1",
          glow: "rgba(99, 102, 241, 0.3)",
          emerald: "#10b981",
          cyan: "#06b6d4",
          violet: "#8b5cf6",
        },
        border: {
          subtle: "rgba(255, 255, 255, 0.08)",
          glow: "rgba(255, 255, 255, 0.2)",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Display",
          "Inter",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        mono: [
          "JetBrains Mono",
          "SF Mono",
          "Fira Code",
          "ui-monospace",
          "monospace",
        ],
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "pulse-glow": "pulseGlow 6s ease-in-out infinite",
        float: "float 4s ease-in-out infinite",
        shimmer: "shimmer 2.5s infinite linear",
      },
    },
  },
  plugins: [],
};

export default config;
