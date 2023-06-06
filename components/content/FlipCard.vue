<template>
  <div class="relative group bg-transparent h-[254px] perspect-[1000px]">
    <div class="innerCard flex flex-col items-center p-6 transform group-hover:rotate-y-180">
      <div class="frontSide shadow rounded-lg border-[2px]">
        <div class="flex flex-col items-center">
          <div class="inline-flex justify-center items-center mt-8 mb-6 w-24 h-24 rounded-lg bg-primary-100">
            <svg class="mx-auto w-16 h-16 text-primary-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" /><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" /></svg>
          </div>
          <h3 class="text-2xl px-4 font-bold text-center">
            {{ title }}
          </h3>
        </div>
      </div>
      <div class="backSide shadow rounded-lg px-4 border-[2px]">
        <p class="text-gray-500 md:text-lg">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  description: string
}

defineProps<Props>()
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
  /* justify-content: space-between; */
  /* gap: 8px;
  justify-content: space-evenly; */
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
