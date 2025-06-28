/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'green-coffee': '#4CAF50',
        'coffee-brown': '#3C2F2F',
        'light-coffee': '#8B6F47',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
