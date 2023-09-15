<template>
  <ThankYouPage>
    <div class="flex flex-col justify-center items-center text-center">
      <h1 class="page-thank-you__title">
        {{ $t('cro-checklist-thank-you.title') }}
      </h1>
      <MochiFlying class="mt-12 mb-10" />
      <p class="page-thank-you__description">
        {{ $t('cro-checklist-thank-you.desc') }}
      </p>
      <a class="page-thank-you__button" href="/promotion/cro-checklist.pdf" download="/promotion/cro-checklist.pdf" target="_blank">
        {{ $t('cro-checklist-thank-you.cta') }}
      </a>
    </div>
  </ThankYouPage>
</template>

<script setup>
const route = useRoute()
const runtimeConfig = useRuntimeConfig()

const title = 'チェックリストをダウンロードしましょう!'
const description = 'ECサイト改善チェックリストの問い合わせありがとうございます！'

useSeoMeta({
  title,
  description,
  ogDescription: description,
  ogTitle: title,
  ogImage: `${runtimeConfig.public.baseUrl}/promotion/checklist.png`,
  twitterCard: 'summary_large_image',
  ogUrl: `${runtimeConfig.public.baseUrl}${route.fullPath}`,
  robots: 'noindex, follow',
})
</script>
