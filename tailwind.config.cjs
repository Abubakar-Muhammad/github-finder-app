/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [],
  theme: {
    extend: {},
  },
  daisyui: { themes: ["dark", "cmyk"] },
  plugins: [require("daisyui")],
}
