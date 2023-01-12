<template>
  <section class="bg-white dark:bg-gray-900">
    <div
      class="gap-8 items-center pb-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 xl:gap-16 sm:py-16 lg:px-6"
    >
      <div class="text-gray-500 dark:text-gray-400 sm:text-lg">
        <h2
          class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
        >
          Why Air360?
        </h2>
        <p class="mb-8 font-light lg:text-xl">
          従来のアナリティクスツールでは解決できない問題や課題があります。
        </p>
        <div
          class="py-8 mb-6 border-t border-b border-gray-200 dark:border-gray-700"
        >
          <div>
            <h3 class="mb-2 text-xl font-bold text-gray-900 dark:text-white">
              ユーザーがなぜ離脱したのか分からない
            </h3>
            <p class="mb-2 font-light text-gray-500 dark:text-gray-400">
              Host code that you don't want to share with the world in private
              GitHub repos only accessible to you and people you share them
              with.
            </p>
          </div>
          <div class="pt-8">
            <h3 class="mb-2 text-xl font-bold text-gray-900 dark:text-white">
              必要なデータが不明
            </h3>
            <p class="mb-2 font-light text-gray-500 dark:text-gray-400">
              See the packages your project depends on, the repositories that
              depend on them, and any vulnerabilities detected.
            </p>
          </div>
          <div class="pt-8">
            <h3 class="mb-2 text-xl font-bold text-gray-900 dark:text-white">
              アナリストやエンジニアが必要とされる
            </h3>
            <p class="mb-2 font-light text-gray-500 dark:text-gray-400">
              Find vulnerabilities in custom code using static analysis. Prevent
              new vulnerabilities from being introduced by scanning every pull
              request.
            </p>
          </div>
        </div>
      </div>
      <img
        class="mb-4 w-full lg:mb-0 rounded-lg"
        src="/detective.png"
        alt="feature image"
      >
    </div>
  </section>
</template>

<style scoped>
img {
  transform: scale(-1, 1);
}
</style>
