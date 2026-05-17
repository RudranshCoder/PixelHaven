import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0B0F17",
        surface: "#121826",
        surface2: "#182033",
        border: "#273244",
        "text-primary": "#F5F7FB",
        "text-muted": "#A7B0C0",
        primary: {
          DEFAULT: "#5B7CFF",
          hover: "#4A6AEF",
        },
        secondary: {
          DEFAULT: "#8B5CF6",
          hover: "#7C3AED",
        },
        success: "#22C55E",
        warning: "#F59E0B",
        danger: "#EF4444",
      },
      borderRadius: {
        sm: "8px",
        md: "14px",
        lg: "20px",
        xl: "28px",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-hero":
          "linear-gradient(135deg, #0B0F17 0%, #121826 50%, #182033 100%)",
        "gradient-card":
          "linear-gradient(180deg, transparent 40%, rgba(11,15,23,0.95) 100%)",
        "gradient-primary":
          "linear-gradient(135deg, #5B7CFF 0%, #8B5CF6 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.4s ease-out",
        "slide-up": "slideUp 0.4s ease-out",
        "scale-in": "scaleIn 0.2s ease-out",
        shimmer: "shimmer 1.5s infinite",
        "pulse-slow": "pulse 3s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      boxShadow: {
        card: "0 4px 24px rgba(0,0,0,0.4)",
        glow: "0 0 20px rgba(91,124,255,0.3)",
        "glow-sm": "0 0 10px rgba(91,124,255,0.2)",
        elevated: "0 8px 32px rgba(0,0,0,0.6)",
      },
    },
  },
  plugins: [],
};

export default config;
