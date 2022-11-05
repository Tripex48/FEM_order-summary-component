/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",

      primary: {
        700: "#3829e0",
        500: "#766cf1",
        300: "#e0e8ff",
      },

      neutral: {
        900: "#1f2f56",
        400: "#c5d1f7",
        300: "#7280a7",
        200: "#dfd9ff",
        100: "#f5f7ff",
      },

      white: "#fff",
      blue: "#3e52a3",
    },
    fontFamily: {
      redhat: ["Red Hat Display", "sans-serif"],
    },
  },
  plugins: [],
};
