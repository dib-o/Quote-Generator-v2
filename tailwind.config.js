/** @type {import('tailwindcss').Config} */
export default {
  content: [".index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        s5rem: "500px",
        s7rem: "700px"
      },
      colors: {
        lightred: "#FF6B6B",
        lightorange: "#FFD580",
        lightblue: "#ADD8E6",
        lightgreen: "#90EE90",
        lightyellow: "#FFF9C4",
        lightpurple: "#E1BEE7",
      },
    },
  },
  plugins: [],
};
