<template>
  <section class="bg-white">
    <div class="max-w-screen-[1400px] mx-auto pb-16 pt-10 px-4 lg:px-8">
      <div class="overflow-hidden rounded-lg bg-primary-600 shadow-xl lg:grid lg:grid-cols-2 lg:gap-4">
        <div class="px-6 pt-10 pb-12 md:px-16 md:pt-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
          <div class="lg:self-center">
            <h2 class="text-2xl font-bold tracking-tight text-white md:text-3xl lg:text-4xl">
              <ContentSlot :use="$slots.title" />
            </h2>
            <div>
              <p class="mt-4 text-md leading-6 text-primary-100 lg:text-xl">
                <ContentSlot :use="$slots.description" />
              </p>
            </div>
            <NuxtLink :to="$localePath('/request-demo')">
              <button class="mt-8 rounded-lg border border-transparent bg-white px-6 py-3 text-base font-medium text-primary-600 shadow transition ease-in-out duration-300 hover:bg-primary-100">
                Air360を試してみる
              </button>
            </NuxtLink>
          </div>
        </div>
        <div class="aspect-w-5 aspect-h-3 -mt-6 z-0 md:aspect-w-2 md:aspect-h-1">
          <nuxt-img format="webp" src="/whatIsAir360.png" class="translate-x-6 translate-y-6 transform rounded-md object-cover object-left-top md:translate-x-16 lg:translate-y-20" alt="App screenshot" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { $localePath } = useNuxtApp()
</script>
