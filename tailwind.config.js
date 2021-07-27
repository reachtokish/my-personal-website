const { fontFamily, fontSize, colors } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./dist/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      ...fontFamily,
      sans: ['Josefin Sans', 'sans-serif'],
    },
    container: {
      center: true,
      screens: {
        sm: '100%',
        md: '100%',
        lg: '960px',
        xl: '960px',
      },
    },
    fontSize: {
      ...fontSize,
      base: ['1rem', { lineHeight: '1.7rem' }],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
