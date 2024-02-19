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
        pinkDefault: '#831843',
        pinkLight: '#fbcfe8',
      },
      screens: {
        xs: '375px',
      },
    },
  },
  plugins: [],
};
