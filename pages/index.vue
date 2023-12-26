<template>
  <AsyncPage page="homepage" :use-client-only="false" />
</template>

<script setup lang="ts">
import { useSeoMeta } from '@unhead/vue'
const { locale, t } = useI18n()
const runtimeConfig = useRuntimeConfig()

onMounted(() => {
  if (locale.value === 'en') {
    useHead({
      titleTemplate: '',
      script: [
        { src: 'https://www.videoask.com/embed/embed.js' },
        {
          innerHTML: `window.VIDEOASK_EMBED_CONFIG = {
    "kind": "widget",
    "url": "https://www.videoask.com/f13f7jxmz",
    "options": {
    "widgetType": "VideoThumbnailSmall",
    "text": "Watch Product Tour",
    "backgroundColor": "#E72192",
    "position": "bottom-right",
    "dismissible": false
    }
    }`,
          tagPosition: 'bodyClose',
        },
      ],
    })
  } else {
    useHead({
      titleTemplate: '',
    })
  }
})

useSeoMeta({
  title: t('index.title'),
  description: t('index.description'),
  ogDescription: t('index.ogDescription'),
  ogTitle: t('index.ogTitle'),
  ogImage: '/card.png',
  twitterCard: 'summary_large_image',
  ogUrl: `${runtimeConfig.public.baseUrl}/${locale.value}/`,
})

useSchemaOrg([
  defineWebSite({
    name: t('index.title'),
    image: '/card.png',
  }),
  defineOrganization({
    name: t('organization.name'),
    address: {
      streetAddress: t('organization.address.streetAddress'),
      addressLocality: t('organization.address.addressLocality') || '',
      addressRegion: t('organization.address.addressRegion'),
      postalCode: t('organization.address.postalCode'),
      addressCountry: t('organization.address.addressCountry'),
    },
    sameAs: ['https://www.linkedin.com/company/air360/', 'https://twitter.com/weareair360', 'https://www.instagram.com/weareair360/'],
  }),
  defineWebPage({
    image: '/card.png',
  }),
])
</script>
