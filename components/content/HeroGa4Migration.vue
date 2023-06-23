<template>
  <section>
    <div class="bg-gradient-head">
      <div class="container py-15 lg:py-20">
        <h1 class="text-white font-semibold text-2xl md:text-3xl lg:text-4xl">
          <ContentSlot :use="$slots.title" unwrap="p" />
        </h1>
        <div class="md:flex md:items-center md:mt-12 lg:mt-18 md:gap-x-8">
          <div class="text-white prose my-10 md:flex-1  md:my-0 lg:text-lg">
            <div class="md:block" :class="{hidden: locale === 'ja'}">
              <slot name="description" />
            </div>
            <div class="md:hidden">
              <slot name="mobileDescription" />
            </div>
          </div>
          <div class="max-w-[700px] flex-1">
            <video v-if="locale === 'en'" controls controlslist="nodownload" :poster="posterSrc" class="rounded-lg">
              <source :data-src="videoSrc" :src="videoSrc" type="video/mp4">
            </video>
            <nuxt-img v-if="locale === 'ja'" src="/analyze.png" class="rounded-lg shadow-lg" format="webp" />
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

const posterSrc = computed(() => {
  if (locale.value === 'en') {
    return '/en/ga4-migration.webp'
  } else {
    return '/ga4-migration.webp'
  }
})
</script>

<style scoped>
.bg-gradient-head {
  background-image: linear-gradient(101.87deg, #2D92E9 4.15%, #644AD5 22.36%, #C141AC 41.56%, #E72192 61.75%, #F04D66 78.49%, #FD7043 98.68%);
}
</style>
