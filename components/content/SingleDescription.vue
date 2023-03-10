<template>
  <section class="dark:bg-gray-900" :class="props.bgColor">
    <div
      class="grid max-w-screen-[1400px] px-4 py-10 mx-auto md:gap-8 md:py-16 md:grid-cols-12 lg:py-18 lg:px-8"
    >
      <div :class="`flex justify-center md:${props.imageStatus} md:mt-0 md:col-span-7 md:flex md:mx-auto lg:w-10/12`">
        <nuxt-img format="webp" :src="props.imagePath" :alt="props.alt" class="rounded-lg shadow-lg my-auto h-46 w-80 object-cover lg:h-69 lg:w-120 xl:h-76 xl:w-132" />
      </div>
      <div class="md:col-span-5">
        <p class="font-bold text-base my-2 lg:text-lg" :class="subtextColor">
          <ContentSlot :use="$slots.subtext" unwrap="p" />
        </p>
        <h3
          class="mb-4 mt-[22px] text-xl font-semibold text-black-600 text-left border-deco md:text-2xl lg:text-3xl dark:text-white"
        >
        <ContentSlot :use="$slots.title" unwrap="p" />
        </h3>
        <p
          class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-base lg:text-xl xl:leading-8 dark:text-gray-400"
        >
        <ContentSlot :use="$slots.description" unwrap="p" />
        </p>
        <a
          href="#"
          class="items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-400 transition ease-in-out duration-300 hover:bg-blue-500"
          :class="buttonStatus"
        >
          {{ $t("more") }}
          <svg
            class="w-5 h-5 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </div>
      <div :class="`hidden md:${props.imageStatus2} md:mt-0 md:col-span-7 md:flex md:mx-auto lg:w-10/12`">
        <nuxt-img format="webp" :src="props.imagePath" :alt="props.alt" class="rounded-lg shadow-lg my-auto h-46 w-80 object-cover lg:h-69 lg:w-120 xl:h-76 xl:w-132" />
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  bgColor: {
    type: String,
    default: 'white',
  },
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
  buttonStatus: {
    type: String,
    default: 'inline-flex',
  },
  subtextColor: {
    type: String,
    default: 'text-primary-600',
  },
  alt: {
    type: String,
    default: 'Picture',
  },
})
</script>

<style lang="postcss">
.border-deco {
  @apply after:content-[''] after:block after:w-25 after:h-[5px] after:rounded-[7px] after:static after:mt-[30px] after:bg-primary-600;
}
</style>
