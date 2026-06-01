import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#213331",
        muted: "#657471",
        brand: {
          DEFAULT: "#0f8f86",
          dark: "#08716b",
        },
        mint: "#e7f7f3",
        cream: "#fff7ea",
      },
      boxShadow: {
        soft: "0 18px 44px rgba(21, 70, 65, 0.14)",
        card: "0 12px 34px rgba(24, 60, 57, 0.08)",
        glow: "0 22px 48px rgba(15, 143, 134, 0.16)",
      },
      fontFamily: {
        sans: ["Microsoft YaHei", "PingFang SC", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
