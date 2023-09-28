<template>
  <section ref="target" class="bg-white container my-18">
    <div class="shadow-primary px-4 rounded-lg py-10 md:(grid grid-cols-3 items-center)">
      <h2 class="title2 mb-8 md:(mb-0 col-span-2)">
        <ContentSlot :use="$slots.title" unwrap="p" />
      </h2>
      <div class="justify-self-end">
        <a href="#" class="bg-primary-600 w-full text-white px-6 py-3 rounded-lg font-bold transition ease-in-out duration-300 hover:bg-primary-700"><ContentSlot :use="$slots.cta" unwrap="p" /></a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const target = ref()

useMotion(target, {
  initial: {
    scale: 0.8,
  },
  visibleOnce: {
    scale: 1,
    transition: {
      delay: 500,
      duration: 300,
    },
  },
})
</script>
