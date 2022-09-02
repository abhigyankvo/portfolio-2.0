/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#CE6868",
        primaryLight: "#E28888",
        secondary: "#FBECE8",
      },
    },
  },
  plugins: [require('prettier-plugin-tailwindcss')],
};
