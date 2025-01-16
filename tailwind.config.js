/** @type {import('tailwindcss').Config} */
import animations from "@midudev/tailwind-animations";

module.exports = {
  content: [
    "./index.html", // Asegúrate de incluir index.html
    "./src/**/*.{js,ts,jsx,tsx}", // Archivos dentro de src
  ],
  theme: {
    extend: {},
    colors: {
      white: "#fff",
      gray: "#e7e7e7",
      green: "#00a650",
      lightBlue: "#3483fa",
      black: "#000",
      yellow: "#f7d02c",
      red: "#f00",
      transparent: "transparent",
    },
  },
  plugins: [animations],
};
