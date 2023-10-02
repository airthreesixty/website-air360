<template>
  <ThankYouPage>
    <div class="flex flex-col justify-center items-center text-center">
      <h1 class="page-thank-you__title">
        {{ $t('cro-roadmap-thank-you.title') }}
      </h1>
      <MochiFlying class="mt-12 mb-10" />
      <p class="page-thank-you__description">
        {{ $t('cro-roadmap-thank-you.desc') }}
      </p>
      <a class="page-thank-you__button" :href="href" :download="href" target="_blank">
        {{ $t('cro-roadmap-thank-you.cta') }}
      </a>
    </div>
  </ThankYouPage>
</template>

<script setup>
const route = useRoute()
const runtimeConfig = useRuntimeConfig()
const { t, locale } = useI18n()

const title = t('cro-roadmap-thank-you.title')
const description = t('cro-roadmap-thank-you.desc')

const imgSrc = computed(() => {
  if (locale.value === 'en') {
    return '/en/promotion/roadmapHeroPoster.png'
  }
  return '/en/promotion/roadmapHeroPoster.png'
})

const href = computed(() => {
  if (locale.value === 'en') {
    return '/en/promotion/CRORoadmapTemplate.xlsx'
  }
  return '/en/promotion/CRORoadmapTemplate.xlsx'
})

useSeoMeta({
  title,
  description,
  ogDescription: description,
  ogTitle: title,
  ogImage: `${runtimeConfig.public.baseUrl}${imgSrc.value}`,
  twitterCard: 'summary_large_image',
  ogUrl: `${runtimeConfig.public.baseUrl}${route.fullPath}`,
  robots: 'noindex, follow',
})
</script>
