import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  plugins: [require('windicss/plugin/typography'), require('flowbite/plugin')],
  content: [
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {},
  },
})
