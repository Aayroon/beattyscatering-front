/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
        colors: {
            burgundy: '#800020',
            wine: '#722F37',
            ivory: '#FFFFF0',
            gold: '#D4AF37',
        },
    },
  },
  plugins: [
      require('flowbite/plugin'),
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
  ],
}


