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
        "mini-banner": "url('/banner.png')"
      },
      colors: {},
      fontFamily : {
        generalSans : ['var(--font-generalSans)'],
        saira : ['var(--font-saira)']
      },
      
    },
  },
  plugins: [],
} satisfies Config;
