import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#081120",
        slate: "#111827",
        steel: "#566074",
        panel: "#0d1729",
        line: "rgba(255,255,255,0.08)",
        cyan: "#34d9ff",
        cloud: "#f8fbff",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(52,217,255,0.18), 0 20px 50px rgba(5, 18, 38, 0.45)",
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(52,217,255,0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(52,217,255,0.09) 1px, transparent 1px)",
      },
      animation: {
        float: "float 9s ease-in-out infinite",
        pulseLine: "pulseLine 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseLine: {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.85" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
