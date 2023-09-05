<template>
  <section class="bg-gray-50 py-10 md:py-14">
    <div class="container text-center 2xl:(grid grid-cols-6 gap-5)">
      <div class="2xl:col-span-2">
        <h2 class="title3 font-bold text-center xl:text-left">
          <ContentSlot :use="$slots.title" unwrap="p" />
        </h2>
        <p class="textp max-w-[700px] mx-auto xl:(mr-auto ml-0) xl:text-left my-4 md:mb-8">
          <ContentSlot :use="$slots.description" unwrap="p" />
        </p>
        <p class="text-black-600 font-bold lg:text-lg xl:text-left my-4 md:mb-8">
          <ContentSlot :use="$slots.description2" unwrap="p" />
        </p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 2xl:col-span-4 gap-8">
        <div v-for="{icon, title, desc}, index in cards" :key="index" class="relative shadow-primary p-5 pb-14 lg:pb-17 2xl:pb-20 rounded-lg">
          <div class="flex items-center justify-center mb-2">
            <h3 class="text-black-600 font-bold text-lg">
              {{ title }}
            </h3>
          </div>
          <p class="text-gray-500 text-center">
            {{ desc }}
          </p>
          <fa-icon class="absolute bottom-2 right-[50%] transform translate-x-[50%] text-4xl lg:text-5xl 2xl:text-6xl text-primary-600" :icon="['far', icon]" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const cards = [
  {
    icon: 'handshake-simple',
    title: '努力を結果に繋げる',
    desc: '広告からSEOに至るまで、サイトにユーザーを誘導するためには時間や費用がかかります。CVRを向上させることは、費用対効果を高めることを意味します。',
  },
  {
    icon: 'award',
    title: 'ユーザーを満足させる',
    desc: 'CROとは顧客が何を求めているか知ることです。スムーズな購入体験を提供すれば、ユーザーは何度も足を運んでくれるでしょう。',
  },
  {
    icon: 'chart-mixed',
    title: '競合と差をつける',
    desc: 'Eコマースの業界は巨大です。CROに取り組むことは、他社にはない強みとなります。',
  },
  {
    icon: 'chart-network',
    title: 'データを活用した戦略',
    desc: 'CROを行うことで、必然的にデータに基づいた意思決定を行うことになります。ユーザーへの理解が深まり、ビジネスに役立つ変化が生まれます。',
  },
]
</script>
