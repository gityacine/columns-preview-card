/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'shoulders': ['"Big Shoulders Display"', 'cursive'],
        'lexend': ['"Lexend Deca"', 'sans-serif']
      }
    },
  },
  plugins: [],
}
