<template>
  <div class="container pt-10 pb-6 md:pb-10 lg:pt-14">
    <div class="text-center">
      <span class="font-bold text-primary-600 text-base"><ContentSlot :use="$slots.subtext" unwrap="p" /></span>
      <h1 class="title1 my-5 font-bold text-black-600">
        <ContentSlot :use="$slots.title" unwrap="p" />
      </h1>
      <div class="text-gray-500 max-w-[650px] mx-auto lg:text-lg xl:text-xl xl:leading-8">
        <ContentSlot :use="$slots.description" />
      </div>
      <p class="animation-text animate__animated animate__bounceInRight">
        Why is my checkout abandonment so high?
      </p>
      <p class="animation-text animate__animated animate__bounceInLeft delay-time1">
        What segments convert better and why?
      </p>
      <p class="animation-text animate__animated animate__bounceInRight delay-time2">
        Why acquisition traffic is not converting?
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import 'animate.css'
</script>

<style scoped>
.animation-text {
  font-size: 30px;
  color: #232E4A;
  margin: 10px 0;
  font-weight: bold;
}
.delay-time1 {
  animation-delay: 1.5s;
}
.delay-time2 {
  animation-delay: 3s;
}
.delay-time3 {
  animation-delay: 4.5s;
}
</style>
