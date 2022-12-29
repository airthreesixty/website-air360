import { defineConfig } from 'windicss/helpers'
import flowbite from 'flowbite-windicss-plugin'
import colors from 'windicss/colors'

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
