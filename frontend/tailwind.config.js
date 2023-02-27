/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
    './views/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: '#009879',
          dark: '#028268',
        },
        blue: { DEFAULT: '#354052' },
        error: 'rgb(220,38,38)',
        transparent: 'rgba(255,255,255,0.1)',
        blueKing: '#BDD6EE',
      },
      fontSize: {
        tiny: '0.625rem', //10px
      },
    },
  },
  plugins: [],
}
