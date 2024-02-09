<template>
  <section class="bg-white">
    <div class="container pt-8 sm:pt-16">
      <h2 class="title2 text-center mb-4">
        <ContentSlot :use="$slots.title" unwrap="p" />
      </h2>
      <p class="textp text-center max-w-[530px] mx-auto">
        <ContentSlot :use="$slots.description" unwrap="p" />
      </p>
      <div class="flex justify-center">
        <nuxt-img format="webp" :src="src" class="hidden sm:block" />
        <nuxt-img format="webp" :src="srcMobile" class="sm:hidden" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
    src: string
    srcMobile: string
}

defineProps<Props>()
</script>
