<template>
  <NuxtLayout>
    <NuxtPage />
    <NoScript v-if="runtimeConfig.public.platform === 'prod'">
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-WNS682V"
        height="0"
        width="0"
        style="display:none;visibility:hidden"
      />
    </NoScript>
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: 'Air360 - %s',
})

const runtimeConfig = useRuntimeConfig()
</script>
