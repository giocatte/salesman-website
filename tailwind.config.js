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
      },
    },
  },
  plugins: [],
};
