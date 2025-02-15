import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-banner": "linear-gradient(120deg, #ff7e5f, #feb47b, #a67aff)",
        "mini-banner": "url('/banner.png')",
        "footer-bg":
          "linear-gradient(180deg, rgba(211, 166, 114, 0.38) -86.06%, rgba(54, 44, 32, 0.75) 48.88%, #232323 119.09%)",
      },
      colors: {},
      fontFamily: {
        generalSans: ["var(--font-generalSans)"],
        saira: ["var(--font-saira)"],
      },
    },
  },
  safelist: ["top-[280px]", "xl:top-[280px]"],
  plugins: [],
} satisfies Config;
