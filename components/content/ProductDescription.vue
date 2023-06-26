<template>
  <section ref="target" class="bg-white">
    <div class="container py-7 lg:py-13">
      <div class="text-center">
        <span class="text-primary-600 font-bold">
          <ContentSlot :use="$slots.subtext" unwrap="p" />
        </span>
        <h2 class="title2 mb-5 mt-2">
          <ContentSlot :use="$slots.title" unwrap="p" />
        </h2>
        <p class="text-gray-500 max-w-[600px] mx-auto lg:text-lg">
          <ContentSlot :use="$slots.description" unwrap="p" />
        </p>
        <slot />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useIntersectionObserver } from '@vueuse/core'

interface Props {
  order: number
}

const props = withDefaults(defineProps<Props>(), {
  order: -1,
})

const order = {
  order: props.order,
}

const target = ref(null)
const showVideo = ref(false)

useIntersectionObserver(
  target,
  ([{ isIntersecting }]) => {
    if (!showVideo.value && isIntersecting) {
      showVideo.value = true
    }
  },
)
</script>

<style>
.tabs-component-tabs {
  width: 100%;
  white-space: nowrap;
  padding: 24px 0;
  overflow-x: auto;
  display: flex;
  column-gap: 20px;
}

.tabs-component-tab-a {
  color: #232E4A;
}

.tabs-component-panel {
  color: #6B7280;
  max-width: 768px;
  margin:auto;
}

.is-active {
  color: #e74b91;
  font-weight: bold;
}

@media (min-width: 768px) {
  .tabs-component-tabs {
    justify-content: center;
  }
}

@media (min-width: 1280px) {
  .tabs-component-panel {
    justify-content: center;
    display: grid;
    align-items: center;
    max-width: 1280px;
    gap: 30px;
    display: flex;
  }

  .tabs-component-panel > p {
    text-align: left;
    font-size: 18px;
    max-width: 500px;
    line-height: 1.6;
    order: v-bind('order.order');
  }
}

</style>
