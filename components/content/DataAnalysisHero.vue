<template>
  <div class="container pt-10 pb-6 md:pb-10 lg:pt-14">
    <div class="text-center">
      <span class="font-bold text-primary-600 text-base"><ContentSlot :use="$slots.subtext" unwrap="p" /></span>
      <h1 class="title1 my-5 font-bold text-black-600">
        <ContentSlot :use="$slots.title" unwrap="p" />
      </h1>
      <div class="text-gray-500 max-w-[650px] mx-auto mb-2 md:mb-6 lg:text-lg xl:text-xl xl:leading-8">
        <ContentSlot :use="$slots.description" />
      </div>
      <p class="py-2 lg:py-5 animation-text animate__animated animate__bounceInRight">
        <span class="highlight-container" style="--color: #e74b91; --delay: 0.7s;"><span class="highlight text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
          <ContentSlot :use="$slots.question1" unwrap="p" /></span></span>
      </p>
      <p class="py-2 lg:py-5 animation-text animate__animated animate__bounceInLeft delay-time1">
        <span class="highlight-container" style="--color: #FA734C; --delay: 2.7s;"><span class="highlight text-2xl md:text-3xl lg:text-4xl xl:text-5xl"><ContentSlot :use="$slots.question2" unwrap="p" /></span></span>
      </p>
      <p class="py-2 lg:py-5 animation-text animate__animated animate__bounceInRight delay-time2">
        <span class="highlight-container" style="--color: #3C8BFF; --delay: 4.7s;"><span class="highlight text-2xl md:text-3xl lg:text-4xl xl:text-5xl"><ContentSlot :use="$slots.question3" unwrap="p" /></span></span>
      </p>
      <h2 class="title2 mt-5 -mb-5 md:(mt-10 -mb-8) xl:mt-15 animation-text animate__animated animate__bounceInDown delay-time3">
        <ContentSlot :use="$slots.secondTitle" unwrap="p" />
      </h2>
    </div>
  </div>
</template>

<script setup lang="ts">
import 'animate.css'
</script>

<style scoped>
.animation-text {
  color: #232E4A;
  background: linear-gradient(transparent 60%,  var(--color));
  /* #fce041 */
}
.delay-time1 {
  animation-delay: 2s;
}
.delay-time2 {
  animation-delay: 4s;
}
.delay-time3 {
  animation-delay: 6s;
}

.highlight-container, .highlight {
  position: relative;
}

.highlight-container {
  display: inline-block;
}
.highlight-container:before {
  content: " ";
  display: block;
  height: 90%;
  width: 0%;
  margin-left: -3px;
  margin-right: -3px;
  position: absolute;
  background: var(--color);
  transform: rotate(2deg);
  top: -1px;
  left: -1px;
  border-radius: 20% 25% 20% 24%;
  padding: 10px 3px 3px 10px;
  animation: highlight 1s ease-in-out 1 forwards;
  animation-delay: var(--delay);
}

@keyframes highlight {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}
</style>
