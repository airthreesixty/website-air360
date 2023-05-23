<template>
  <section class="relative">
    <div
      class="container pt-46 md:pt-58 lg:pt-70 pb-22 mx-auto lg:pb-16"
    >
      <div class="place-self-center">
        <div class="flex justify-center">
          <div class="relative inline-block">
            <h1
              class="mb-6 font-title font-extrabold text-[34px] tracking-wide md:text-5xl lg:text-7xl text-center text-black-600 lg:mb-8"
            >
              <div class="flex justify-center flex-col" :class="{'!flex-row': locale === 'ja'}">
                <span class="bg-animation1" :style="`--content: '${$t('title1')}'`"><span class="letter1">{{ $t('title1') }}</span></span>
                <span class="bg-animation2" :style="`--content: '${$t('title2')}'`"><span class="letter2">{{ $t('title2') }}</span></span>
              </div>

              <span class="bg-animation3" :style="`--content: '${$t('title3')}'`"><span class="letter3">{{ $t('title3') }}</span></span>
            </h1>
            <MochiFlyingReverse
              class="absolute right-[-26px] top-[-60px] w-21 h-21 md:w-24 lg:h-24 lg:w-28"
              :class="{'!right-[-45px]': locale === 'ja'}"
            />
          </div>
        </div>
        <h2
          class="mb-1 max-w-[448px] lg:max-w-[560px] md:text-lg mx-auto text-center font-light text-gray-500 md:text-base lg:mb-8 lg:text-xl xl:leading-8"
        >
          <ContentSlot :use="$slots.description" unwrap="p" />
        </h2>
        <div class="pt-3 mt-6 mb-2 w-52 mx-auto md:items-center">
          <span class="bg-button bg-button1" />
          <span class="bg-button bg-button2" />
          <span class="bg-button bg-button3" />
          <NuxtLink :to="$localePath('/request-demo')" class="button transition ease-in-out duration-300 hover:opacity-80">
            <div class="text-white font-bold text-base">
              {{ $t("request-demo.title") }}
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const { $localePath } = useNuxtApp()
const { locale } = useI18n()
</script>

<style scoped>
.button {
  display: flex;
  height: 48px;
  padding: 12px 24px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  width: 100%;
  box-shadow: 0 4px 4px 0 #00000010;
}

.svg-position {
  position: absolute;
  right: -45px;
  top: -60px;
}

.letter1 {
  position: relative;
  background-image: linear-gradient(90.42deg, #C141AC 20.31%, #E72192 49.67%),
linear-gradient(0deg, #232E4A, #232E4A);
  color: transparent;
  background-clip: text;
  animation: color-change1 8s infinite;
  z-index: 1;
}

.letter2 {
  background-image: linear-gradient(90.2deg, #2D92E9 14.96%, #644AD5 78.93%);
  color: transparent;
  background-clip: text;
  animation:color-change2 8s infinite;
  z-index: 1;
}

.letter3 {
  background-image: linear-gradient(90deg, #F04D66 12.54%, #FD7043 85.97%);
  color: transparent;
  background-clip: text;
  animation:color-change3 8s infinite;
  z-index: 1;
}

.bg-animation1 {
  position: relative;
  user-select: none;
  display: block;
}
.bg-animation2 {
  position: relative;
  user-select: none;
  display: block;
}
.bg-animation3 {
  position: relative;
  user-select: none;
  display: block;
}

.bg-animation1::before {
  content: var(--content);
  position: absolute;
  display: block;
  width: 100%;
  top:0;
  left:0;
  bottom:0;
  z-index: 0;
}
.bg-animation2::before {
  content: var(--content);
  position: absolute;
  width: 100%;
  top:0;
  left:0;
  bottom:0;
  z-index: 0;
}
.bg-animation3::before {
  content: var(--content);
  position: absolute;
  width: 100%;
  top:0;
  left:0;
  bottom:0;
  z-index: 0;
}

.button1 {
  background-image: linear-gradient(90deg, #C141AC 0%, #E72192 100%);
}
.button2 {
  background-image: linear-gradient(90deg, #2D92E9 -2.62%, #644AD5 100%);
}
.button3 {
  background-image: linear-gradient(90deg, #F04D66 0%, #FD7043 100%);
}

@keyframes color-change1 {
    0%,16.667%,to {
        opacity: 1
    }

    33.333%,83.333% {
        opacity: 0
    }
}

@keyframes color-change2 {
    0%,to {
        opacity: 0
    }

    33.333%,50% {
        opacity: 1
    }

    16.667%,66.667% {
        opacity: 0
    }
}

@keyframes color-change3 {
    0%,50%,to {
        opacity: 0
    }

    66.667%,83.333% {
        opacity: 1
    }
}

.bg-button1 {
    --start-color: #C141AC;
    --end-color: #E72192;
    animation: button-change-color1 8s infinite;
}
.bg-button2 {
    --start-color: #2D92E9;
    --end-color: #644AD5;
    animation: button-change-color2 8s infinite;
}
.bg-button3 {
    --start-color: #F04D66;
    --end-color: #FD7043;
    animation: button-change-color3 8s infinite;
}

.bg-button {
    background-image: linear-gradient(90deg,var(--start-color),var(--end-color));
    content: "";
    height: 48px;
    width: 208px;
    position: absolute;
    z-index: -2;
    border-radius: 8px;
}

.bg-button::before {
  background-image: linear-gradient(90deg,var(--start-color),var(--end-color));
  height: 100%;
  width: 100%;
  position: absolute;
  border: 12px solid transparent;
  background-clip: padding-box;
  content: "";
  filter:blur(36px);
  z-index: -1;
  opacity: 0.8;
}

@keyframes button-change-color1 {
    0%,16.667%,to {
        opacity: 1
    }

    33%,83.333% {
        opacity: 0
    }
}

@keyframes button-change-color2 {
    0%,16.667%,66.667%,to {
        opacity: 0
    }

    33.333%,50% {
        opacity: 1
    }
}

@keyframes button-change-color3 {
    0%,50%,to {
        opacity: 0
    }

    66.667%,83.333% {
        opacity: 1
    }
}
</style>
