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
      },
      colors: {},
      fontFamily : {
        generalSans : ['var(--font-generalSans)']
      }
    },
  },
  plugins: [],
} satisfies Config;
