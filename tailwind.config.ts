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
        ink: {
          950: "#12140D", // Primary dark background
          900: "#1B1E15", // Dark surface/card
        },
        parchment: {
          50: "#FAFAFA",  // Primary clean white/off-white background
          100: "#F4F4F6", // Clean white surface/card
        },
        gold: {
          400: "#D4A752",
          500: "#C79A45", // Primary accent: CTAs, emblem, Synapse Thread
          600: "#B88A35",
        },
        sage: {
          400: "#93A579", // Secondary accent: step lettering, botanical marks
        },
        clay: {
          700: "#8C5B41", // Tertiary accent: subtle highlights, hovers
        },
        charcoal: {
          ink: "#231F19", // Body text on light backgrounds
        },
        primary: {
          DEFAULT: "#C79A45",
          foreground: "#12140D",
        },
        secondary: {
          DEFAULT: "#1B1E15",
          foreground: "#F6F1E4",
        },
        destructive: {
          DEFAULT: "#8C5B41",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#F4F4F6",
          foreground: "#231F19",
        },
        accent: {
          DEFAULT: "#93A579",
          foreground: "#12140D",
        },
      },
      fontFamily: {
        display: ["var(--font-manrope)", "sans-serif"],
        headline: ["var(--font-manrope)", "sans-serif"],
        body: ["var(--font-general-sans)", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.02em",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-gentle": "float 6s ease-in-out infinite",
        "glow-flow": "glow 3s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        glow: {
          "0%": { filter: "drop-shadow(0 0 2px rgba(199, 154, 69, 0.4))" },
          "100%": { filter: "drop-shadow(0 0 8px rgba(199, 154, 69, 0.85))" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
