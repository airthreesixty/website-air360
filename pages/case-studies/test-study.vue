<template>
  <CaseStudiesSlidePage>
    <div class="reveal">
      <div class="slides">
        <section>Single Horizontal Slide</section>
        <section>
          <section>Vertical Slide 1</section>
          <section>Vertical Slide 2</section>
        </section>
      </div>
    </div>
  </CaseStudiesSlidePage>
</template>

<script setup lang="ts">
import Reveal from 'reveal.js'
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js'

definePageMeta({
  layout: 'case-studies',
})

onMounted(() => {
  // Reveal.initialize()
  const deck = new Reveal({
    plugins: [Markdown],
  })

  deck.initialize()
})
</script>

<style>
@import url('@/node_modules/reveal.js/dist/reveal.css');
@import url('@/node_modules/reveal.js/dist/theme/white.css');
#__nuxt, main, #__nuxt > div {
  @apply h-full
}
</style>
