<template>
  <div :id="alphabet.toLowerCase()" class="my-5 block pt-[57px] -mt-[57px] md:(pt-[97px] -mt-[97px])">
    <div class="text-6xl mb-5">
      {{ alphabet }}
    </div>
    <div class="flex flex-col gap-y-5">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
    alphabet: string
}

defineProps<Props>()
</script>

<style scoped>
.alphabet-title {
    display: block;
    padding-top: 97px;
    margin-top: -97px;
}
</style>
