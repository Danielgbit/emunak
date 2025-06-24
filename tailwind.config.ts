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
      fontFamily: {
        rubik: ["var(--font-rubik)"],
        lora: ["var(--font-lora)"],
      },
      backgroundImage: {
        "gradient-footer":
          "linear-gradient(90deg,rgba(51,49,6,1) 0%,rgba(120,118,53,1) 100%)",
        "gradient-card":
          "linear-gradient(90deg, rgb(123, 119, 31) 0%, rgb(60, 59, 14) 100%)",
      },
      fontSize: {
        "3xs": "0.6rem", // 6px
        "1xs": "0.8rem", // 8px
        "4xs": "0.9rem", // 9px
        "5xs": "1rem", // 10px
        "6xs": "1.2rem", // 12px
        "7xs": "1.4rem", // 14px
        xxs: "1rem", // 11px
        xs: "1.2rem", // 12px
        sm: "1.4rem", // 14px
        base: "1.6rem", // 16px
        lg: "1.8rem", // 18px
        xl: "2.0rem", // 20px
        h1: "5.2rem", // 52px para un h1 principal
        h2: "4.2rem", // 42px para un h2
        "2xs": "0.8rem", // 8px
        "2xl": "2.4rem", // 24px
        "3xl": "3.0rem", // 30px
        "4xl": "3.6rem", // 36px
        "5xl": "4.8rem", // 48px
        "6xl": "6.0rem", // 60px
        "7xl": "7.2rem", // 72px
        "8xl": "9.6rem", // 96px
        "9xl": "12.8rem", // 128px
      },
    },
  },
  plugins: [],
};
