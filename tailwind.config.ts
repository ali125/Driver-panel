import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1890FF",
        secondary: "#F9F6F9",
        text: "#141414",
      },
      fontFamily: {
        allura: ["var(--font-allura)"],
        yekanBakh: ["var(--font-yekanBakh)"],
        yekanBakhEn: ["var(--font-yekanBakhEn)"],
      },
    },
  },
  plugins: [],
  important: "body",
} satisfies Config;
