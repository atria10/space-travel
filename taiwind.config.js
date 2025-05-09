/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Bellefair"', "serif"],
        cond: ['"Barlow Condensed"', "sans-serif"],
        normal: ['"Barlow"', "sans-serif"],
      },
      fontSize: {
        900: ["clamp(5rem, 8vw + 1rem, 9.375rem)", { lineHeight: "1.1" }],
        800: ["3.5rem", { lineHeight: "1.1" }],
        700: ["1.5rem", { lineHeight: "1.1" }],
        600: ["1rem", { lineHeight: "1.1" }],
        500: ["1rem"],
        400: ["0.9375rem"],
        300: ["1rem"],
        200: ["0.875rem"],
      },
      letterSpacing: {
        1: "4.75px",
        2: "2.7px",
        3: "2.35px",
      },
    },
  },
  plugins: [],
};
