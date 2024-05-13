<template>
  <ClientOnly>
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
  </ClientOnly>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'case-studies',
})
</script>
