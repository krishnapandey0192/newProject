/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryRed: "#FF4B4B",
        accentOrange: "#Fa7954",
        darkGray: "#333333",
        lightGray: "#F5F5F5",
        black: "#000000",
        white: "#FFFFFF",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        lexendDeca: ["Lexend Deca", "sans-serif"],
      },
      
    },
  },
  plugins: [],
};
