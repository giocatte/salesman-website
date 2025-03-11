/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

export default {
  content: [
    './pages/**/*.{vue,js,ts}',
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        ...colors, // Import Tailwind's default colors
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        nunito: ['"Nunito Sans"', 'sans-serif'],
      },
      boxShadow: {
        'inset-stroke': 'inset 0 0 0 101px rgba(0, 0, 0, 0.54)',
      },
      backgroundImage: {
        'sfondo-gradiente': 'linear-gradient(to right, rgba(255, 6, 0, 0.4) 4%, rgba(255, 136, 74, 0.4) 29%, rgba(255, 183, 0, 0.4) 49%, rgba(150, 222, 255, 0.4) 49%, rgba(53, 192, 255, 0.4) 68%, rgba(0, 26, 255, 0.4) 100%)',
        'iron': 'conic-gradient(#ededed 0%, #adadad 17%, #dbdbdb 35%, #e7e7e7 43%, #bdbdbd 50%, #ebebeb 58%, #e2e2e2 68%, #adadad 80%, #b9b9b9 90%, #e2e2e2 100%)',
        'iron-op': 'conic-gradient(rgba(237, 237, 237, 0.5) 0%, rgba(173, 173, 173, 0.5) 17%, rgba(219, 219, 219, 0.5) 35%, rgba(231, 231, 231, 0.5) 43%, rgba(189, 189, 189, 0.5) 50%, rgba(235, 235, 235, 0.5) 58%, rgba(226, 226, 226, 0.5) 68%, rgba(173, 173, 173, 0.5) 80%, rgba(185, 185, 185, 0.5) 90%, rgba(226, 226, 226, 0.5) 100%)',
        'BlueToRed': 'linear-gradient(336deg, rgb(255, 0, 0) 0%, rgb(255, 87, 0) 22%, rgb(255, 136, 74) 50%, rgb(53, 192, 255) 51%, rgb(0, 123, 255) 82%, rgb(0, 26, 255) 100%)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.no-scrollbar': {
          '-ms-overflow-style': 'none', // IE and Edge
          'scrollbar-width': 'none', // Firefox
        },
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none', // Chrome, Safari, and Opera
        },
        '.text-gr': {
          color: '#3A3939',
        },
      });
    }
  ],
};