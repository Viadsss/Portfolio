/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      fontFamily: {
        sora: ["Sora", "sans-serif"],
        martianMono: ["Martian Mono", "system-ui"],
      },
    },
  },
  plugins: [],
};
