<template>
  <ContentDoc />
</template>

<script setup>
const { locale } = useI18n()
const route = useRoute()
const runtimeConfig = useRuntimeConfig()
const { t } = useI18n()

const title = t('content-gallery.title')
const description = t('content-gallery.description')

const ogImage = computed(() => {
  if (locale.value === 'en') {
    return `${runtimeConfig.public.baseUrl}/five-conversion-blockers.webp`
  }
  return `${runtimeConfig.public.baseUrl}/promotion/checklist.png`
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
</script>

<style lang="postcss">
.border-deco-gallery {
  @apply after:(content-[''] block w-25 h-[5px] bg-[#E74B91] rounded-[7px] static my-5);
}

.card:hover img {
  transform: scale(0.95);
  transition-duration: 300ms;
}
</style>
