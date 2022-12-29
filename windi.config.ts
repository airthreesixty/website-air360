import { defineConfig } from 'windicss/helpers'
import flowbite from 'flowbite-windicss-plugin'
// import colors from 'windicss/colors'

export default defineConfig({
  darkMode: 'class',
  plugins: [require('windicss/plugin/typography'), flowbite],
  theme: {
    fontFamily: {
      sans: [
        'Lato',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'sans-serif',
      ],
    },
    extend: {
      colors: {
        primary: {
          100: '#FCE9F2',
          600: '#e74b91',
          700: '#ce3077',
        },
        secondary: {
          100: '#f4f5fa',
          200: '#dbe1f8',
          600: '#9a9cbf',
          700: '#7068bf',
        },
        blue: {
          100: '#F0F6FF', // Fog
          200: '#B1D1FF', // Sky
          300: '#6EA8FE', // Lake
          400: '#3C8BFF', // Water
          500: '#0D6EFD', // Sea
          600: '#0C63E4', // Ocean
        },
      },
      keyframes: {
        slide1: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        slide2: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-200%)' },
        },
      },
      animation: {
        slideshow1: 'slide1 60s -30s linear infinite',
        slideshow2: 'slide2 60s linear infinite',
      },
    },
  },
})
