/* eslint-disable no-undef */
const flowbite = require('flowbite-react/tailwind');
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}', flowbite.content()],
  theme: {
    extend: {
      colors: {
        primary: '#02a844',
        black: '#1d1d1f',
        blackShade: '#47474A',
        white: '#f5f5f7',
      },
    },
  },
  plugins: [flowbite.plugin()],
};
