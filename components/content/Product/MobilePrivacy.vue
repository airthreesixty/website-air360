<template>
  <section class="bg-white container">
    <div class="bg-gray-50 px-4 py-8 text-center rounded-3xl sm:py-16">
      <h2 class="mb-10 md:mb-15 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
        We take privacy very seriously
      </h2>
      <div class="mt-8 lg:mt-12 space-y-8 md:grid md:grid-cols-3 md:gap-12 md:space-y-0">
        <div v-for="{title, icon} in cards" :key="title">
          <fa-icon class="text-5xl lg:text-6xl text-primary-600 mb-5" :icon="['far', icon]" />
          <h3 class="mb-2 text-xl font-bold text-black-600">
            {{ title }}
          </h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const cards = [
  {
    title: 'GDPR compliant',
    icon: 'file-contract',
  },
  {
    title: 'Privacy by default approach',
    icon: 'user-secret',
  },
  {
    title: 'Opt-in / Opt-out enabled',
    icon: 'message-check',
  },
]
</script>
