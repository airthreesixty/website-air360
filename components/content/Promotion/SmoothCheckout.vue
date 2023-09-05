<template>
  <section class="bg-gray-50 py-10 md:py-14">
    <div class="container text-center xl:(grid grid-cols-5 gap-5)">
      <div class="col-span-2">
        <h2 class="title3 max-w-[700px] mx-auto font-bold text-center xl:text-left">
          <ContentSlot :use="$slots.title" unwrap="p" />
        </h2>
        <p class="textp xl:text-left my-4 md:mb-8">
          <ContentSlot :use="$slots.description" unwrap="p" />
        </p>
        <p class="text-black-600 font-bold lg:text-lg xl:text-left my-4 md:mb-8">
          <ContentSlot :use="$slots.description2" unwrap="p" />
        </p>
      </div>
      <div class="grid md:grid-cols-3 xl:col-span-3 gap-8">
        <div v-for="{icon, title, desc}, index in cards" :key="index" class="shadow-primary p-5 rounded-lg">
          <div class="flex items-center justify-start md:justify-center mb-2">
            <fa-icon class="text-xl w-9 text-primary-600 lg:text-3xl" :icon="['far', icon]" /><h3 class="text-black-600 font-bold text-lg">
              {{ title }}
            </h3>
          </div>
          <p class="text-gray-500 text-left md:text-center">
            {{ desc }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const cards = [
  {
    icon: 'circle-check',
    title: '離脱を減らす',
    desc: '複雑なチェックアウトはユーザーが離れる原因になります。ステップをシンプルにすることで、より多くのコンバージョンを獲得できます。',
  },
  {
    icon: 'circle-check',
    title: '信頼を築く',
    desc: '明瞭で安全なチェックアウトを作ることで、ユーザーに不安なく購入に進んでもえます。',
  },
  {
    icon: 'circle-check',
    title: '選択肢を与える',
    desc: 'ユーザーに支払いや発送方法を複数提供することで、気持ちよく購入してもらえます。ユーザーはオプションがあると満足度が向上します。',
  },
]
</script>
