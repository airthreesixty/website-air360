<template>
  <section class="bg-white">
    <div class="max-w-screen-[1400px] mx-auto pb-16 pt-10 px-4 lg:px-8">
      <div
        class="overflow-hidden rounded-lg bg-primary-600 shadow-xl"
      >
        <div
          class="px-6 pt-10 pb-12 md:px-12 md:py-14 lg:py-16 xl:py-20"
        >
          <div class="md:flex md:items-center">
            <h2
              class="text-2xl font-bold tracking-tight text-center text-white md:text-left md:flex-1 md:text-3xl lg:text-4xl"
            >
              <ContentSlot :use="$slots.title" />
            </h2>
            <NuxtLink :to="$localePath('/request-demo')">
              <div class="flex justify-center items-center flex-1">
                <button
                  class="mt-8 rounded-lg border border-transparent bg-white px-6 py-3 text-base font-medium text-primary-600 shadow transition ease-in-out duration-300 md:mt-0 md:ml-2 hover:bg-primary-100"
                >
                  {{ $t("try-air360") }}
                </button>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { $localePath } = useNuxtApp()
</script>
