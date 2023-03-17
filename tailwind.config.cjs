/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: "640px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",
    }
  },
  plugins: [],
}
