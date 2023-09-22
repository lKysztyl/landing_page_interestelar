/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./**/*.html", "./**/*.scss"],
  theme: {
    extend: {
      colors: {
        primary: "#07081A"
      },
      spacing: {
        '137': '37rem',
      },
      boxShadow: {
        'inner-smoke': 'inset 0 -10px 50px 70px rgb(0 0 0 / 0.05)',
      }
    },
  },
  plugins: [],
} 