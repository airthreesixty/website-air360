<template>
  <div>
    <nuxt-link :to="$localePath('/')">{{ $t("home") }}</nuxt-link>
  </div>
</template>

<script setup lang="ts">
const { $localePath } = useNuxtApp();
</script>
