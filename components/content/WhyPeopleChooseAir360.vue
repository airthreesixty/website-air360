<template>
  <div class="bg-white">
    <div class="mx-auto max-w-screen-[1400px] py-16 px-4 md:py-24 lg:max-w-7xl lg:px-8">
      <!-- <h2 class="text-2xl font-bold tracking-tight text-gray-900">Shop by Collection
      </h2>
      <p class="mt-4 text-base text-gray-500">
        Each season, we collaborate with world-class designers to create a collection inspired by the natural world.
      </p> -->
      <div class="mt-10 space-y-12 md:grid md:grid-cols-3 md:space-y-0">
        <div v-for="category in categories" :key="category.name" class="group block">
          <div aria-hidden="true" class="aspect-w-3 aspect-h-2 overflow-hidden lg:aspect-w-5 lg:aspect-h-6">
            <img :src="category.imageSrc" :alt="category.imageAlt" class="h-[250px] w-full object-cover object-center">
          </div>
          <div class="px-1 md:px-2">
            <h3 class="mt-4 text-xl font-semibold text-black-600 lg:text-2xl">
              {{ category.name }}
            </h3>
            <p class="mt-2 text-lg text-gray-500">
              {{ category.description }}
            </p>
            <div class="inline-block ">
              <a href="#" class="flex text-primary-600 mt-3 items-center">
                <p>
                  {{ $t("more") }}
                </p>
                <svg
                  class="w-5 h-5 ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const categories = [
  {
    name: 'スマート',
    imageSrc: '/smartDescription.png',
    imageAlt: 'Brown leather key ring with brass metal loops and rivets on wood table.',
    description: '視覚的な情報や事前通知を駆使し、あなたの意思決定をアシスタントします。',
  },
  {
    name: '直感的',
    imageSrc: '/intuitiveDescription.png',
    imageAlt: 'Natural leather mouse pad on white desk next to porcelain mug and keyboard.',
    description: '優れた操作性を備え持ち、コードレス&タグレスですぐに分析を始められます。',
  },
  {
    name: '連携性',
    imageSrc: '/dataIntegration.png',
    imageAlt: 'Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.',
    description: '豊富な種類の外部ツールとの連携が可能なオープンエコシステムなアプローチを採用しています。',
  },
]
</script>
