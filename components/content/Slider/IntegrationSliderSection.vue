<template>
  <div class="max-w-[1400px] mx-auto py-10 md:py-16 overflow-x-hidden">
    <div class="">
      <div class="md:(grid grid-cols-3 items-center)">
        <div class="container md:col-span-1">
          <h2 class="title2 mb-6">
            <ContentSlot :use="$slots.title" unwrap="p" />
          </h2>
          <p class="textp mb-2">
            <ContentSlot :use="$slots.description" unwrap="p" />
          </p>
          <NuxtLink :to="slug" class="text-primary-600 font-bold hover:opacity-80">
            <ContentSlot :use="$slots.more" unwrap="p" />
          </NuxtLink>
        </div>
        <div class="mt-6 md:(col-span-2 mt-0)">
          <IntegrationSlider />
        </div>
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
.bg-logo {
    background: #A2E2FE;
    bottom: 0;
    height: 100%;
    left: -2rem;
    position: absolute;
    right: -2rem;
    top: 0;
    width: calc(100vw + 2rem);
    z-index: -1;
}

.bg-logo::before {
    background-color: inherit;
    border-radius: 20px 20px 0 0;
    content: "";
    display: block;
    height: 7rem;
    left: 0;
    position: absolute;
    right: 0;
    top: -1rem;
    transform: skewX(-5deg) skewY(-4deg);
    transform-origin: left bottom;
    width: 100vw;
}
</style>
