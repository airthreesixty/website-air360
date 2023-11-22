<template>
  <section ref="target" class="bg-white">
    <div class="container py-7 lg:py-13">
      <div class="text-center">
        <span class="subtext-color font-bold">
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
  order?: number
  color?: string
}

const props = withDefaults(defineProps<Props>(), {
  order: -1,
  color: '#e74b91',
})

const order = {
  order: props.order,
}

const themeColor = {
  color: props.color,
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
  padding-bottom: 6px;
  /* font-weight: bold; */
}

.tabs-component-tab-a:hover {
  border-bottom: v-bind('themeColor.color') solid 3.5px;
  transition: all ease 0.3s;
}

.tabs-component-tab-a.is-active {
  color: v-bind('themeColor.color');
  font-weight: bold;
  border-bottom: v-bind('themeColor.color') solid 3px;
}

.tabs-component-panel {
  color: #6B7280;
  max-width: 768px;
  margin:auto;
}

.subtext-color {
  color: v-bind('themeColor.color');
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
