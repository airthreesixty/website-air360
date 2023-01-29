<template>
  <div class="vl-parent">
    <loading
      v-model:active="isLoading"
      loader="dots"
      color="#E74B91"
    />
  </div>
</template>

<script setup lang="ts">
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'

const isLoading = ref(true)
</script>
