import crawler from './crawler'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    'nuxt-windicss',
    '@nuxtjs/i18n',
    'nuxt-font-loader',
    '@nuxtjs/algolia',
    '@nuxt/image',
    'nuxt-schema-org',
    'nuxt-simple-sitemap',
    '@vueuse/motion/nuxt',
    'vue3-carousel-nuxt',
  ],
  algolia: {
    apiKey: process.env.ALGOLIA_SEARCH_API_KEY,
    applicationId: process.env.ALGOLIA_APPLICATION_ID,
    crawler: {
      apiKey: process.env.ALGOLIA_WRITE_API_KEY ?? '',
      indexName: process.env.ALGOLIA_DOCSEARCH_INDEX_NAME ?? '',
      meta: crawler,
      include: [/^\/\w{2}\/blog\/.*(?<!\.(json|js|html))$/g],
    },
  },
  nitro: {
    prerender: {
      failOnError: false,
    },
  },
  runtimeConfig: {
    public: {
      algoliaSearchApiKey: process.env.ALGOLIA_SEARCH_API_KEY,
      algoliaApplicationId: process.env.ALGOLIA_APPLICATION_ID,
      algoliaDocsearchIndexName: process.env.ALGOLIA_DOCSEARCH_INDEX_NAME,
      trailingSlash: true,
      baseUrl: process.env.BASE_URL,
      appUrl: process.env.APP_URL,
      platform: process.env.PLATFORM,
      recaptchaSiteKey: process.env.RECAPTCHA_SITE_KEY,
      recaptchaSiteKeyLocalhost: process.env.RECAPTCHA_SITE_KEY_LOCALHOST,
    },
  },
  schemaOrg: {
    host: process.env.BASE_URL,
  },
  app: {
    head: {
      link: [
        {
          rel: 'icon', type: 'image/x-icon', href: '/favicon2.png',
        },
      ],
      meta: [{ name: 'google-site-verification', content: '27ObPnDVXKchsfaXmRUOoP8wVKLPvIDb30oXYHDgPVU' }],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/gh/manucaralmo/GlowCookies@3.1.8/src/glowCookies.min.js',
        },
        {
          src: 'https://cdn.air360tracker.net/v2/air360.ab.min.js',
          type: 'module',
          body: true,
        },
      ],
    },
  },
  i18n: {
    strategy: 'prefix',
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json', name: 'English' },
      { code: 'ja', iso: 'ja-JP', file: 'ja.json', name: '日本語' },
    ],
    defaultLocale: 'en',
    langDir: 'locales',
    detectBrowserLanguage: false,
    // detectBrowserLanguage: {
    //   useCookie: true,
    //   redirectOn: 'root',
    //   alwaysRedirect: true,
    // },
    trailingSlash: true,
    baseUrl: process.env.BASE_URL,
    vueI18n: './i18n.config.ts',
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

  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    '~/assets/css/style.css',
    'vue-final-modal/style.css',
  ],

  build: {
    transpile: [
      '@fortawesome/vue-fontawesome',
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-brands-svg-icons',
      '@fortawesome/free-solid-svg-icons',
    ],
  },
  image: {
    provider: 'ipx',
  },

  sitemap: {
    // autoAlternativeLangPrefixes: true,
    // dynamicUrlsApiEndpoint: '/api/_sitemap-blog-urls',
    exclude: [
      /.*-thank-you\/$/,
      /generate-images/,
    ],
  },
  site: {
    url: process.env.BASE_URL,
    trailingSlash: true,
  },
})
