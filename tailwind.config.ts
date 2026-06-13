import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: "#0B1F3A", light: "#0F2A50", dark: "#071629" },
        gold: { DEFAULT: "#C9A86A", light: "#D9BF8C", dark: "#A8833E" },
        warm: {
          50: "#F9F7F4", 100: "#F5F3EE", 200: "#E8E4DC",
          300: "#D4CFC5", 500: "#9B9189", 700: "#6B6560",
        },
        ice: "#EBF5F8",
      },
      fontFamily: {
        sans: ["var(--font-kanit)", "Kanit", "system-ui", "sans-serif"],
      },
      fontSize: {
        display: ["4rem", { lineHeight: "1.15", fontWeight: "700" }],
        h1: ["3rem", { lineHeight: "1.2", fontWeight: "700" }],
        h2: ["2.25rem", { lineHeight: "1.25", fontWeight: "700" }],
        h3: ["1.75rem", { lineHeight: "1.3", fontWeight: "600" }],
        h4: ["1.375rem", { lineHeight: "1.4", fontWeight: "600" }],
      },
      maxWidth: { content: "1200px" },
      spacing: { section: "6rem", "section-sm": "4rem" },
    },
  },
  plugins: [],
};

export default config;
