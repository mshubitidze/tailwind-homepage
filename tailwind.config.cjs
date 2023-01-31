/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blueGray: "#00001B",
      },
      // fontFamily: {
      //   inter: ["Inter"],
      // },
    },
  },
  plugins: [],
};
