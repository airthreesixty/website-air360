<template>
  <div class="my-5 py-8 px-4">
    <div class="flex flex-col md:flex-row justify-between items-center shadow-primary rounded-lg px-4 py-6 max-w-[800px] mx-auto">
      <h2 class="text-black-600 text-center text-2xl font-bold my-4">
        <ContentSlot :use="$slots.title" unwrap="p" />
      </h2>
      <div>
        <ButtonPrimary theme="primary" :slug="slug">
          <ContentSlot :use="$slots.cta" unwrap="p" />
        </ButtonPrimary>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  slug: string
}

defineProps<Props>()
</script>

<style scoped>
.shadow-primary {
    box-shadow: 0 0 0 2px rgba(231,75,145,1), 8px 8px 0 0 rgba(231,75,145,1);
}
</style>
