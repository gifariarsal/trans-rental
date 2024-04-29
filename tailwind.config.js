/* eslint-disable no-undef */
const flowbite = require('flowbite-react/tailwind');
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}', flowbite.content()],
  theme: {
    extend: {
      colors: {
        purple: '#C213FF',
        blue: '#009BF0',
      },
    },
  },
  plugins: [flowbite.plugin()],
};
