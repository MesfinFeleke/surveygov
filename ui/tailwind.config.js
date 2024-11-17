/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        navy: {
          700: "#1a2c4e",
          800: "#152241",
          900: "#0f1934",
        },
      },
    },
  },
  plugins: [],
};
