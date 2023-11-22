<template>
  <section class="container pt-20 md:pt-16">
    <h2
      class="mb-2 title2 text-black-600 text-center"
    >
      <ContentSlot :use="$slots.mainTitle" unwrap="p" />
    </h2>
    <SingleDescription
      :video-src="videoSrc1"
      :poster="posterSrc1"
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
      image-status="block"
      image-status2="hidden"
      :video-src="videoSrc2"
      :poster="posterSrc2"
      theme-color="#FA734C"
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
      :video-src="videoSrc3"
      :poster="posterSrc3"
      theme-color="#3C8BFF"
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
    <SingleDescription
      image-status="block"
      image-status2="hidden"
      :video-src="videoSrc4"
      :poster="posterSrc4"
    >
      <template #subtext>
        <ContentSlot :use="$slots.subtext4" unwrap="p" />
      </template>
      <template #title>
        <ContentSlot :use="$slots.title4" unwrap="p" />
      </template>
      <template #description>
        <ContentSlot :use="$slots.description4" unwrap="p" />
      </template>
    </SingleDescription>
  </section>
</template>

<script setup lang="ts">
const { locale } = useI18n()

const videoSrc1 = computed(() => {
  return locale.value === 'en' ? '/en/videos/1.mp4' : '/videos/collect.mp4'
})

const posterSrc1 = computed(() => {
  return locale.value === 'en' ? '/en/posters/1.png' : '/posters/collect.png'
})

const videoSrc2 = computed(() => {
  return locale.value === 'en' ? '/en/videos/2.mp4' : '/videos/define.mp4'
})
const posterSrc2 = computed(() => {
  return locale.value === 'en' ? '/en/posters/2.png' : '/posters/define.png'
})

const videoSrc3 = computed(() => {
  return locale.value === 'en' ? '/en/videos/3.mp4' : '/videos/analyze.mp4'
})

const posterSrc3 = computed(() => {
  return locale.value === 'en' ? '/en/posters/3.png' : '/posters/analyze.png'
})
const videoSrc4 = computed(() => {
  return locale.value === 'en' ? '/en/videos/4.mp4' : '/videos/activate.mp4'
})

const posterSrc4 = computed(() => {
  return locale.value === 'en' ? '/en/posters/4.png' : '/posters/activate.png'
})
</script>
