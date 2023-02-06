// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  vite: {
    optimizeDeps: {
      exclude: [
        'date-fns',
      ],
    },
  },
  modules: ['@nuxt/content', 'nuxt-windicss', '@nuxtjs/i18n', 'nuxt-font-loader', '@nuxtjs/algolia'],
  algolia: {
    apiKey: process.env.ALGOLIA_SEARCH_API_KEY,
    applicationId: process.env.ALGOLIA_APPLICATION_ID,
    instantSearch: {
      theme: 'satellite',
    },
  },
  app: {
    head: {
      script: [
        {
          src: 'https://fast.wistia.net/assets/external/E-v1.js',
          async: true,
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
    },
  },
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json', name: 'English' },
      { code: 'ja', iso: 'ja-JP', file: 'ja.json', name: '日本語' },
    ],
    defaultLocale: 'ja',
    langDir: 'locales',
    vueI18n: {
      fallbackLocale: 'en',
    },
    detectBrowserLanguage: false,
  },

  fontLoader: {
    external: [
      {
        src: '/fonts/font-face.css',
        family: 'Lato',
        fallback: 'sans-serif',
      },
    ],
  },

  // dayjs: {
  //   locales: ['ja', 'en'],
  //   defaultLocale: ['ja'],
  // },

  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    '~/assets/css/style.css',
  ],

  build: {
    transpile: [
      '@fortawesome/vue-fontawesome',
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-brands-svg-icons',
      '@fortawesome/free-solid-svg-icons',
    ],
  },
})
