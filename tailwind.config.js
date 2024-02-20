const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './slices/**/*.{js,jsx}',
  ],
  theme: {
    fontFamily: {
      raleway: ['Raleway', 'sans-serif'],
      lato: ['Lato', 'sans-serif'],
    },
    extend: {
      colors: {
        purpleDefault: '#6b21a8',
        purpleLight: '#d8b4fe',
      },
      screens: {
        xs: '375px',
      },
    },
  },
  plugins: [],
};
