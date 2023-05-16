<template>
  <NuxtLayout name="request-demo">
    <ContentPage />
  </NuxtLayout>
</template>

<script setup>
const { $i18n } = useNuxtApp()

definePageMeta({
  layout: false,
})

if ($i18n.locale._value === 'ja') {
  useHead({
    title: 'デモのリクエスト',
    meta: [
      { hid: 'description', name: 'description', content: '簡単なフォームにご記入いただければ、お客様のニーズに合わせたAir360のご提案をさせていただきます。' },
    ],
  })
} else {
  useHead({
    title: 'Request a Demo',
    meta: [
      { hid: 'description', name: 'description', content: 'Fill out the short form and book a quick call with a CRO expert so we can tailor our Air360 offer to your needs. ' },
    ],
  })
}
</script>
