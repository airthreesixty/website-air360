<template>
  <section class="container text-center">
    <h2
      :class="{'border-b-4 border-black-600 inline-block pb-2': border}"
      class="mb-4 text-center title2"
    >
      <ContentSlot :use="$slots.title" unwrap="p" />
    </h2>
    <p v-if="$slots.description" class="text-gray-500 text-center max-w-[600px] lg:max-w-[750px] mx-auto text-md lg:text-xl xl:leading-8">
      <ContentSlot :use="$slots.description" unwrap="p" />
    </p>
    <slot name="content" />
  </section>
</template>

<script setup lang="ts">
interface Props {
  border?: Boolean
}

withDefaults(defineProps<Props>(), {
  border: () => false,
})
</script>
