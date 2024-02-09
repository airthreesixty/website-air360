<template>
  <section class="relative bg-white">
    <div class="container py-8 md:py-16">
      <div
        class="px-4 mx-auto max-w-screen-sm text-center lg:px-6 mb-8 lg:mb-16"
      >
        <h1
          class="mb-4 text-3xl font-bold text-black-600 md:text-4xl"
        >
          Contact Us
        </h1>
        <p class="font-light text-gray-600 md:text-xl">
          <ContentSlot :use="$slots.subtext" unwrap="p" />
        </p>
      </div>
      <div class="grid grid-cols-1">
        <div class="col-span-2 mb-8 lg:mb-0">
          <div
            class="w-full mx-auto bg-white lg:(flex-1 max-w-[800px])"
          >
            <!-- <div
              class="rounded-lg bg-gray-100 shadow-lg px-8 py-9 lg:mt-8"
            > -->
            <!-- <div id="form">
                <Loading class="w-20 h-5 mx-auto" :is-full-page="false" />
              </div> -->
            <Widget :id="formId" class="h-100" />
            <!-- </div> -->
          </div>
        </div>
        <div
          class="grid col-span-1 gap-8 text-center grid-cols-2 py-15"
        >
          <div>
            <div
              class="flex justify-center items-center mx-auto mb-4 w-10 h-10 bg-gray-100 rounded-lg lg:h-16 lg:w-16"
            >
              <svg
                class="w-5 h-5 text-gray-600 lg:w-8 lg:h-8"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <p class="mb-2 text-xl font-bold text-black-600">
              <ContentSlot :use="$slots.companyInfo" unwrap="p" />
            </p>
            <p class="text-gray-500">
              <ContentSlot :use="$slots.companyName" unwrap="p" />
            </p>
          </div>
          <div>
            <div
              class="flex justify-center items-center mx-auto mb-4 w-10 h-10 bg-gray-100 rounded-lg lg:h-16 lg:w-16"
            >
              <svg
                class="w-5 h-5 text-gray-600 lg:w-8 lg:h-8"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <p class="mb-2 text-xl font-bold text-black-600">
              <ContentSlot :use="$slots.location" unwrap="p" />
            </p>
            <p class="text-gray-500">
              <ContentSlot :use="$slots.address" unwrap="p" />
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { locale } = useI18n()

const formId = computed(() => {
  if (locale.value === 'en') {
    return 'QysWVaIQ'
  }
  return 'h5xHQyCI'
})
</script>
