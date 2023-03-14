<template>
  <section class="bg-white dark:bg-gray-900">
    <div
      class="grid max-w-screen-[1400px] px-4 py-12 mx-auto md:gap-4 md:grid-cols-2 lg:gap-8 xl:gap-0 lg:py-16 lg:px-8 lg:grid-cols-12"
    >
      <div class="pb-6 md:hidden lg:mt-0 lg:col-span-5">
        <nuxt-img
          format="webp"
          src="https://www.air360.io/wp-content/uploads/2022/08/hero-illustration.webp"
          alt="hero image"
          width="583"
          height="349"
        />
      </div>
      <div class="mr-auto place-self-center lg:col-span-7 md:flex-1">
        <h1
          class="max-w-2xl mb-6 font-bold text-2xl bg-gradient-to-r from-[#6278DF] to-blue-[#3DDC97] bg-clip-text text-transparent lg:mb-8 md:text-3xl lg:text-4xl dark:text-gray-400"
        >
          <ContentSlot :use="$slots.title" unwrap="p" />
        </h1>
        <h2
          class="max-w-2xl mb-1 font-light text-gray-500 md:text-base lg:mb-8 lg:text-xl xl:leading-8 dark:text-gray-400"
        >
          <ContentSlot :use="$slots.description" unwrap="p" />
        </h2>
        <div class="pt-3  md:items-center">
          <NuxtLink :to="$localePath('/request-demo')">
            <button
              class="text-white bg-primary-600 text-base font-bold w-full mt-5 inline-block transition ease-in-out duration-300 hover:bg-primary-700 font-medium rounded-lg text-sm px-6 py-3 mr-2 mb-2 md:w-1/2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              {{ $t("request-demo") }}
            </button>
          </NuxtLink>
          <!-- <button
            class="text-white bg-blue-400 text-base font-bold w-full mt-3 block transition ease-in-out duration-300 md:mt-5 hover:bg-blue-500 font-medium rounded-lg text-sm px-6 py-3 mb-2 md:w-1/2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            <ContentSlot :use="$slots.button1" />
          </button> -->
        </div>
      </div>
      <div class="hidden md:block md:flex lg:mt-0 lg:col-span-5">
        <nuxt-img
          src="https://www.air360.io/wp-content/uploads/2022/08/hero-illustration.webp"
          alt="Hero image"
          class="object-scale-down"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { $localePath } = useNuxtApp()
</script>

<style scoped>
img {
  transform: scale(-1, 1)
}
</style>
