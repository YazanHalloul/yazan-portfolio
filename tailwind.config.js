/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#030303",
        secondary: "#123458",
        accent: "#F1EFEC", 
        soft: "#D4c9BE",
      },
    },
  },
  plugins: [],
};
