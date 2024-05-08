<template>
  <div class="vl-parent">
    <loading
      v-model:active="isLoading"
      loader="dots"
      :color="props.color"
      background-color="transparent"
      :is-full-page="isFullPage"
    />
  </div>
</template>

<script setup lang="ts">
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'

const isLoading = ref(true)

interface Props {
  isFullPage: boolean,
  color: string
}

const props = withDefaults(defineProps<Props>(), {
  color: '#E74B91',
})
</script>
