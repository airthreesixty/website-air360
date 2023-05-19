<template>
  <section>
    <div class="bg-gradient-head">
      <div class="container mx-auto py-15 lg:py-20">
        <h1 class="text-white font-semibold text-2xl md:text-3xl lg:text-4xl">
          <ContentSlot :use="$slots.title" unwrap="p" />
        </h1>
        <div class="md:flex md:items-center md:mt-12 lg:mt-18 md:gap-x-8">
          <div class="text-white my-10 md:my-0 lg:text-lg">
            <p class="mb-4">
              <ContentSlot :use="$slots.description1" unwrap="p" />
            </p>
            <p class="my-4">
              <ContentSlot :use="$slots.description2" unwrap="p" />
            </p>
            <p class="my-4">
              <ContentSlot :use="$slots.description3" unwrap="p" />
            </p>
          </div>
          <div class="max-w-[700px]">
            <video controls controlslist="nodownload">
              <source :data-src="videoSrc" :src="videoSrc" type="video/mp4">
            </video>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const { locale } = useI18n()

const videoSrc = computed(() => {
  if (locale.value === 'en') {
    return '/en/videos/GA4-migration-video.mp4'
  } else {
    return '/videos/GA4-migration-video.mp4'
  }
})
</script>

<style scoped>
.bg-gradient-head {
    background-image: linear-gradient(101.87deg, #2D92E9 4.15%, #644AD5 22.36%, #C141AC 41.56%, #E72192 61.75%, #F04D66 78.49%, #FD7043 98.68%);
}
</style>
