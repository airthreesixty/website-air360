// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxt/content', 'nuxt-windicss', '@nuxtjs/i18n', 'nuxt-font-loader', '@nuxtjs/algolia', '@nuxt/image-edge', '@nuxtjs/robots'],
  nitro: {
    compressPublicAssets: true,
    prerender: {
      crawlLinks: true,
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
      siteUrl: 'https://jp.air360.io/',
      siteName: 'Air360 - eコマースに最適なUX分析ツール',
      siteDescription: 'Air360はウェブサイト上の顧客体験を分析するツールです。 データによって隠れているユーザーの行動を明らかにし、それに基づいてコンバージョン率を改善します。',
      language: 'ja-JP',
      strict: false,
    },
  },
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon2.png' }],
      meta: [{ name: 'google-site-verification', content: '27ObPnDVXKchsfaXmRUOoP8wVKLPvIDb30oXYHDgPVU' }],
      htmlAttrs: {
        lang: 'ja',
      },
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
    trailingSlash: true,
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
  extends: [
    'nuxt-seo-kit',
  ],
})
