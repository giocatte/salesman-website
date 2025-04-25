/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'

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
        ...colors,
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        nunito: ['"Nunito Sans"', 'sans-serif'],
      },
      boxShadow: {
        'inset-stroke': 'inset 0 0 0 101px rgba(0,0,0,.54)',
      },
      backgroundImage: {
        'sfondo-gradiente':
          'linear-gradient(to right, rgba(255,6,0,.4) 4%, rgba(255,136,74,.4) 29%, rgba(255,183,0,.4) 49%, rgba(150,222,255,.4) 49%, rgba(53,192,255,.4) 68%, rgba(0,26,255,.4) 100%)',
        iron:
          'conic-gradient(#ededed 0%, #adadad 17%, #dbdbdb 35%, #e7e7e7 43%, #bdbdbd 50%, #ebebeb 58%, #e2e2e2 68%, #adadad 80%, #b9b9b9 90%, #e2e2e2 100%)',
        'iron-op':
          'conic-gradient(rgba(237,237,237,.5) 0%, rgba(173,173,173,.5) 17%, rgba(219,219,219,.5) 35%, rgba(231,231,231,.5) 43%, rgba(189,189,189,.5) 50%, rgba(235,235,235,.5) 58%, rgba(226,226,226,.5) 68%, rgba(173,173,173,.5) 80%, rgba(185,185,185,.5) 90%, rgba(226,226,226,.5) 100%)',
        BlueToRed:
          'linear-gradient(336deg, #ff0000 0%, #ff5700 22%, #ff884a 50%, #35c0ff 51%, #007bff 82%, #001aff 100%)',
        RedToBlue:
          'linear-gradient(336deg, #001aff 0%, #007bff 22%, #35c0ff 50%, #ff884a 51%, #ff5700 82%, #ff0000 100%)',
        ellipse:
          'radial-gradient(ellipse at center, rgba(0,0,0,.35) 53%, rgba(0,0,0,0) 80%)',
      },
    },
  },
  plugins: [
    ({ addUtilities }) => {
      addUtilities({
        /*-------------------------------------------------
         |  Typography – tablet (≥ 1024 px) & desktop
         *------------------------------------------------*/
        '.h1-Tablet':     { fontSize: '1.875rem', lineHeight: '3rem',    fontWeight: '800' }, /* 30 px */
        '.h2-Tablet':     { fontSize: '1.5rem',   lineHeight: '2.375rem',fontWeight: '700' }, /* 24 px */
        '.h3-Tablet':     { fontSize: '1.125rem', lineHeight: '1.875rem',fontWeight: '400' }, /* 18 px */
        '.button-Tablet': { fontSize: '1.125rem', lineHeight: '1.5rem',  fontWeight: '800' }, /* 18 px */

        '.h1-Desktop':    { fontSize: '2.125rem', lineHeight: '3.5rem',  fontWeight: '800' }, /* 34 px */
        '.h2-Desktop':    { fontSize: '1.75rem',  lineHeight: '2.75rem', fontWeight: '700' }, /* 28 px */
        '.h3-Desktop':    { fontSize: '1.25rem',  lineHeight: '2.125rem',fontWeight: '400' }, /* 20 px */
        '.button-Desktop':{ fontSize: '1.25rem',  lineHeight: '1.75rem', fontWeight: '800' }, /* 20 px */

        /* Spaziatura (invariata) */
        '.px-Tablet':  { paddingInline: '6rem'    },
        '.py-Tablet':  { paddingBlock:  '2.5rem'  },
        '.px-Desktop': { paddingInline: '11.25rem'},
        '.py-Desktop': { paddingTop: '3.75rem', paddingBottom: '3.75rem' },

        /* Altri util */
        '.tab-size-0':  { tabSize: '0' },
        '.no-scrollbar': { '-ms-overflow-style':'none','scrollbar-width':'none' },
        '.no-scrollbar::-webkit-scrollbar':{ display:'none' },
        '.text-gr': { color:'#3A3939' },

        /* Bottoni */
        '.btnBlueRed-ez':{
          color:'#3A3939', background:'#fff', padding:'.25rem .5rem',
          borderRadius:'9999px', fontWeight:'bold', fontSize:'1rem',
        },
        '.btnBlueRed':{
          color:'#3A3939', background:'#fff', padding:'0.5rem 1rem',
          borderRadius:'9999px', fontWeight:'bold', fontSize:'1rem',
          '&:hover':{
            backgroundImage:'RedToBlue', backgroundColor:'transparent',
            color:'#fff', fontWeight:'600',
          },
          '&:active':{ backgroundImage:'none', filter:'blur(1px)' },
        },
      })
    },
  ],
}