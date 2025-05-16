/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'rem-1': '1rem',
        'rem-1.5': '1.5rem',
        'rem-2': '2rem',
        'rem-3': '3rem',
        'rem-3.5': '3.5rem',
        'rem-4': '4rem'
      }
    },
  },
  plugins: [],
};
