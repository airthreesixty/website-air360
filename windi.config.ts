import { defineConfig } from 'windicss/helpers'
import flowbite from 'flowbite-windicss-plugin'
// import colors from 'windicss/colors'

export default defineConfig({
  darkMode: 'class',
  shortcuts: {
    container: 'max-w-screen-[1400px] mx-auto px-6 lg:px-8',
    title1: 'font-bold text-4xl text-black-600 lg:text-5xl xl:text-6xl',
    title2: 'font-bold text-3xl text-black-600 lg:text-4xl',
    title3: 'text-xl text-black lg:text-2xl xl:text-3xl',
    textp: 'text-gray-500 lg:text-lg',
  },
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
      sans2: [
        'Qanelas',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'sans-serif',
      ],
      title: ['Noto Sans JP', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
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
              em: {
                fontSize: '12px',
              },
            },
            a: {
              'text-decoration': 'none',
              color: '#6278DF',
            },
            maxWidth: '100%',
            ul: {
              li: {
                '&:before': {
                  backgroundColor: '#6b7280',
                },
                paddingLeft: '1.5em',
                a: {
                  color: '#6B7280',
                },
              },
            },
            color: '#232e4a',
            h1: {
              color: '#232e4a',
            },
            h2: {
              a: {
                color: '#232e4a',
                fontWeight: 'bold',
              },
              backgroundColor: '#f7f7f7',
              borderLeft: '5px solid #e74b91',
              padding: '14px 12px',
              borderBottom: '3px solid #dadada',
            },
            h3: {
              a: {
                color: '#232e4a',
                fontWeight: 'bold',
              },
              padding: '12px 10px',
              borderBottom: '3px solid #e74b91',
            },
            h4: {
              fontSize: '18px',
              fontWeight: 'bold',
              borderLeft: '5px solid #e74b91',
              paddingLeft: '10px',
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
          600: '#FA734C',
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
        purple: {
          600: '#BF45A8',
        },
        blossom: {
          600: '#644AD5',
        },
      },
      textShadow: {
        white: '0px 0px 14px rgba(255, 255, 255, 0.7)',
        primary: '0px 0px 14px rgba(231, 75, 145, 0.5)',
      },
      dropShadow: {
        white: '0px 0px 14px rgba(255, 255, 255, 0.7)',
        primary: '0px 0px 14px rgba(231, 75, 145, 0.5)',
      },
      boxShadow: {
        primary: '0 0 0 2px rgba(231,75,145,1), 8px 8px 0 0 rgba(231,75,145,1)',
        gray: '0 0 0 2px rgba(156,163,175,1), 8px 8px 0 0 rgba(156,163,175,1)',
      },
    },
  },
})
