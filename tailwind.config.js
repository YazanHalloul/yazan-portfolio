/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#222222",
        secondary: "#FA8112",
        // accent: "#F5E7C6",
        soft: "#FAF3E1",
      },
    },
  },
  plugins: [],
};
