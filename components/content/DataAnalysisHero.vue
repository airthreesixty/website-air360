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
      <transition
        appear
        appear-active-class="fade-enter-active"
        @before-appear="beforeAppear"
        @appear="appear"
        @after-appear="afterAppear"
      >
        <p>
          Description1
        </p>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
const beforeAppear = () => {
  console.log('beforeAppear')
}

const appear = () => {
  console.log('Appear')
}

const afterAppear = () => {
  console.log('afterAppear')
}
</script>

<style scoped>
.fade-enter-active {
  animation: go 2s;
}

@keyframes go {
  from {
    background: #fff;
  }
  to {
    background: #999;
  }
}
</style>
