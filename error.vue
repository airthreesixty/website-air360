<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="container py-8 mx-auto lg:py-16">
      <div class="mx-auto max-w-screen-sm text-center">
        <div class="flex justify-center">
          <img src="/favicon.webp" alt="mochi" class="w-25 lg:w-45">
        </div>
        <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
          {{ error?.statusCode }}
        </h1>
        <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
          {{ error?.statusMessage }}
        </p>
        <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
          {{ $t('error-message') }}
        </p>
        <button class="inline-flex text-white bg-primary-600 hover:bg-primary-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4" @click="handleError">
          {{ $t('home') }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps({
  // eslint-disable-next-line vue/require-default-prop
  error: Object,
})

const handleError = () => clearError({ redirect: '/' })
</script>
