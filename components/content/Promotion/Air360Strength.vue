<template>
  <div class="my-8 py-8 px-4">
    <div class="flex flex-col items-center shadow-primary rounded-lg px-4 py-6 max-w-[600px] mx-auto">
      <div class="flex gap-3">
        <Logo is-dark />
        <MochiBinoculars class="w-10 h-auto" />
      </div>
      <h2 class="text-black-600 text-2xl font-bold my-4">
        Air360の3つの強み
      </h2>
      <div>
        <ul>
          <li class="flex items-center gap-3">
            <fa-icon class="fa-2x text-primary-600" :icon="['far', 'circle-check']" />タグ埋め不要、自動で全てのデータをトラッキング
          </li>
          <li class="flex items-center gap-3 mt-2">
            <fa-icon class="fa-2x text-primary-600" :icon="['far', 'circle-check']" />ユーザーのインサイトに繋がるデータを可視化
          </li>
          <li class="flex items-center gap-3 mt-2">
            <fa-icon class="fa-2x text-primary-600" :icon="['far', 'circle-check']" />様々なツールと統合し、マーケティングにも活用できる
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.shadow-primary {
    box-shadow: 0 0 0 2px rgba(231,75,145,1), 8px 8px 0 0 rgba(231,75,145,1);
}
</style>
