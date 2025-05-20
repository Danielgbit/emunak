/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "color-t": "#fffbbf",
      },
      backgroundColor: {
        cards: "#605c22",
      },
      backgroundImage: {
        "gradient-card":
          "linear-gradient(90deg, rgb(123, 119, 31) 0%, rgb(60, 59, 14) 100%)",
      },
      fontSize: {
        "rem-1": "1rem",
        "rem-1.5": "1.5rem",
        "rem-2": "2rem",
        "rem-2.5": "2.5rem",
        "rem-3": "3rem",
        "rem-3.5": "3.5rem",
        "rem-4": "4rem",
      },
    },
  },
  plugins: [],
};
