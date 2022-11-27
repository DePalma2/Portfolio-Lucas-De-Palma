/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: true,
  content: ["./index.html","./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      lineClamp: {
        10: "10",
        12: "12"
      }
    },
  },
  variants: {
    extend: {
      lineClamp: ["hover"]
    }
  },
  plugins: [
    require("@tailwindcss/line-clamp")
  ],
}