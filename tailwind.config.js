// extends the default Tailwind config
// https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  // purge: ['./src/*.html'],
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#f5f5f5',
          200: '#efefef',
          300: '#d4d6d9',
          400: '#b9bcc1',
          500: '#9ca2ab',
          600: '#737e8c',
          700: '#626C78',
          800: '#36414d',
          900: '#1f2830',
        },
        red: {
          // TODO: Define 100-900
          100: '#fce8e7',
          200: '#e32d19',
          300: '#cd2917',
        },
        orange: {
          // TODO: Define 100-900
          100: '#fae5d7',
          200: '#fa8334',
          300: '#b04904',
        },
        yellow: {
          // TODO: Define 100-900
          100: '#fff095',
          200: '#ffea6a',
          300: '#ffe121',
          400: '#fdce1d',
          500: '#fbb617',
        },
        green: {
          // TODO: Define as 100-900
          100: '#e5f5ea',
          200: '#10ab5b',
          300: '#0a7b40',
        },
        blue: {
          // TODO: Define as 100-900
          100: '#e3f2ff',
          200: '#75baff',
          300: '#42a1ff',
          400: '#0f87ff',
          500: '#007af5',
          600: '#0066cc',
        },
        pink: {
          // TODO: Define as 100-900
          100: '#ff99d0',
          200: '#ff66b8',
          300: '#ff0089',
          400: '#e5007b',
          500: '#cc006e',
        },
      },
      fontFamily: {
        sans: ['Proxima Nova', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [],
};
