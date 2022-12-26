/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "",
        secondary: "",
        background: "",
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
