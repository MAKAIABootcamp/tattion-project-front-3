import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      lato: ["var(--font-lato)", ...fontFamily.sans],
      montserrat: ["var(--font-montserrat)", ...fontFamily.sans],
    },
    extend: {
      borderRadius: {
        large: "99999px",
        md: "50px",
        sm: "20px",
        xs: "5px",
      },
      colors: {
        white: "#f2f2f2",
        black: "#030303",
        "main-red": "#D01000",
        "dark-red": "#BE1E2D",
        "light-red": "#ED6366",
        "light-gray": "#D9D9D9",
        "dark-gray": "#606060",
        "gray-black": "#242424",
      },
    },
  },
  plugins: [],
};
