/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        surface: "540px",
        mac: "1440px",
      },
    },
  },
  plugins: [],
};
