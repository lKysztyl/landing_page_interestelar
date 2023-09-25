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
        'ul-sm': '1px',
        '750': '47rem', 
      },
      boxShadow: {
        'inner-smoke': 'inset 0 -10px 50px 70px rgb(0 0 0 / 0.05)',
      },
      gridTemplateRows: {
        // Simple 8 row grid
        'sm-row': '10% 45% 45%'
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.translate-center': {
          transform: 'translate(-50%, -50%)',
          top: '50%',
          left: '50%',
          position: 'absolute',
        },
        '.flex-center': {
          display: 'flex',
          'justify-content': 'center',
          'aling-items': 'center',
        },
        '.flex-between': {
          display: 'flex',
          'justify-content': 'space-between',
          'aling-items': 'center',
        },
        '.backdrop-ul-sm': {
          'backdrop-filter': 'blur(1px)'
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
} 