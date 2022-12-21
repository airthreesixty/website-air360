import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  plugins: [require('windicss/plugin/typography'), require('flowbite/plugin')],
  content: [
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
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
