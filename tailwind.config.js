const { Elsie, Almendra, Sevillana, Rye } = require('next/font/google');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{

        Elsie:["Elsie",' serif' ],
        spirax:[ "Spirax", "system-ui"],
        Almendra:["Almendra"," serif"],
        gyst: [ "Dancing Script", "cursive"],
        sev: [ "Sevillana", "cursive"],
        stl: [ "Stalemate", "cursive"],
        med: [ "Meddon", "cursive"],
        king: [  "Kings", "cursive"],
        Rye:["Rye"," serif"],
        yard:["Yarndings 20", "system-ui"]

      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
