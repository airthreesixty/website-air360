<template>
  <div class="relative bg-transparent h-[254px] perspect-[1000px]" @click="flip">
    <div :class="{'rotate-y-180': isActive}" class="innerCard flex flex-col items-center p-6 transform">
      <div class="frontSide shadow rounded-lg">
        <div class="relative flex flex-col p-8 h-full">
          <component :is="logo" class="w-25 h-15 object-contain" :style="`transform: scale(${scale})`" />
          <h3 class="text-2xl font-bold text-left mb-2 mt-1">
            {{ title }}
          </h3>
          <p class="text-left text-black-600 mb-5">
            {{ description }}
          </p>
          <p class="absolute bottom-4 text-primary-600 text-left">
            Learn More
          </p>
        </div>
      </div>
      <div class="backSide shadow rounded-lg p-8">
        <h3 class="text-2xl font-bold text-left mb-3">
          {{ title }}
        </h3>
        <p class="text-gray-500 text-left md:text-lg">
          {{ backDescription }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ConcreteComponent } from 'nuxt/dist/app/compat/capi'

interface Props {
  title: string
  description: string
  logo: string | ConcreteComponent
  scale: number
  backDescription: string
}

defineProps<Props>()

const isActive = ref(false)

const flip = () => {
  isActive.value = !isActive.value
}
</script>

<style scoped>
.innerCard {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  cursor: pointer;
}

.frontSide,
.backSide {
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.frontSide,
.frontSide::before {
  background-color: white;
}

.backSide,
.backSide::before {
  background-color: white;
}

.backSide {
  transform: rotateY(180deg);
}

.frontSide::before,
.backSide::before {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
}
</style>
