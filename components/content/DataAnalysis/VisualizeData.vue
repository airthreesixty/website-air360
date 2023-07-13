<template>
  <div class="container">
    <div class="bg-gray-50 px-4 py-8 lg:(py-15 px-6) rounded-lg md:flex md:gap-8">
      <div class="mb-5 self-center mx-auto">
        <h2 class="title2 mb-5">
          <ContentSlot :use="$slots.title" unwrap="p" />
        </h2>
        <p class="textp max-w-[500px]">
          <ContentSlot :use="$slots.description" unwrap="p" />
        </p>
      </div>
      <div>
        <div class="mb-5">
          <h3 class="title3 mb-2">
            <ContentSlot :use="$slots.title1" unwrap="p" />
          </h3><p class="textp">
            <ContentSlot :use="$slots.description1" unwrap="p" />
          </p>
        </div>
        <div>
          <h3 class="title3 mb-2">
            <ContentSlot :use="$slots.title2" unwrap="p" />
          </h3>
          <p class="textp mb-4">
            <ContentSlot :use="$slots.description2" unwrap="p" />
          </p>
          <NuxtLink :to="localePath('/data-integrations')">
            <span class="text-primary-600 cursor-pointer">Learn more</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
</script>
