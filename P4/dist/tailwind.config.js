/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        carbon: "#1A1A1A",
        gold: "#C9A84C",
        cream: "#F5F0E8",
        wine: "#8B0000",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "serif"],
      }
    },
  },
  plugins: [],
}