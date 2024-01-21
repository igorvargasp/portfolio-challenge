import { title } from "process";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      width: {
        "7/10": "70%",
        "3/10": "30%",
        "19/20": "95%",
      },
      colors: {
        "gray-primary": "#7A7A7A",
        "gray-secondary": "#9A9A9A",
        "gray-tertiary": "#54595F",
        "black-primary": "#202023"
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
export default config;
