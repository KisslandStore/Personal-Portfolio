/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#070816",
        panel: "rgba(255,255,255,0.08)",
        stroke: "rgba(255,255,255,0.14)",
        gold: "#ffd166",
        ruby: "#ff4d6d",
        violet: "#9b5cff",
        cyan: "#45d6ff",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 24px 80px rgba(69, 214, 255, 0.16)",
        warm: "0 20px 70px rgba(255, 77, 109, 0.14)",
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        shimmer: "shimmer 8s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
      },
    },
  },
  plugins: [],
};
