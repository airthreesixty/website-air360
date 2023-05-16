// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxt/content', 'nuxt-windicss', '@nuxtjs/i18n', 'nuxt-font-loader', '@nuxtjs/algolia', '@nuxt/image-edge', 'nuxt-schema-org'],
  nitro: {
    compressPublicAssets: true,
    prerender: {
      routes: ['/sitemap.xml'],
    },
  },
  algolia: {
    apiKey: process.env.ALGOLIA_SEARCH_API_KEY,
    applicationId: process.env.ALGOLIA_APPLICATION_ID,
    instantSearch: {
      theme: 'satellite',
    },
    docSearch: {
      indexName: process.env.ALGOLIA_DOCSEARCH_INDEX_NAME,
    },
    crawler: {
      apiKey: process.env.ALGOLIA_WRITE_API_KEY ?? '',
      indexName: process.env.ALGOLIA_DOCSEARCH_INDEX_NAME ?? '',
      meta: ['title', 'description'],
      include: [/\/blog/g],
    },
  },
  runtimeConfig: {
    public: {
      algoliaSearchApiKey: process.env.ALGOLIA_SEARCH_API_KEY,
      algoliaApplicationId: process.env.ALGOLIA_APPLICATION_ID,
      algoliaDocsearchIndexName: process.env.ALGOLIA_DOCSEARCH_INDEX_NAME,
      trailingSlash: true,
      baseUrl: process.env.BASE_URL,
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
        {
          rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=M+PLUS+1p:wght@700;800;900&family=Noto+Sans+JP:wght@700;800;900&display=swap',
        },
      ],
      meta: [{ name: 'google-site-verification', content: '27ObPnDVXKchsfaXmRUOoP8wVKLPvIDb30oXYHDgPVU' }],
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
    vueI18n: {
      fallbackLocale: 'en',
    },
    detectBrowserLanguage: {
      useCookie: true,
    },
    trailingSlash: true,
    baseUrl: 'https://air360.io/',
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
