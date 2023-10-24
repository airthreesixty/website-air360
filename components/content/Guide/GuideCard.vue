<template>
  <div class="md:(grid grid-cols-2) lg:grid-cols-3">
    <div v-for="(guide, index) in data" :key="index" class="col-span-1">
      <nuxt-link :to="guide._path">
        <div class="">
          <nuxt-img format="webp" :src="guide.image" class="h-70 w-full rounded-8xl object-cover hover:opacity-85 transition-opacity" />
        </div>
        <h3 class="font-bold mt-5 text-2xl hover:underline">
          {{ guide.title }}
        </h3>
      </nuxt-link>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  data: {
    type: Object,
    required: true,
  },
})
</script>
