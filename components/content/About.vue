<template>
  <div class="container py-10 lg:py-15">
    <component :is="titleTag" class="mt-3 mb-10" :class="{title1: titleTag === 'h1', title2: titleTag === 'h2', }">
      <ContentSlot :use="$slots.title" unwrap="p" />
    </component>

    <div class="relative overflow-x-auto">
      <table class="w-full text-sm text-left">
        <tbody>
          <slot name="tableRow" />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  titleTag: string;
}

defineProps<Props>()
</script>
