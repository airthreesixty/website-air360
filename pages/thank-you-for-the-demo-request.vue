<template>
  <ThankYouPage>
    <div class="flex flex-col justify-center items-center text-center">
      <h1 class="page-thank-you__title">
        <span class="inline-block">{{ $t('thank-you.title') }}</span>
      </h1>
      <MochiFlying class="mt-12 mb-10" />
      <p class="page-thank-you__description">
        {{ $t('thank-you.p1') }}
      </p>
      <p class="page-thank-you__description pt-5">
        {{ $t('thank-you.p2') }}
      </p>
    </div>
  </ThankYouPage>
</template>

<script setup lang="ts">
const route = useRoute()
const runtimeConfig = useRuntimeConfig()
const { t } = useI18n()

const title = t('thank-you-demo-request.title')
const description = t('thank-you-demo-request.description')

useSeoMeta({
  title,
  description,
  ogDescription: description,
  ogTitle: title,
  ogUrl: `${runtimeConfig.public.baseUrl}${route.fullPath}`,
  robots: 'noindex, follow',
})
</script>
