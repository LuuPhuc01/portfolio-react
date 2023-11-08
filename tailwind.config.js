/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          950: "#252525",
          1000: "#3a3a3b",
        },
        primary: "#BAD2FF",
      },
    },
    fontFamily: {
      poppins: ["poppins"],
    },
    // textColor: {},
  },
  plugins: [],
};
