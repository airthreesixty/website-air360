<template>
  <div class="container">
    <slot name="hero" />
    <div class="md:(grid grid-cols-10 gap-x-8)">
      <div class="hidden md:(col-span-3 block)">
        <div class="md:(sticky top-35 flex flex-col gap-4)">
          <div v-for="(h2,index) in Array.from(h2s || [])" :key="index">
            <nuxt-link :to="`#${h2.id}`" class="!font-bold md:text-lg lg:text-xl" :class="{'!text-pink-600': h2.id === activeTocId } ">
              {{ h2.innerText }}
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="prose nuxt-content md:col-span-7">
        <slot name="content" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const h2s = ref<NodeListOf<HTMLElement> | null>(null)
const activeTocId = ref<String | null>(null)
const test = ref('')

const observer: Ref<IntersectionObserver | null | undefined> = ref(null)
const observerOptions = reactive({
  root: null,
  threshold: 0.5,
})

onMounted(() => {
  nextTick(() => {
    h2s.value = document.querySelectorAll('.nuxt-content h2[id]')
  })

  observer.value = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute('id')
      if (entry.isIntersecting) {
        activeTocId.value = id
      }
    })
  }, observerOptions)

  document.querySelectorAll('.nuxt-content h2[id]').forEach((section) => {
    observer.value?.observe(section)
  })
})

onUnmounted(() => {
  observer.value?.disconnect()
})
</script>
