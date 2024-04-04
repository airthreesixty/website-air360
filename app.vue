<template>
  <NuxtLayout>
    <NuxtPage />
    <!-- <NoScript v-if="runtimeConfig.public.platform === 'prod'">
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-WNS682V"
        height="0"
        width="0"
        style="display:none;visibility:hidden"
      />
    </NoScript> -->
  </NuxtLayout>
</template>

<script setup lang="ts">
import '@typeform/embed/build/css/widget.css'

const { locales } = useI18n()
const route = useRoute()
const { ssrContext } = useNuxtApp()

useHead({
  titleTemplate: 'Air360 - %s',
})

const runtimeConfig = useRuntimeConfig()

// Redirect to the english if we don't have the locale in the URL and we are in the browser
const routeMatch = route.fullPath.match(new RegExp(`^/${locales.value.map(l => l.code).join('|')}/`))
if (routeMatch === null && !ssrContext) {
  document.location = `/en${route.fullPath}`
}
</script>
