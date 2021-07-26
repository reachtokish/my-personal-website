const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./dist/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      ...fontFamily,
      sans: ['IBM Plex Sans', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
