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
      typography: {
        DEFAULT: {
          css: {
            p: {
              a: {
                'text-decoration': 'none',
                color: '#6278DF',
              },
            },
            a: {
              'text-decoration': 'none',
            },
          },
        },
      },
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
        tertiary: {
          600: '#2C7BE5',
          700: '#2470d6',
        },
        blue: {
          100: '#F0F6FF', // Fog
          200: '#B1D1FF', // Sky
          300: '#6EA8FE', // Lake
          400: '#3C8BFF', // Water
          500: '#0D6EFD', // Sea
          600: '#0C63E4', // Ocean
        },
        red: {
          50: '#FDEDED',
          100: '#FBDBDB',
          200: '#F7BBBB',
          300: '#F29797',
          400: '#EE7777',
          500: '#EA5455',
          600: '#E31C1C',
          700: '#A81515',
          800: '#720E0E',
          900: '#360707',
        },
        green: {
          50: '#EAFBF1',
          100: '#D0F6E1',
          200: '#A6EDC6',
          300: '#77E4A8',
          400: '#4DDB8D',
          500: '#28C76F',
          600: '#20A15A',
          700: '#187743',
          800: '#10512D',
          900: '#082615',
        },
        orange: {
          50: '#FFF4EB',
          100: '#FFEDDB',
          200: '#FFD7B3',
          300: '#FFC58F',
          400: '#FFB066',
          500: '#FF9F43',
          600: '#FF7B00',
          700: '#C25E00',
          800: '#803E00',
          900: '#422000',
        },
        cyan: {
          50: '#E5FCFF',
          100: '#C7F9FF',
          200: '#8FF4FF',
          300: '#57EEFF',
          400: '#1FE9FF',
          500: '#00CFE8',
          600: '#00A5B8',
          700: '#007C8A',
          800: '#00535C',
          900: '#00292E',
        },
        black: {
          100: '#6E84A3',
          200: '#4B4B4B',
          600: '#232e4a',
        },
      },
    },
  },
})
