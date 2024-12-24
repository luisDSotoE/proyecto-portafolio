import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#A52A2A",
        darkBg: "#000000",
      },
      backgroundImage: {
        "gradient-cover":
          "linear-gradient(90.21deg, rgba(255, 0, 0, 0.8) -5.91%, rgba(74, 47, 189, 0.5) 50%, rgba(0, 0, 0, 1) 100%)",
      },
      
    },
  },
  plugins: [],
};
export default config;