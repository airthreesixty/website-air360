<template>
  <section class="bg-white dark:bg-gray-900">
    <div
      class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6"
    >
      <img
        class="w-full dark:hidden"
        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
        alt="dashboard image"
      />
      <img
        class="w-full hidden dark:block"
        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
        alt="dashboard image"
      />
      <div class="mt-4 md:mt-0">
        <h2
          class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
        >
          実績
        </h2>
        <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
          世界24か国約70ヶ所にリゾートを展開するクラブメッドはAir360導入後、コンバージョン率
          +50%、そしてオプションの保存率
          +100%と大幅な売り上げ増加に成功しました。
        </p>
        <div
          class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6"
        >
          <dl
            class="grid max-w-screen-md gap-8 mx-auto text-gray-900 grid-cols-2 dark:text-white"
          >
            <div class="flex flex-col items-center justify-center">
              <dt class="mb-2 text-3xl md:text-4xl font-extrabold">+100%</dt>
              <dd class="font-light text-gray-500 dark:text-gray-400">
                コンバージョン率
              </dd>
            </div>
            <div class="flex flex-col items-center justify-center">
              <dt class="mb-2 text-3xl md:text-4xl font-extrabold">+50%</dt>
              <dd class="font-light text-gray-500 dark:text-gray-400">
                オプション保存率
              </dd>
            </div>
          </dl>
        </div>
        <div
          class="inline-flex items-center text-white bg-primary-600 hover:bg-primary-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
        >
          もっと見る
          <svg
            class="ml-2 -mr-1 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>
