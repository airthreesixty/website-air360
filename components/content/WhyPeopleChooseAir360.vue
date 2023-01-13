<template>
  <div class="bg-white">
    <div class="mx-auto max-w-screen-[1400px] py-16 px-4 md:py-24 lg:px-8">
      <h2 class="text-2xl font-semibold text-center text-black-600 md:text-3xl lg:text-4xl">
        <ContentSlot :use="$slots.title" />
      </h2>
      <div class="mt-10 space-y-12 md:grid md:grid-cols-3 md:space-y-0 xl:mt-14">
        <div>
          <div aria-hidden="true" class="aspect-w-3 aspect-h-2 overflow-hidden lg:aspect-w-5 lg:aspect-h-6">
            <img :src="props.imagePath1" class="h-[250px] w-full object-cover object-center">
          </div>
          <div class="px-1 md:px-2">
            <h3 class="mt-4 text-xl font-semibold text-black-600 lg:text-2xl">
              <ContentSlot :use="$slots.title1" />
            </h3>
            <p class="mt-2 text-lg text-gray-500">
              <ContentSlot :use="$slots.description1" />
            </p>
            <div class="inline-block ">
              <a href="#" class="flex text-primary-600 mt-3 items-center">
                <p>
                  {{ $t("more") }}
                </p>
                <svg
                  class="w-5 h-5 ml-1"
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
          </div>
        </div>
        <div>
          <div aria-hidden="true" class="aspect-w-3 aspect-h-2 overflow-hidden lg:aspect-w-5 lg:aspect-h-6">
            <img :src="props.imagePath2" class="h-[250px] w-full object-cover object-center">
          </div>
          <div class="px-1 md:px-2">
            <h3 class="mt-4 text-xl font-semibold text-black-600 lg:text-2xl">
              <ContentSlot :use="$slots.title2" />
            </h3>
            <p class="mt-2 text-lg text-gray-500">
              <ContentSlot :use="$slots.description2" />
            </p>
            <div class="inline-block ">
              <a href="#" class="flex text-primary-600 mt-3 items-center">
                <p>
                  {{ $t("more") }}
                </p>
                <svg
                  class="w-5 h-5 ml-1"
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
          </div>
        </div>
        <div>
          <div aria-hidden="true" class="aspect-w-3 aspect-h-2 overflow-hidden lg:aspect-w-5 lg:aspect-h-6">
            <img :src="props.imagePath3" alt="" class="h-[250px] w-full object-cover object-center">
          </div>
          <div class="px-1 md:px-2">
            <h3 class="mt-4 text-xl font-semibold text-black-600 lg:text-2xl">
              <ContentSlot :use="$slots.title3" />
            </h3>
            <p class="mt-2 text-lg text-gray-500">
              <ContentSlot :use="$slots.description3" />
            </p>
            <div class="inline-block ">
              <a href="#" class="flex text-primary-600 mt-3 items-center">
                <p>
                  {{ $t("more") }}
                </p>
                <svg
                  class="w-5 h-5 ml-1"
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  imagePath1: {
    type: String,
    required: true,
  },
  imagePath2: {
    type: String,
    required: true,
  },
  imagePath3: {
    type: String,
    required: true,
  },
})
</script>
