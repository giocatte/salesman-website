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
    },
  },
  plugins: [],
};
