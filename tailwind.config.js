/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        blue: "#1877F2",
        green: "#36A420",
      },
      spacing: {
        380: "380px",
        332: "332px",
        220: "220px",
        450: "450px",
      },
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        xl: "1.25rem",
        "1x1": "24px",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
      },
    },
  },
  "editor.quickSuggestions": {
    strings: true,
  },

  plugins: [],
};
