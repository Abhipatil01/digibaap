/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        orange: '#F75603',
        brown: '#4E240E',
        'light-gray': '#D9D9D9',
        yellow: '#FFCC01',
        zeus: '#2C2620',
        'dark-orange': '#DD240A',
        creamy: '#FFE39B',
        'light-brown': 'rgba(255, 204, 0, 0.09)',
        'dark-brown': '#3D352B',
      },
      fontFamily: {
        phudu: ['Phudu'],
        urbanist: ['Urbanist'],
      },
      theme: {
        extend: {},
      },
      screens: {},
    },
  },
  plugins: [],
};
