<template>
  <section class="bg-white container" :class="{'mt-10 md:(mt-15 mb-10)': dark}">
    <div :class="{'bg-gray-50 rounded-3xl': bgGray, 'bg-gray-800 rounded-3xl': dark}" class="py-8 px-4 mx-auto text-center sm:py-16 lg:px-6">
      <h2 class="mb-4 title2 max-w-[900px] mx-auto" :class="{'text-white':dark}">
        <ContentSlot :use="$slots.title" unwrap="p" />
      </h2>
      <div class="mt-8 lg:mt-12 space-y-8 md:grid md:grid-cols-3 md:gap-12 md:space-y-0">
        <slot name="block" :dark="dark" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  icon1: string
  icon2: string
  icon3: string
  bgGray?: boolean
  dark?: boolean
}

withDefaults(defineProps<Props>(), {
  bgGray: false,
  dark: false,
})
</script>
