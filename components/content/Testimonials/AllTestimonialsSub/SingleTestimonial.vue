<template>
  <figure class="p-6 bg-gray-50 rounded dark:bg-gray-800">
    <blockquote class="text-lg text-gray-500 dark:text-gray-400">
      <p class="my-4 italic">
        "<ContentSlot :use="$slots.quote" unwrap="p" />"
      </p>
    </blockquote>
    <figcaption class="flex items-center space-x-3">
      <nuxt-img
        format="webp"
        class="w-20 object-cover"
        :src="src"
        alt="avatar"
      />
      <div class="space-y-0.5 font-medium dark:text-white">
        <div><ContentSlot :use="$slots.name" unwrap="p" /></div>
        <div class="text-sm font-light text-gray-500 dark:text-gray-400">
          <ContentSlot :use="$slots.company" unwrap="p" />
        </div>
      </div>
    </figcaption>
  </figure>
</template>

<script setup lang="ts">
interface Props {
    src: string
}

defineProps<Props>()
</script>
