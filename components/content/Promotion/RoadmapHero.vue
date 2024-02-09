<template>
  <section class="bg-white py-10 lg:py-14 overflow-hidden">
    <div class="text-center container md:(grid grid-cols-2 items-center justify-around gap-3)">
      <div class="relative max-w-[500px] mx-auto">
        <nuxt-img :src="src" class="mb-8" />
      </div>
      <div class="p-5 lg:p-10">
        <Widget id="VL6oTlqs" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  src: string
}

defineProps<Props>()
</script>
