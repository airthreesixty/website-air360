<template>
  <div id="form" />
</template>

<script setup lang="ts">
import { createWidget } from '@typeform/embed'

interface Props {
    id: string
}

const props = defineProps<Props>()

onMounted(() => {
  createWidget(props.id, {
    container: document.querySelector('#form')!,
  })
})</script>
