<template>
  <section ref="target" class="bg-white">
    <div
      class="container py-7 md:h-full md:flex md:justify-between md:items-center lg:py-13"
    >
      <div :class="`flex justify-center md:${imageStatus} md:mt-0 md:flex md:w-[58%] md:p-5`">
        <nuxt-img
          v-if="!isVideo"
          format="webp"
          :src="imagePath"
          :alt="alt"
          loading="lazy"
          sizes="xl:1390px lg:1034px md:754px sm:1184px xs:277px"
          class="rounded-lg my-auto w-full object-cover"
          :class="{'shadow-lg': isShadow}"
        />
        <video
          v-else-if="showVideo"
          autoplay
          class="shadow-lg my-auto w-full rounded-lg object-cover"
          loop
          muted
          playsinline
          :poster="poster"
        >
          <source :data-src="videoSrc" type="video/mp4" :src="videoSrc">
        </video>
      </div>
      <div class="md:w-[37%] md:py-7">
        <fa-icon class="text-4xl lg:text-5xl mt-4 icon-color" :icon="['far', icon]" />
        <h3
          class="border-deco test mb-4 mt-4 text-xl font-semibold text-black-600 text-left md:text-2xl lg:text-3xl"
        >
          <ContentSlot :use="$slots.title" unwrap="p" />
        </h3>
        <div class="max-w-2xl mt-5 font-light prose text-gray-500 text-lg lg:text-xl xl:leading-8">
          <slot name="description" />
        </div>

        <!-- <slot name="dropdowns" /> -->
        <Dropdowns>
          <template #dropdowns>
            <slot name="dropdowns" />
          </template>
        </Dropdowns>
      </div>
      <div :class="`hidden md:${imageStatus2} md:mt-0 md:flex md:w-[58%] md:p-5`">
        <nuxt-img
          v-if="!isVideo"
          format="webp"
          :src="imagePath"
          :alt="alt"
          loading="lazy"
          sizes="xl:1390px lg:1034px md:754px sm:1184px xs:277px"
          class="rounded-lg w-full object-cover"
          :class="{'shadow-lg': isShadow}"
        />
        <video
          v-else-if="showVideo"
          autoplay
          class="shadow-lg my-auto w-full rounded-lg object-cover"
          loop
          muted
          playsinline
          :poster="poster"
        >
          <source :data-src="videoSrc" type="video/mp4" :src="videoSrc">
        </video>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useIntersectionObserver } from '@vueuse/core'

const props = defineProps({
  imagePath: {
    type: String,
    default: '',
  },
  imageStatus: {
    type: String,
    default: 'hidden',
  },
  imageStatus2: {
    type: String,
    default: 'block',
  },
  alt: {
    type: String,
    default: 'Picture',
  },
  isVideo: {
    type: Boolean,
    default: false,
  },
  videoSrc: {
    type: String,
    default: '',
  },
  icon: {
    type: String,
    required: true,
  },
  themeColor: {
    type: String,
    default: '#e74b91',
  },
  poster: {
    type: String,
    default: '',
  },
  isShadow: {
    type: Boolean,
    default: true,
  },
})

const theme = {
  backgroundColor: props.themeColor,
  color: props.themeColor,
}
const target = ref(null)
const showVideo = ref(false)

useIntersectionObserver(
  target,
  ([{ isIntersecting }]) => {
    if (!showVideo.value && isIntersecting) {
      showVideo.value = true
    }
  },
)
</script>

<style lang="postcss">
.border-deco {
  @apply after:content-[''] after:block after:w-25 after:h-[4px] after:rounded-[7px] after:static after:mt-[30px] after:;
}

.test:after {
  background-color: v-bind('theme.backgroundColor');
}

.icon-color {
  color: v-bind('theme.color');
}
</style>
