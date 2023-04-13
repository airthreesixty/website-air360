<template>
  <section class="bg-white">
    <div
      class="max-w-screen-[1400px] px-6 py-7 mx-auto md:flex md:justify-between md:items-center lg:py-13 lg:px-8"
    >
      <div :class="`flex justify-center md:${props.imageStatus} md:mt-0 md:flex md:w-[58%] md:p-5`">
        <nuxt-img v-if="!isVideo" format="webp" :src="props.imagePath" :alt="props.alt" class="rounded-lg shadow-lg my-auto w-full object-cover" />
        <video
          v-if="isVideo"
          autoplay
          class="shadow-lg my-auto w-full rounded-lg object-cover"
          loop
          muted
          playsinline
        >
          <source :data-src="videoSrc" type="video/mp4" :src="videoSrc">
        </video>
      </div>
      <div class="md:w-[37%] md:py-7">
        <!-- <p class="font-bold text-base my-2 lg:text-lg" :class="subtextColor">
          <ContentSlot :use="$slots.subtext" unwrap="p" />
        </p> -->
        <img :src="icon" alt="icon" class="w-7 md:w-8 lg:w-10 mt-4">
        <h3
          class="border-deco test mb-4 mt-4 text-xl font-semibold text-black-600 text-left md:text-2xl lg:text-3xl dark:text-white"
        >
          <ContentSlot :use="$slots.title" unwrap="p" />
        </h3>
        <p
          class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-base lg:text-xl xl:leading-8 dark:text-gray-400"
        >
          <ContentSlot :use="$slots.description" unwrap="p" />
        </p>
      </div>
      <div :class="`hidden md:${props.imageStatus2} md:mt-0 md:flex md:w-[58%] md:p-5`">
        <nuxt-img v-if="!isVideo" format="webp" :src="props.imagePath" :alt="props.alt" class="rounded-lg shadow-lg my-auto w-full object-cover" />
        <video
          v-if="isVideo"
          autoplay
          class="shadow-lg my-auto w-full rounded-lg object-cover"
          loop
          muted
          playsinline
        >
          <source :data-src="videoSrc" type="video/mp4" :src="videoSrc">
        </video>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  imagePath: {
    type: String,
    required: true,
  },
  imageStatus: {
    type: String,
    default: 'hidden',
  },
  imageStatus2: {
    type: String,
    default: 'block',
  },
  subtextColor: {
    type: String,
    default: 'text-primary-600',
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
})

const theme = {
  backgroundColor: props.themeColor,
}
</script>

<style lang="postcss">
.border-deco {
  @apply after:content-[''] after:block after:w-25 after:h-[5px] after:rounded-[7px] after:static after:mt-[30px] after:;
}

.test:after {
  background-color: v-bind('theme.backgroundColor');
}
</style>
