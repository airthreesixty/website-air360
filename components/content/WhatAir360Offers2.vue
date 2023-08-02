<template>
  <section class="pt-22 container md:pt-0 lg:-mt-16">
    <h2
      class="mb-2 text-3xl font-semibold text-black-600 text-center  md:text-4xl lg:text-5xl dark:text-white"
    >
      <ContentSlot :use="$slots.mainTitle" unwrap="p" />
    </h2>
    <SingleDescription
      :alt="$t('how-air360-helps2')"
      :video-src="videoSrc2"
      :poster="posterSrc2"
      icon="message-smile"
    >
      <template #subtext>
        <ContentSlot :use="$slots.subtext2" unwrap="p" />
      </template>
      <template #title>
        <ContentSlot :use="$slots.title2" unwrap="p" />
      </template>
      <template #description>
        <ContentSlot :use="$slots.description2" unwrap="p" />
      </template>
    </SingleDescription>
    <SingleDescription
      image-status="block"
      image-status2="hidden"
      :alt="$t('how-air360-helps1')"
      :video-src="videoSrc1"
      :poster="posterSrc1"
      icon="lightbulb-on"
      theme-color="#FA734C"
    >
      <template #subtext>
        <ContentSlot :use="$slots.subtext1" unwrap="p" />
      </template>
      <template #title>
        <ContentSlot :use="$slots.title1" unwrap="p" />
      </template>
      <template #description>
        <ContentSlot :use="$slots.description1" unwrap="p" />
      </template>
    </SingleDescription>
    <SingleDescription
      :image-path="image"
      :alt="$t('how-air360-helps3')"
      icon="cart-shopping-fast"
      theme-color="#3C8BFF"
      :is-shadow="false"
    >
      <template #subtext>
        <ContentSlot :use="$slots.subtext3" unwrap="p" />
      </template>
      <template #title>
        <ContentSlot :use="$slots.title3" unwrap="p" />
      </template>
      <template #description>
        <ContentSlot :use="$slots.description3" unwrap="p" />
      </template>
    </SingleDescription>
  </section>
</template>

<script setup lang="ts">
const { locale } = useI18n()

const videoSrc1 = computed(() => {
  return locale.value === 'en' ? '/en/videos/opaVideo.mp4' : '/videos/opaVideo.mp4'
})

const posterSrc1 = computed(() => {
  return locale.value === 'en' ? '/en/smartDescription.webp' : '/smartDescription.webp'
})
const videoSrc2 = computed(() => {
  return locale.value === 'en' ? '/en/videos/sessionReplay.mp4' : '/videos/sessionReplay.mp4'
})

const posterSrc2 = computed(() => {
  return locale.value === 'en' ? '/en/sessionReplay.jpeg' : '/sessionReplay.webp'
})

const image = computed(() => {
  return locale.value === 'en' ? '/en/product/analyze.png' : '/analyze.png'
})
</script>
