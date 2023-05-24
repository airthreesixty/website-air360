<template>
  <div>
    <ContentPage />
    <NoScript v-if="runtimeConfig.public.platform === 'prod'">
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-KFSCVPJ"
        height="0"
        width="0"
        style="display:none;visibility:hidden"
      />
    </NoScript>
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()

const route = useRoute()
const runtimeConfig = useRuntimeConfig()
const { t } = useI18n()

const title = t('ga4-migration.title')
const description = t('ga4-migration.description')

const ogImage = computed(() => {
  if (locale.value === 'en') {
    return `${runtimeConfig.public.baseUrl}/en/ga4-migration.webp`
  }
  return `${runtimeConfig.public.baseUrl}/ga4-migration.webp`
})

definePageMeta({
  layout: 'request-demo',
})

useSeoMeta({
  title,
  description,
  ogDescription: description,
  ogTitle: title,
  ogImage: ogImage.value,
  twitterCard: 'summary_large_image',
  ogUrl: `${runtimeConfig.public.baseUrl}${route.fullPath}`,
})

useHead({
  script: [
    {
      hid: 'gtmHead',
      innerHTML: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KFSCVP');`,
    },
  ],
})
</script>
