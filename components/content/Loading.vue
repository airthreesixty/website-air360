<template>
  <div class="vl-parent">
    <loading
      v-model:active="isLoading"
      :can-cancel="true"
      :on-cancel="onCancel"
      :is-full-page="fullPage"
    />

    <label><input v-model="fullPage" type="checkbox">Full page?</label>
    <button @click.prevent="doAjax">
      fetch Data
    </button>
  </div>
</template>

<script setup lang="ts">
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'

const isLoading = ref(false)
const fullPage = ref(true)

const doAjax = () => {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
  }, 3000)
}

const onCancel = () => {
  console.log('User cancelled the loader.')
}
</script>
